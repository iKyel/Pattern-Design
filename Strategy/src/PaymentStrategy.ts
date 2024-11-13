// PaymentStrategy.ts
export default interface PaymentStrategy {
    pay(amount: number): void;
}
