/*
src
│
├── domain
│   ├── Floor.ts
│   ├── ParkingSlot.ts
│   ├── Payment.ts
│   ├── PricingRule.ts
│   ├── Receipt.ts
│   ├── Ticket.ts
│   └── Vehicle.ts
│
├── adapter
│   ├── PaymentGatewayAdapter.ts
│   ├── RazorpayAdapter.ts
│   └── StripeAdapter.ts
│
├── controller
│   ├── AdminController.ts
│   ├── EntryController.ts
│   └── ExitController.ts
│
├── repository
│   ├── FloorRepository.ts
│   ├── PaymentRepository.ts
│   ├── PricingRuleRepository.ts
│   ├── SlotRepository.ts
│   └── TicketRepository.ts
│
├── service
│   ├── AdminService.ts
│   ├── PaymentService.ts
│   ├── PricingService.ts
│   ├── ReceiptService.ts
│   ├── SlotService.ts
│   └── TicketService.ts
│
├── main
│   └── ParkingLotSimulation.ts
│
├── types
│   ├── VehicleType.ts
│   ├── PaymentStatus.ts
│   ├── PaymentGateway.ts
│   └── SlotStatus.ts
│
├── dto
│   ├── EntryResult.ts
│   └── ExitResult.ts
│
├── routes
│   ├── admin.routes.ts
│   ├── entry.routes.ts
│   └── exit.routes.ts
│
├── app.ts
└── server.ts
*/