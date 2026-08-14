# Parking Lot Management System - Routers & Controllers

## Overview

This document describes the router and controller architecture for the parking lot management system. The system follows a layered architecture pattern with Express.js routers handling HTTP requests and delegating to controllers for business logic.

## Architecture Layers

```
Client/UI (HTTP)
    ↓
Express Router (HTTP handler)
    ↓
Controller (Request validation, orchestration)
    ↓
Service Layer (Business logic)
    ↓
Repository Layer (Data access)
    ↓
Domain Models
```

## Project Structure

```
src/
├── routes/
│   ├── entryRoutes.ts      # Vehicle entry endpoints
│   ├── exitRoutes.ts       # Vehicle exit endpoints
│   └── adminRoutes.ts      # Admin management endpoints
├── controller/
│   ├── EntryController.ts  # Entry business logic orchestration
│   ├── ExitController.ts   # Exit business logic orchestration
│   └── AdminController.ts  # Admin business logic orchestration
└── main/
    └── appConfig.ts        # Express app configuration
```

---

## Entry Router & Controller

### EntryRouter (`src/routes/entryRoutes.ts`)

Handles vehicle entry operations via HTTP.

#### Endpoints

| Method | Path | Description | Request Body | Response |
|--------|------|-------------|--------------|----------|
| POST | `/api/entry` | Vehicle entry | `{licensePlate, vehicleType}` | `EntryResult` |
| GET | `/api/entry/status/:ticketId` | Get ticket status | - | Ticket details |

#### POST /api/entry - Vehicle Entry

**Request Example:**
```json
{
  "licensePlate": "ABC-1234",
  "vehicleType": "CAR"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "ticket": {
    "id": "ticket_uuid",
    "vehicleId": "vehicle_uuid",
    "slotId": "slot_uuid",
    "entryTime": "2024-08-14T10:30:00Z",
    "active": true
  },
  "message": "Entry successful. Ticket ID: ticket_uuid"
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "No available slots for vehicle type: CAR"
}
```

#### GET /api/entry/status/:ticketId - Get Ticket Status

**Success Response (200):**
```json
{
  "success": true,
  "ticket": {
    "id": "ticket_uuid",
    "vehicleId": "vehicle_uuid",
    "slotId": "slot_uuid",
    "entryTime": "2024-08-14T10:30:00Z",
    "active": true
  },
  "message": "Ticket retrieved successfully"
}
```

### EntryController (`src/controller/EntryController.ts`)

Orchestrates the entry flow with dependency injection.

#### Constructor

```typescript
constructor(
    private ticketService: TicketService,
    private slotService: SlotService
)
```

#### Methods

**`enterVehicle(licensePlate: string, vehicleType: VehicleType): EntryResult`**

Processes vehicle entry:
1. Allocates available slot via `SlotService`
2. Generates ticket via `TicketService`
3. Returns `EntryResult` with ticket details

**`getTicket(ticketId: string): Ticket | null`**

Retrieves ticket details by ID.

**`getActiveTickets(): Ticket[]`**

Gets all currently active parking tickets.

---

## Exit Router & Controller

### ExitRouter (`src/routes/exitRoutes.ts`)

Handles vehicle exit operations and payment processing.

#### Endpoints

| Method | Path | Description | Request Body | Response |
|--------|------|-------------|--------------|----------|
| POST | `/api/exit` | Process exit & payment | `{ticketId}` | `ExitResult` |
| GET | `/api/exit/receipt/:ticketId` | Get receipt | - | Receipt details |
| POST | `/api/exit/retry/:ticketId` | Retry payment | - | `ExitResult` |

#### POST /api/exit - Process Exit

**Request Example:**
```json
{
  "ticketId": "ticket_uuid"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "receipt": {
    "id": "receipt_uuid",
    "ticketId": "ticket_uuid",
    "exitTime": "2024-08-14T14:30:00Z",
    "totalFee": 150.00,
    "paymentStatus": "SUCCESS"
  },
  "message": "Exit successful. Receipt ID: receipt_uuid"
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "Payment processing failed. Please retry or contact support."
}
```

#### GET /api/exit/receipt/:ticketId - Get Receipt

**Success Response (200):**
```json
{
  "success": true,
  "receipt": {
    "id": "receipt_uuid",
    "ticketId": "ticket_uuid",
    "exitTime": "2024-08-14T14:30:00Z",
    "totalFee": 150.00,
    "paymentStatus": "SUCCESS"
  },
  "message": "Receipt retrieved successfully"
}
```

#### POST /api/exit/retry/:ticketId - Retry Payment

**Success Response (200):**
```json
{
  "success": true,
  "receipt": {
    "id": "receipt_uuid",
    "ticketId": "ticket_uuid",
    "exitTime": "2024-08-14T14:30:00Z",
    "totalFee": 150.00,
    "paymentStatus": "SUCCESS"
  },
  "message": "Payment successful after retry. Receipt ID: receipt_uuid"
}
```

### ExitController (`src/controller/ExitController.ts`)

Orchestrates the exit flow with payment processing.

#### Constructor

```typescript
constructor(
    private ticketService: TicketService,
    private pricingService: PricingService,
    private paymentService: PaymentService,
    private slotService: SlotService,
    private receiptService: ReceiptService
)
```

#### Methods

**`exitVehicle(ticketId: string): ExitResult`**

Processes vehicle exit (main flow):
1. Retrieves and validates ticket
2. Calculates parking fee
3. Processes payment via payment gateway
4. Releases parking slot
5. Deactivates ticket
6. Generates receipt

**`getReceipt(ticketId: string): Receipt | null`**

Retrieves receipt for a completed exit transaction.

**`retryPayment(ticketId: string): ExitResult`**

Handles payment retry for failed transactions (useful for temporary gateway failures).

---

## Admin Router & Controller

### AdminRouter (`src/routes/adminRoutes.ts`)

Handles administrative operations for parking lot management.

#### Endpoints

##### Floor Management
| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/admin/floors` | Add new floor |
| GET | `/api/admin/floors` | Get all floors |

##### Slot Management
| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/admin/slots` | Add slot to floor |
| GET | `/api/admin/slots/status` | Get parking status |

##### Pricing Management
| Method | Path | Description |
|--------|------|-------------|
| PUT | `/api/admin/pricing` | Update pricing (flat & hourly) |
| PATCH | `/api/admin/pricing/flat` | Update flat rate |
| PATCH | `/api/admin/pricing/hourly` | Update hourly rate |
| GET | `/api/admin/pricing` | Get all pricing rules |

##### Manual Override
| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/admin/override/exit` | Manual exit override |

#### POST /api/admin/floors - Add Floor

**Request Example:**
```json
{
  "floorNumber": 3
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Floor 3 added successfully"
}
```

#### POST /api/admin/slots - Add Slot

**Request Example:**
```json
{
  "floorNumber": 1,
  "slotType": "CAR"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Slot of type CAR added to floor 1"
}
```

#### GET /api/admin/slots/status - Parking Status

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "totalSlots": 100,
    "occupiedSlots": 45,
    "availableSlots": 55,
    "byType": {
      "BIKE": {
        "total": 20,
        "occupied": 5,
        "available": 15
      },
      "CAR": {
        "total": 50,
        "occupied": 30,
        "available": 20
      },
      "EV": {
        "total": 20,
        "occupied": 8,
        "available": 12
      },
      "TRUCK": {
        "total": 10,
        "occupied": 2,
        "available": 8
      }
    }
  },
  "message": "Parking status retrieved successfully"
}
```

#### PUT /api/admin/pricing - Update Pricing

**Request Example:**
```json
{
  "vehicleType": "CAR",
  "ratePerHour": 50,
  "flatRate": 100
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Pricing updated for CAR"
}
```

#### PATCH /api/admin/pricing/flat - Update Flat Rate

**Request Example:**
```json
{
  "vehicleType": "CAR",
  "flatRate": 120
}
```

#### PATCH /api/admin/pricing/hourly - Update Hourly Rate

**Request Example:**
```json
{
  "vehicleType": "CAR",
  "ratePerHour": 60
}
```

#### POST /api/admin/override/exit - Manual Exit Override

**Request Example:**
```json
{
  "vehicleId": "vehicle_uuid",
  "reason": "Lost ticket - customer at gate"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Vehicle vehicle_uuid has been manually released from the parking lot"
}
```

### AdminController (`src/controller/AdminController.ts`)

Orchestrates administrative operations.

#### Constructor

```typescript
constructor(
    private floorRepository: IFloorRepository,
    private slotRepository: ISlotRepository,
    private pricingRuleRepository: IPricingRuleRepository,
    private ticketService: TicketService,
    private slotService: SlotService
)
```

#### Methods

**Floor Management:**
- `addFloor(floorNumber: number): void`
- `getAllFloors(): Floor[]`

**Slot Management:**
- `addSlot(floorNumber: number, slotType: VehicleType): void`
- `getParkingStatus(): any`

**Pricing Management:**
- `updatePricing(vehicleType: VehicleType, ratePerHour: number, flatRate: number): void`
- `updateFlatPricing(vehicleType: VehicleType, flatRate: number): void`
- `updateHourlyPricing(vehicleType: VehicleType, ratePerHour: number): void`
- `getAllPricingRules(): PricingRule[]`

**Manual Overrides:**
- `manualExitOverride(vehicleId: string, reason: string): {success: boolean, message: string}`

---

## App Configuration

### ParkingLotApp (`src/main/appConfig.ts`)

Central Express application configuration that ties together all routers and controllers.

#### Features

- **Middleware Setup**: JSON parsing, CORS, logging
- **Router Integration**: Mounts all routers at their API endpoints
- **Health Checks**: `/health` endpoint for service monitoring
- **API Documentation**: `/api` endpoint with API information
- **Error Handling**: Global error handler and 404 handler

#### Usage Example

```typescript
// Initialize controllers with their dependencies
const entryController = new EntryController(ticketService, slotService);
const exitController = new ExitController(
    ticketService, 
    pricingService, 
    paymentService, 
    slotService, 
    receiptService
);
const adminController = new AdminController(
    floorRepository, 
    slotRepository, 
    pricingRuleRepository, 
    ticketService, 
    slotService
);

// Create and start the app
const parkingLotApp = new ParkingLotApp(
    entryController, 
    exitController, 
    adminController
);
parkingLotApp.start(3000);
```

---

## Error Handling

### Standard Error Response Format

```json
{
  "success": false,
  "message": "Error description"
}
```

### HTTP Status Codes

- **200 OK**: Successful request
- **201 Created**: Resource created successfully
- **400 Bad Request**: Invalid request data or business logic error
- **404 Not Found**: Resource not found
- **500 Internal Server Error**: Server error

---

## Design Patterns

### 1. **Router Pattern**
- Each router handles HTTP protocol concerns
- Delegates to controller for business logic
- Provides validation and error handling

### 2. **Controller Pattern**
- Orchestrates service layer calls
- Handles business logic flow
- Returns DTOs (Data Transfer Objects)

### 3. **Dependency Injection**
- Services are injected via constructor
- Promotes loose coupling and testability

### 4. **Adapter Pattern**
- Payment gateways use adapter pattern
- Easy to add new payment providers

---

## Testing Guide

### Entry Controller Test Example

```typescript
describe('EntryController', () => {
    let controller: EntryController;
    let ticketService: MockTicketService;
    let slotService: MockSlotService;

    beforeEach(() => {
        ticketService = new MockTicketService();
        slotService = new MockSlotService();
        controller = new EntryController(ticketService, slotService);
    });

    test('enterVehicle should return EntryResult with ticket', () => {
        const result = controller.enterVehicle('ABC-1234', VehicleType.CAR);
        expect(result.success).toBe(true);
        expect(result.ticket).toBeDefined();
    });
});
```

---

## Future Enhancements

1. **Authentication & Authorization**: Add JWT-based auth for admin endpoints
2. **Rate Limiting**: Prevent API abuse
3. **Caching**: Cache frequently accessed data (pricing, floor info)
4. **WebSocket Support**: Real-time parking status updates
5. **API Versioning**: Support multiple API versions
6. **Request Logging**: Comprehensive logging with request/response details

---

## Summary

The router and controller architecture provides:
- ✅ Clean separation of concerns
- ✅ RESTful API design
- ✅ Dependency injection for testability
- ✅ Comprehensive error handling
- ✅ Extensible design for future features
