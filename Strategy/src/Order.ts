// Order.ts
import PaymentStrategy from "./PaymentStrategy";

export class Order {
    private paymentStrategy: PaymentStrategy;

    constructor(paymentStrategy: PaymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    setPaymentStrategy(paymentStrategy: PaymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    checkout(amount: number): void {
        this.paymentStrategy.pay(amount);
    }
}
