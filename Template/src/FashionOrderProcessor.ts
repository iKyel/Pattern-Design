import { OrderProcessor } from "./OrdeerProcessor";

// Bộ xử lý đơn hàng cho sản phẩm thời trang
export class FashionOrderProcessor extends OrderProcessor {
  protected checkStock(): void {
    console.log("Kiểm tra kho cho sản phẩm thời trang...");
  }

  protected packageItem(): void {
    console.log("Đóng gói sản phẩm thời trang trong hộp có thương hiệu...");
  }

  protected shipItem(): void {
    console.log("Giao sản phẩm thời trang với dịch vụ giao hàng tiêu chuẩn...");
  }
}
