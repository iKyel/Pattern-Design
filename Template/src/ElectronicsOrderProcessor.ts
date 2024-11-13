// ElectronicsOrderProcessor.ts
import { OrderProcessor } from "./OrdeerProcessor";

// Bộ xử lý đơn hàng cho sản phẩm điện tử
export class ElectronicsOrderProcessor extends OrderProcessor {
  protected checkStock(): void {
    console.log("Kiểm tra kho cho sản phẩm điện tử...");
  }

  protected packageItem(): void {
    console.log("Đóng gói sản phẩm điện tử với túi chống tĩnh điện...");
  }

  protected shipItem(): void {
    console.log("Giao sản phẩm điện tử với dịch vụ vận chuyển hàng dễ vỡ...");
  }
}
