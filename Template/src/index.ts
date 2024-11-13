import { FashionOrderProcessor } from "./FashionOrderProcessor";
import { FoodOrderProcessor } from "./FoodOrderProcessor";
import { ElectronicsOrderProcessor } from "./ElectronicsOrderProcessor";

// Mã thực thi
const electronicsOrder = new ElectronicsOrderProcessor();
const fashionOrder = new FashionOrderProcessor();
const foodOrder = new FoodOrderProcessor();

console.log("Xử lý Đơn hàng Sản phẩm Điện tử:");
electronicsOrder.processOrder();

console.log("Xử lý Đơn hàng Sản phẩm Thời trang:");
fashionOrder.processOrder();

console.log("Xử lý Đơn hàng Thực phẩm:");
foodOrder.processOrder();
