/*
===============================================================================
                    PARKING LOT — COMPLETE LLD
                    MAANG / SDE-3 INTERVIEW TEMPLATE
===============================================================================


===============================================================================
=> STEP 1: REQUIREMENTS
===============================================================================

=> Functional Requirements:
1. Driver:
    - Enter parking lot.
    - Identify vehicle type.
    - Find an appropriate available slot.
    - Allocate the slot.
    - Generate parking ticket.
    - Park vehicle.
    - Present ticket at exit.
    - Calculate parking fee.
    - Make payment.
    - Release slot.
    - Close ticket.
    - Generate receipt.

2. Admin:
    - Add/remove floors.
    - Add/remove parking slots.
    - Configure slot type.
    - Configure pricing.
    - View parking occupancy.
    - Put slot into maintenance.
    - Restore slot from maintenance.

3. Out of Scope:
    - Parking reservation.
    - EV charging.
    - Monthly subscription.
    - Multiple parking locations.
    - Loyalty program.
    - Advanced analytics.

=> Assumptions / Business Rules:
    - A vehicle can have only one ACTIVE ticket.
    - A slot can have at most one ACTIVE vehicle.
    - A slot can only accommodate its supported vehicle type.
    - A vehicle cannot enter if no suitable slot is available.
    - A CLOSED ticket cannot be used again.
    - A successful payment cannot be charged again.
    - Slot allocation must be atomic.
    - Fee = minimum(hourlyRate * duration, maximumDailyRate).


=> Non-Functional Requirements:

    - Scalability:
        Support multiple floors and thousands of slots.

    - Consistency:
        A slot must not be allocated to two vehicles.

    - Availability:
        Entry and exit should remain highly available.

    - Latency:
        Slot allocation and ticket generation should be fast.

    - Extensibility:
        Easily support:
            - New vehicle types
            - New pricing strategies
            - New payment gateways
            - New slot allocation strategies

    - Security:
        Admin operations require authorization.


=> Important Edge Cases:

    - Parking lot is full.
    - No compatible slot available.
    - Invalid ticket.
    - Already closed ticket.
    - Payment failure.
    - Payment gateway timeout.
    - Duplicate payment request.
    - Two vehicles try to reserve the same slot.
    - Slot state mismatch.
    - Database failure.
    - Vehicle type mismatch.
    - Admin tries to put an occupied slot into maintenance.



===============================================================================
=> STEP 2: DOMAIN MODEL
===============================================================================

=> Core Entities:

    1. ParkingLot
    2. Floor
    3. ParkingSlot
    4. Vehicle
    5. Ticket
    6. PricingRule
    7. Payment
    8. Receipt


=> Enums:

    VehicleType:
        - BIKE
        - CAR
        - BUS
        - TRUCK
        - EV

    SlotStatus:
        - AVAILABLE
        - OCCUPIED
        - MAINTENANCE

    TicketStatus:
        - ACTIVE
        - CLOSED

    PaymentStatus:
        - PENDING
        - SUCCESS
        - FAILED

    PaymentMethod:
        - CASH
        - CARD
        - UPI


=> Vehicle:

    Vehicle
    --------------------------------
    id: UUID
    licensePlate: string
    vehicleType: VehicleType


=> ParkingLot:

    ParkingLot
    --------------------------------
    id: UUID
    name: string


=> Floor:

    Floor
    --------------------------------
    id: UUID
    parkingLotId: UUID
    floorNumber: number


=> ParkingSlot:

    ParkingSlot
    --------------------------------
    id: UUID
    floorId: UUID
    slotNumber: string
    supportedVehicleType: VehicleType
    status: SlotStatus

    Methods:
        - canAccommodate(vehicleType)
        - occupy()
        - release()
        - putInMaintenance()
        - restore()


=> Ticket:

    Ticket
    --------------------------------
    id: UUID
    vehicleId: UUID
    slotId: UUID
    entryTime: Date
    exitTime: Date | null
    status: TicketStatus

    Methods:
        - close(exitTime)


=> PricingRule:

    PricingRule
    --------------------------------
    id: UUID
    vehicleType: VehicleType
    hourlyRate: number
    maximumDailyRate: number

    Methods:
        - calculateFee(duration)


=> Payment:

    Payment
    --------------------------------
    id: UUID
    ticketId: UUID
    amount: number
    paymentMethod: PaymentMethod
    status: PaymentStatus
    createdAt: Date


=> Receipt:

    Receipt
    --------------------------------
    id: UUID
    ticketId: UUID
    paymentId: UUID
    amount: number
    exitTime: Date


=> Relationships:

    ParkingLot
        |
        | 1 : N
        ↓
      Floor
        |
        | 1 : N
        ↓
    ParkingSlot


    Vehicle
        |
        | 1 : N
        ↓
      Ticket
        |
        | N : 1
        ↓
    ParkingSlot


    Ticket
        |
        | 1 : N
        ↓
      Payment


    Ticket
        |
        | 1 : 1
        ↓
      Receipt


    VehicleType
        |
        | 1 : 1
        ↓
    PricingRule


=> Ownership:

    ParkingLot
        owns Floors

    Floor
        owns ParkingSlots

    Vehicle
        exists independently of Ticket

    Ticket
        references Vehicle and ParkingSlot

    Payment
        belongs to Ticket


=> Important:
    A ParkingSlot can have many historical Tickets,
    but only ONE ACTIVE Ticket at a time.



===============================================================================
=> STEP 3: USE CASES / INTERACTION FLOWS
===============================================================================


=> ENTRY FLOW:

    Driver
        ↓
    EntryController
        ↓
    ParkingService
        ↓
    Validate Vehicle
        ↓
    SlotService
        ↓
    Find Available Slot
        ↓
    Reserve Slot
        ↓
    TicketService
        ↓
    Create Ticket
        ↓
    TicketRepository
        ↓
    Return EntryResult


=> Simplified:

    enterVehicle()
        ↓
    findAvailableSlot()
        ↓
    reserveSlot()
        ↓
    generateTicket()
        ↓
    saveTicket()
        ↓
    return EntryResult


=> EXIT FLOW:

    Driver
        ↓
    ExitController
        ↓
    ParkingService
        ↓
    Get Ticket
        ↓
    Validate Ticket
        ↓
    PricingService
        ↓
    Calculate Fee
        ↓
    PaymentService
        ↓
    PaymentGateway
        ↓
    Release Slot
        ↓
    Close Ticket
        ↓
    Generate Receipt
        ↓
    Return ExitResult


=> ADMIN FLOW:

    Admin
        ↓
    AdminController
        ↓
    AdminService
        ↓
    FloorRepository
    SlotRepository
    PricingRepository



===============================================================================
=> STEP 4: STATE + BUSINESS RULES
===============================================================================


=> ParkingSlot State:

    AVAILABLE
        ↓
    OCCUPIED
        ↓
    AVAILABLE


    AVAILABLE
        ↓
    MAINTENANCE
        ↓
    AVAILABLE


    Invalid:
        OCCUPIED → MAINTENANCE
        unless vehicle is handled first.


=> Ticket State:

    ACTIVE
        ↓
    CLOSED


    Invalid:
        CLOSED → ACTIVE


=> Payment State:

    PENDING
       |
       +------> SUCCESS
       |
       +------> FAILED


=> Important Invariants:

    1. One slot cannot have two active tickets.

    2. One vehicle cannot have two active parking sessions.

    3. A closed ticket cannot be paid again.

    4. An occupied slot must correspond to an active parking session.

    5. A slot can only be allocated to a compatible vehicle.

    6. Successful payment cannot be duplicated for the same ticket.



===============================================================================
=> STEP 5: RESPONSIBILITIES
===============================================================================


=> ParkingService:

    Responsibilities:
        - Orchestrate entry flow.
        - Orchestrate exit flow.
        - Coordinate multiple services.

    Methods:
        - enterVehicle()
        - exitVehicle()


=> SlotService:

    Responsibilities:
        - Find suitable slot.
        - Allocate slot.
        - Release slot.
        - Validate slot compatibility.

    Methods:
        - allocateSlot(vehicleType)
        - releaseSlot(slotId)
        - getAvailableSlots(vehicleType)


=> TicketService:

    Responsibilities:
        - Create ticket.
        - Retrieve ticket.
        - Close ticket.

    Methods:
        - generateTicket(vehicle, slot)
        - getTicket(ticketId)
        - closeTicket(ticketId)


=> PricingService:

    Responsibilities:
        - Retrieve pricing rule.
        - Calculate parking fee.

    Methods:
        - calculateFee(ticket, exitTime)


=> PaymentService:

    Responsibilities:
        - Process payment.
        - Handle payment status.
        - Ensure idempotency.

    Methods:
        - processPayment(ticketId, amount, paymentMethod)


=> ReceiptService:

    Responsibilities:
        - Generate parking receipt.

    Methods:
        - generateReceipt(ticket, payment)


=> AdminService:

    Responsibilities:
        - Manage floors.
        - Manage slots.
        - Manage pricing.
        - Manage maintenance state.

    Methods:
        - addFloor()
        - addSlot()
        - updatePricing()
        - putSlotInMaintenance()
        - restoreSlot()



===============================================================================
=> STEP 6: CLASS STRUCTURE + APIs
===============================================================================


=> Architecture:

    Client
       ↓
    Controller
       ↓
    Application Service
       ↓
    Domain
       ↓
    Repository
       ↓
    Database


=> Controllers:

    EntryController:

        enterVehicle(
            licensePlate: string,
            vehicleType: VehicleType
        ): EntryResult


    ExitController:

        exitVehicle(
            ticketId: UUID,
            paymentMethod: PaymentMethod
        ): ExitResult


    AdminController:

        addFloor(floorNumber: number)

        addSlot(
            floorId: UUID,
            slotNumber: string,
            vehicleType: VehicleType
        )

        updatePricing(
            vehicleType: VehicleType,
            hourlyRate: number,
            maximumDailyRate: number
        )

        getOccupancy()


=> DTOs:

    EntryResult:
        - success
        - ticketId
        - slotNumber
        - floorNumber
        - entryTime
        - message


    ExitResult:
        - success
        - ticketId
        - amount
        - paymentStatus
        - receiptId
        - exitTime
        - message


=> Repositories:

    VehicleRepository:
        - save(vehicle)
        - findById(id)
        - findByLicensePlate(plate)
        - findActiveTicket(vehicleId)


    SlotRepository:
        - save(slot)
        - findById(slotId)
        - findAvailableSlot(vehicleType)
        - lockAvailableSlot(vehicleType)
        - update(slot)


    FloorRepository:
        - save(floor)
        - findById(id)
        - findByFloorNumber(floorNumber)


    TicketRepository:
        - save(ticket)
        - findById(ticketId)
        - findActiveByVehicleId(vehicleId)
        - findActiveBySlotId(slotId)
        - update(ticket)


    PricingRepository:
        - save(rule)
        - findByVehicleType(vehicleType)


    PaymentRepository:
        - save(payment)
        - findByTicketId(ticketId)
        - findSuccessfulPayment(ticketId)


=> Interfaces:

    PaymentGateway:

        pay(
            request: PaymentRequest
        ): PaymentResult


    SlotAllocationStrategy:

        allocate(
            slots: ParkingSlot[],
            vehicleType: VehicleType
        ): ParkingSlot


    PricingStrategy:

        calculateFee(
            pricingRule: PricingRule,
            duration: number
        ): number


=> Implementations:

    PaymentGateway:
        - RazorpayAdapter
        - StripeAdapter

    SlotAllocationStrategy:
        - FirstAvailableStrategy
        - NearestGateStrategy

    PricingStrategy:
        - HourlyPricingStrategy
        - DailyPricingStrategy



===============================================================================
=> STEP 7: IDENTIFY VARIATIONS
===============================================================================


Ask:

    "What is likely to change?"


=> Slot Allocation:

    Today:
        First available slot.

    Future:
        - Nearest gate
        - Best floor
        - EV preferred
        - Handicap preferred

    Abstraction:
        SlotAllocationStrategy


=> Pricing:

    Today:
        Minimum(hourly, daily maximum)

    Future:
        - Weekend pricing
        - Dynamic pricing
        - Holiday pricing
        - Subscription pricing

    Abstraction:
        PricingStrategy


=> Payment:

    Today:
        - UPI
        - Card
        - Cash

    Future:
        - Razorpay
        - Stripe
        - PayPal

    Abstraction:
        PaymentGateway



===============================================================================
=> STEP 8: SOLID + OOP + DESIGN PATTERNS
===============================================================================


=> OOP:

    Encapsulation:
        ParkingSlot controls its own state.

    Abstraction:
        PaymentGateway hides payment provider details.

    Polymorphism:
        Different payment / pricing / allocation strategies.

    Inheritance:
        Use only where there is a genuine IS-A relationship.


=> SOLID:

    SRP:
        SlotService → slot operations.
        TicketService → ticket operations.
        PricingService → pricing.
        PaymentService → payment.

    OCP:
        Add new pricing/allocation strategy without modifying
        existing orchestration logic.

    LSP:
        Any PaymentGateway implementation must satisfy
        PaymentGateway contract.

    ISP:
        Keep interfaces focused.

    DIP:
        Services depend on abstractions rather than
        concrete payment providers or repositories.


=> Patterns:

    Strategy Pattern:
        - PricingStrategy
        - SlotAllocationStrategy

    Adapter Pattern:
        - RazorpayAdapter
        - StripeAdapter

    Repository Pattern:
        - Data access abstraction

    Service Layer:
        - Use-case orchestration


IMPORTANT:

    Don't use a pattern just because it exists.

    Requirement
        ↓
    Variation
        ↓
    Abstraction
        ↓
    Pattern



===============================================================================
=> STEP 9: DATA + TRANSACTIONS
===============================================================================


=> Important Database Entities:

    Vehicle
    ParkingLot
    Floor
    ParkingSlot
    Ticket
    PricingRule
    Payment
    Receipt


=> Important Constraints:

    Vehicle:
        licensePlate UNIQUE


    ParkingSlot:
        (floorId, slotNumber) UNIQUE


    PricingRule:
        vehicleType UNIQUE


    Active Ticket:
        One active ticket per vehicle.

        One active ticket per slot.


=> Critical Transaction:

    Slot allocation:

        BEGIN TRANSACTION

        Find available compatible slot
                ↓
        Lock slot
                ↓
        Mark slot OCCUPIED
                ↓
        Create ticket

        COMMIT


=> Why?

    Without atomicity:

        Request A → finds Slot S1
        Request B → finds Slot S1

        Both could allocate the same slot.


=> Idempotency:

    Payment should be idempotent.

    Duplicate exit requests must not create
    duplicate successful payments.



===============================================================================
=> STEP 10: CONCURRENCY + FAILURE HANDLING
===============================================================================


=> Concurrency:

    Problem:

        Vehicle A ──┐
                    ├──> Slot S1
        Vehicle B ──┘

    Both request the last available slot.

    Solution:

        - Transaction
        - Row locking
        - Optimistic locking
        - Atomic conditional update
        - Unique constraints

    Choose the simplest mechanism that satisfies
    the consistency requirement.


=> Failure:

    Case 1:
        Payment fails.

    Result:

        Payment FAILED
            ↓
        Ticket remains ACTIVE
            ↓
        Slot remains OCCUPIED
            ↓
        User retries payment


    Case 2:
        Payment succeeds
        but slot release fails.

    Result:

        Payment SUCCESS
            ↓
        Ticket CLOSE
            ↓
        Release slot
            ↓
        Retry / reconciliation if release fails


    Case 3:
        Database temporarily unavailable.

    Result:

        Do not pretend the operation succeeded.
        Return a recoverable error / retry safely.


=> External Dependency:

    Payment gateway timeout does NOT necessarily mean
    payment failed.

    Therefore:

        PENDING
           ↓
        Verify payment status
           ↓
        SUCCESS / FAILED


=> Reconciliation:

    Background process can periodically identify
    inconsistent states and repair them.



===============================================================================
=> STEP 11: EXTENSIBILITY / FUTURE REQUIREMENTS
===============================================================================


=> Requirement:
    Add EV charging.

    Possible additions:

        ChargingStation
        ChargingService
        ChargingPricingStrategy

    Existing:

        TicketService
        PaymentService

    should require minimal/no modification.


=> Requirement:
    Multiple parking locations.

    Add:

        ParkingLocation
            ↓
        ParkingLot
            ↓
        Floor
            ↓
        ParkingSlot


=> Requirement:
    Reservation.

    Add:

        Reservation
        ReservationService
        ReservationRepository


=> Requirement:
    New payment provider.

    Add:

        New PaymentGateway implementation.

    Existing PaymentService should not change.



===============================================================================
=> STEP 12: CLASS DIAGRAM + PACKAGE STRUCTURE
===============================================================================


=> Relationships:

    ParkingLot
        |
        | 1:N
        ↓
    Floor
        |
        | 1:N
        ↓
    ParkingSlot


    Vehicle
        |
        | 1:N
        ↓
    Ticket
        |
        | N:1
        ↓
    ParkingSlot


    Ticket
        |
        | 1:N
        ↓
    Payment


    Ticket
        |
        | 1:1
        ↓
    Receipt


=> Package Structure:

    src/
    │
    ├── domain/
    │   ├── entities/
    │   │   ├── Vehicle.ts
    │   │   ├── ParkingLot.ts
    │   │   ├── Floor.ts
    │   │   ├── ParkingSlot.ts
    │   │   ├── Ticket.ts
    │   │   ├── Payment.ts
    │   │   └── Receipt.ts
    │   │
    │   ├── enums/
    │   │   ├── VehicleType.ts
    │   │   ├── SlotStatus.ts
    │   │   ├── TicketStatus.ts
    │   │   └── PaymentStatus.ts
    │   │
    │   └── strategies/
    │       ├── PricingStrategy.ts
    │       └── SlotAllocationStrategy.ts
    │
    ├── application/
    │   ├── services/
    │   │   ├── ParkingService.ts
    │   │   ├── SlotService.ts
    │   │   ├── TicketService.ts
    │   │   ├── PricingService.ts
    │   │   └── PaymentService.ts
    │   │
    │   └── dto/
    │       ├── EntryResult.ts
    │       └── ExitResult.ts
    │
    ├── infrastructure/
    │   ├── repositories/
    │   └── payment/
    │       ├── RazorpayAdapter.ts
    │       └── StripeAdapter.ts
    │
    └── interfaces/
        └── controllers/
            ├── EntryController.ts
            ├── ExitController.ts
            └── AdminController.ts



===============================================================================
=> STEP 13: TESTING
===============================================================================


=> Entry:

    ✓ Correct slot allocated.
    ✓ Incompatible slot rejected.
    ✓ Full parking lot rejected.
    ✓ Ticket generated.
    ✓ Duplicate active vehicle rejected.


=> Exit:

    ✓ Correct fee calculated.
    ✓ Successful payment.
    ✓ Failed payment.
    ✓ Ticket closed.
    ✓ Slot released.
    ✓ Duplicate exit doesn't charge twice.


=> Concurrency:

    ✓ Two vehicles cannot occupy the same slot.


=> Maintenance:

    ✓ Maintenance slot cannot be allocated.


=> Idempotency:

    ✓ Same payment request cannot create two successful charges.



===============================================================================
=> STEP 14: IMPLEMENTATION
===============================================================================


Implementation order:

    1. Domain entities
    2. Enums / value objects
    3. Interfaces
    4. Core business logic
    5. Services / use cases
    6. Repository abstractions
    7. External adapters
    8. Controllers
    9. Tests


During implementation verify:

    - Encapsulation
    - High cohesion
    - Low coupling
    - SOLID
    - Testability
    - Extensibility
    - Correct state transitions
    - Transaction boundaries
    - Idempotency



===============================================================================
=> STEP 15: DESIGN REVIEW
===============================================================================


Before finishing, ask:

    1. Is every functional requirement covered?

    2. Does every class have a clear responsibility?

    3. Is business logic in the correct place?

    4. Are domain invariants protected?

    5. Are dependencies pointing toward abstractions?

    6. What happens if two requests arrive simultaneously?

    7. What happens if an external dependency fails?

    8. Are critical operations atomic?

    9. Are duplicate requests safe?

   10. Can new requirements be added without major changes?

   11. Did I introduce unnecessary abstractions?

   12. Can I explain WHY every interface/pattern exists?

   13. Can I write tests for the important business behavior?



===============================================================================
                         CORE MENTAL MODEL
===============================================================================

    WHAT?
      ↓
    Requirements

      ↓

    HOW?
      ↓
    Use Cases / Flows

      ↓

    WHAT EXISTS?
      ↓
    Entities / Value Objects

      ↓

    HOW CONNECTED?
      ↓
    Relationships / Ownership

      ↓

    WHAT MUST ALWAYS BE TRUE?
      ↓
    State / Invariants

      ↓

    WHO DOES WHAT?
      ↓
    Responsibilities / APIs

      ↓

    WHAT IS LIKELY TO CHANGE?
      ↓
    Variations

      ↓

    HOW DO I ISOLATE THE CHANGE?
      ↓
    Abstractions

      ↓

    WHICH PATTERN, IF ANY?
      ↓
    Design Pattern

      ↓

    WHAT IF TWO REQUESTS ARRIVE?
      ↓
    Concurrency / Transactions

      ↓

    WHAT IF SOMETHING FAILS?
      ↓
    Failure / Retry / Idempotency

      ↓

    WHAT IF REQUIREMENTS CHANGE?
      ↓
    Extensibility

      ↓

    IS IT CORRECT?
      ↓
    Testing

      ↓

    IMPLEMENT
*/