import PaymentStrategy from "./PaymentStrategy";

export default class CashPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Thanh toán ${amount} bằng tiền mặt khi nhận hàng.`);
    }
}