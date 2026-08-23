/*
=> Design a parking lot systems:    
*/
/*
=> SDLC of parking lot:
    -> Vehicle Enter 
        -> Check availability for vehicle type 
            -> Allocate Vehicle and book the slot
                -> Generate Ticket
                    ->  Exit Vehicle
                        ->  Calculate fee
                            -> Make payment
                                ->  release slot
                                    ->  Closed ticket/deactivate
*/ 
// Step 1: Functional requirement:
/*
1) Entry Vehicle:
    -   Check availability for vehicle type
    -   Book slot for vehicle
    -   Generate ticket for parking

2) Exit:
    -   Validate the ticket
    -   Calculate the fee
    -   make the payment
    -   Release the booked slot
    -   Deactivate the ticket

3) Admin:
    -   Set the floors
    -   Set the slots for a floor
    -   Add the vehicle types
    -   Set the per hour price and minimum price of a day for different vehicle type
    -   Update Slots
    -   Check occupancy of the slots
*/
// Step 2: Identify entities:
/*
0)  VehicleType:
    -   CAR
    -   BIKE
    -   BUS
    -   TRUCK

2)  Vehicle:    
    1)  uuid: PK
    2)  vehicle_no: string
    3)  vehicle_type: enum

3)  Floor table:
    1)  uuid : PK
    2)  floor_no: number

4)  Slot:
    1)  uuid: PK
    2)  floor_no: FK
    3)  supported_vehicle_type: enum
    4)  status: enum (AVAILABLE | OCCUPIED | MAINTAINING)
    
5)  Ticket:
    1)  uuid: PK
    2)  vehicle_id: uui
    3)  entry_time?: Date
    4)  exit_time?: Date
    5)  status: enum (ACTIVE | CLOSED)
    6)  slot_no: uuid ;

6)  Pricing:
    1)  uuid: pk
    2)  vehicle_type:  (unique)
    3)  per_hour_price: number
    4)  maximum_per_day: number

7)  Payment:
    1)  uuid: pk
    2)  payment_status: PENDING | FAILED | SUCCESS
    3)  ticket_id: uuid
    4)  amount: number
    5)  payment_method: string 
    6)  created_at: Date

*/

// Step 3: Define Repostory:
// Step 4: Define Service

// Step 5: Define Controllers