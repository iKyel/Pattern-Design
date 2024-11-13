// index.ts
import { Order } from "./Order";
import CreditCardPayment from "./CreditCardPayment";
import CashPayment from "./CashPayment";
import PayPalPayment from "./PayPalPayment";

const amount = 500;

// Khởi tạo đơn hàng với phương thức thanh toán bằng thẻ tín dụng
let order = new Order(new CreditCardPayment());
console.log("Đặt hàng:");
order.checkout(amount); // Output: Thanh toán 500 bằng thẻ tín dụng.

// Thay đổi phương thức thanh toán sang PayPal
order.setPaymentStrategy(new PayPalPayment());
console.log("Đặt hàng:");
order.checkout(amount); // Output: Thanh toán 500 qua PayPal.

// Thay đổi phương thức thanh toán sang tiền mặt
order.setPaymentStrategy(new CashPayment());
console.log("Đặt hàng:");
order.checkout(amount); // Output: Thanh toán 500 bằng tiền mặt khi nhận hàng.
