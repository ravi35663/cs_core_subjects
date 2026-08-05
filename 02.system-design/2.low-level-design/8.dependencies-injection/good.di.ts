interface Order {
  id: number;
  item: string;
  amount: number;
}

interface IInventoryService {
  blockItem(order: Order): void;
}

interface IPaymentService {
  process(order: Order): void;
}

interface INotificationService {
  send(order: Order): void;
}

class InventoryService implements IInventoryService {
  blockItem(order: Order) {
    console.log("Item blocked");
  }
}

class PaymentService implements IPaymentService {
  process(order: Order) {
    console.log("Payment processed");
  }
}

class NotificationService implements INotificationService {
  send(order: Order) {
    console.log("Notification sent");
  }
}

class OrderService {
  constructor(
    private readonly inventory: IInventoryService,
    private readonly payment: IPaymentService,
    private readonly notification: INotificationService
  ) {}

  checkout(order: Order) {
    this.inventory.blockItem(order);
    this.payment.process(order);
    this.notification.send(order);
  }
}

class MockPaymentService implements IPaymentService {
  process(order: Order) {
    console.log("Fake payment for testing");
  }
}

const orderService = new OrderService(
  new InventoryService(),
  new MockPaymentService(),
  new NotificationService()
);
// Create other payment method

/*
=> Advantages of DI:
    1)  Swappable components (Stripe to Razorpay ..etc)
    2)  Testable with mock
    3)  Follow dependencies Inversion Principle (D in SOLID)
    4)  Open to extension (new payment types), closed for modifications
*/