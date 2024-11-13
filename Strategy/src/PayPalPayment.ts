import PaymentStrategy from "./PaymentStrategy";

export default class PayPalPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Thanh toán ${amount} qua PayPal.`);
    }
}