import { OrderProcessor } from "./OrdeerProcessor";
// Bộ xử lý đơn hàng cho thực phẩm
export class FoodOrderProcessor extends OrderProcessor {
  protected checkStock(): void {
    console.log("Kiểm tra kho cho sản phẩm thực phẩm...");
  }

  protected packageItem(): void {
    console.log("Đóng gói sản phẩm thực phẩm trong hộp giữ nhiệt...");
  }

  protected shipItem(): void {
    console.log(
      "Giao sản phẩm thực phẩm với dịch vụ giao hàng nhanh để đảm bảo tươi mới..."
    );
  }
}
