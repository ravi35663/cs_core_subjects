// Step: 1
/*
=> Functional Requirements: LLD
    1)  Entry Flow:
        -   Vehicle arrives at the gate
        -   Generate ticket and assign slot based on vehicle type
        -   Mark slot as occupied
        -   Return EntryResult with success/failure status
    2)  Exit flow:
        -   User present ticket at exit
        -   Calculate fee based on pricing rules(minimum of flat and hourly pricing)
        -   Process payment through payment gateway
        -   Release slot and generate receipt
        -   Return ExitResult with success/failure status

    3)  Admin Configuration:
        -   Add/Edit/Delete Floors and Slots
        -   Define pricing rule based on vehicle type(Both flat and hourly rate)
        -   Update flat and hourly price for vehicle types
        -   View Current parking status

Note:   
    -   You can think of cases like some server failure, where we may need a human to override 
        instead of automate gates working by themselves.
*/
/*
=> Non Functional Requirement (HLD):
    -   Scalability:    Must support multiple parking lots and thousands of slots
    -   Consistency:    Strong consistency for slot allocation and release
    -   Availability:   High availability for Entry/Exit even during payment gateway failure
    -   Latency:        Low latency(<500ms) for ticket generation and exit processing
    -   Extensibility:  Easily add new vehicle type, pricing strategies or gateways
    -   Security:   Role-based access for admin actions
*/
/*
=>  Edge - Cases:
    -   Payment failure during exit - retry and hold slot
    -   Ticket Lost: allow admin override
    -   Clock Skew: System time validation: client and server time must be in sync.
    -   Slot state mismatch: periodic reconciliation
*/

//Step - 2: Identify core entities:
/*
1)  Vehicle:
    - id: UUID [PK]
    - licensePlate: String
    - vehicleType: Enum(BIKE, CAR, EV, TRUCK)

2)  ParkingSlot:
    - id: UUID [PK]
    - slotType: Enum(BIKE, CAR, EV, TRUCK)
    - isOccupied: boolean
    - floorNumber: int

3)  Floor:
    - id: UUID [PK]
    - floorNumber: int
    - slots: Array<ParkingSlot>

4)  Ticket:
    - id: UUID [PK]
    - vehicleId: UUID [FK-> Vehicle.id]
    - slotId: UUID [FK-> ParkingSlot.id]
    - entryTime: Timestamp
    - isActive: boolean

5)  Receipt:
    - id: UUID [PK]
    - ticketId: [FK -> Ticket.id]
    - exitTime: Timestamp
    - totalFee: Double
    - paymentStatus: Enum(PENDING, SUCCESS, FAILED)

6)  PricingRule:
    - id: UUID [PK]
    - vehicleType: Enum(BIKE, CAR, EV, TRUCK)
    - ratePerHour: Double
    - flatRate: Double
    - ruleType: Enum(FLAT, HOURLY)

7)  Payment:
    - id: UUID [PK]
    - ticketId: UUID [FK -> Ticket.id]
    - amount: Double
    - gateway: Enum(RAZORPAY, STRIPE)
    - status: Enum(PENDING, SUCCESS, FAILED)

=> DTO's: API that are going to use:
1)  EntryResult:
    - success: boolean
    - ticket: Ticket (if applicable)
    - message: string

2)  ExitResult:
    - success: boolean
    - receipt: Receipt (if applicable)
    - message: string
*/

// Step - 3: Discuss interaction flow:
/*
1)  Entry flow:
    -   Driver enters, gets a slot, get's ticket

2)  Exit flow:
    -   Driver exits, shows the ticket, price computes (minimum of flat and hourly pricing)
    -   Pay's the amount (with retries if it fails)
    -   Get the receipt, slot released, ticket deactivated to avoid multiple entry

3)  Admin flow:
    -   Admin requests to add floor, add slots or update pricing
*/

// Step 4: Discuss class structures and relationships:
/*
=>  Architecture Layers:
    Client/UI -> Controller Layer(HTTP/API) -> Service Layer -> Repository Layer -> Domain Layer

=> Controllers:
    1) Entry Controller:
        -   enterVehicle(licensePlate:string, vehicleType: VehicleType): EntryResult

    2) ExitController:
        -   exitVehicle(ticketId:UUID):ExitResult

    3) AdminController:
        -   addFloor(floorNumber: number): void
        -   addSlot(floorNumber: number, slotType: VehicleType): void
        -   updatePricing(vehicleType: VehicleType, ratePerHour: number, flatRate: number): void
        -   updateFlatPricing(vehicleType: VehicleType, flatRate: number): void
        -   updateHourlyPricing(vehicleType: VehicleType, ratePerHour: number): void  

=> Services:
    1) TicketService:
        -   generateTicket(vehicle:Vehicle, slot: ParkingSlot): Ticket
        -   getTicket(ticketId: UUID): Ticket
    
    2) SlotService:
        -   allocateSlot(vehicleType: VehicleType): ParkingSlot
        -   releaseSlot(slotId: UUID): void
    
    3) PricingService: 
        -   calculateFee(ticket: Ticket): number // return minimum of flat and hourly pricing
    
    4) PaymentService: 
        -   processPayment(ticketId: UUID, amount: number): boolean

    5) ReceiptService:
        -   generateReceipt(ticket: Ticket, fee: number, paymentSuccess: boolean): Receipt

    6) AdminService:
        -   addFloor(floorNumber: number): void
        -   addSlot(floorNumber: number, slotType: VehicleType): void
        -   updatePricing(vehicleType: VehicleType, ratePerHour: number, flatRate: number): void
        -   updateFlatPricing(vehicleType: VehicleType, flatRate: number): void
        -   updateHourlyPricing(vehicleType: VehicleType, ratePerHour: number): void  

=> Repository:
    1) TicketRepository:
        -   save(ticket: Ticket): void
        -   findById(ticketId: UUID): void
        -   findActiveTickets():Array<Ticket>
        -   deactivateTicket(tickerId:UUID): void

    2) SlotRepository:
        -   save(slot:ParkingSlot): void;
        -   findById(slotId: UUID): ParkingSlot;
        -   findAvailableSlot(vehicleType: VehicleType): ParkingSlot;
    
    3) FloorRepository:
        -   save(floor: Floor): void
        -   findByFloorNumber(floorNumber: number): Floor

    4) PricingRuleRepository:
        -   save(rule: PricingRule): void
        -   findByVehicleType(vehicleType: VehicleType): PricingRule
    
    5) PaymentRepository:
        -   save(payment: Payment): void
        -   findByTickerId(ticketId: UUID): Payment

=> Interfaces:
    1) PaymentGatewayAdapter:
        - pay(ticketId: UUID, amount: number): boolean

=> Implementations:
    1) RazorpayAdapter implements PaymentGatewayAdapter
    2) StripeAdapter implements PaymentGatewayAdapter
*/

// Step 5: Core use cases and methods:
/*
1) Entry Use Case:
    -   enterVehicle() -> SlotService.allocateSlot() -> TicketService.generateTicket() 
        -> TicketRepository.save() -> return EntryResult

2)  Exit Use case:
    -   exitVehicle() -> TicketService.getTicket() -> PricingService.calculateFee() 
        -> PaymentService.processPayment() -> PaymentGatewayAdapter.pay() -> SlotService.releaseSlot()
        ->  ReceiptService.generateReceipt() -> return ExitResult

3)  Admin Use Cases:
    -   addFloor() -> AdminService -> FloorRepository.save()
    -   addSlot() -> SlotRepository.save()
    -   updatePricing() ->  PricingRuleRepository.save()
*/

// Step 6: OOP Principles and design patterns:
/*
=> Design patterns used:
    1)  Adapter Pattern: to integrate with different payment gateways (Razorpay, Stripe)
    2)  Repository Pattern: for data access abstraction
    3)  Service Layer Pattern:  for business logic separation

=>  OOP Principles applied:
    1)  Interface Segregation:  separate responsibilities by interface (PaymentGatewayAdapter)
    2)  Dependency Inversion:   Service depend on interfaces, not concrete implementation
    3)  Single Responsibility:  each class has one clear purpose
    4)  Open/Closed:    easy to extend with new vehicle type, pricing strategies, payment
    5)  Encapsulation:  domain objects encapsulate their data and behavior.
*/

// Step 7: Handle Edge cases:
/*
=> Edge case solutions:
    1)  Exit without ticket: admin override functionality through AdminController
    2)  Payment failed: PaymentGatewayAdapter returns boolean, handle failure in PaymentService
    3)  Vehicle type mismatch:  verify at entry and exit through SlotService
    4)  Time mismatch:  use system clock consistently across all services
    5)  Slot inconsistency: run periodic reconciliation service

=>  Implementation Strategies:
    1)  Exit without ticket:    special admin endpoints for manual operations through AdminController
    2)  Payment retry logic:    PaymentService handles boolean results from PaymentGatewayAdapter
    3)  Vehicle type mismatch:  Validate vehicle type compatibility at entry/exit through SlotService
    4)  Clock Synchronization:  Use centralized time service across all timestamp operations
    5)  Reconciliation Service: Background job to fix slot state inconsistencies.
*/

// Step 8: Class diagram and package structure:
/*
1)  Association:    I work with you
2)  Aggregation:    I have you, but you are not mine
3)  Composition:    You are mine and only mine:
*/

// Step 9:  Future requirement: Optional
/*
=> Future functional Requirement:
    1)  Multi-location support:
        -   Support multiple parking lots across different cities
        -   Centralized admin dashboard for all locations
        -   Location specific pricing and rules

    2)  Advance payment feature:
        -   Digital wallet integration
        -   Subscription-based parking passes
        -   Corporate billing and invoicing
        -   Multiple payment methods (cards, UPI, digital wallet)

    3)  User management:
        -   User registration and profile
        -   Vehicle registration and management
        -   Parking history and analytics
        -   Loyalty programs and rewards

    4)  Reservation System:
        -   Pre-book parking slots
        -   Time based reservations
        -   Premium spot reservations
        -   Cancellation and refund handling

    5)  Real-time features:
        -   Live slot available updates
        -   Mobile app for ticket management
        -   QR code generation and scanning
        -   Push notifications for remainder

    6)  Analytics and Reporting:
        -   Revenue analytics and forecasting
        -   Occupancy rate analytics
        -   Peak hour identifications
        -   Customer behavior insights
*/
