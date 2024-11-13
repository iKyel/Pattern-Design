// CreditCardPayment.ts
import PaymentStrategy from "./PaymentStrategy";

export default class CreditCardPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Thanh toán ${amount} bằng thẻ tín dụng.`);
    }
}

