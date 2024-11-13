// VendingMachine.ts
import VendingMachineState from "../Interface/VendingMachineState";
import NoMoneyState from "./NoMoneyState";
import HasMoneyState from "./HasMoneyState";
import OutOfStockState from "./OutOfStockState";
import DispensingState from "./DispensingState";

export default class VendingMachine {
  noMoneyState: VendingMachineState;
  hasMoneyState: VendingMachineState;
  outOfStockState: VendingMachineState;
  dispensingState: VendingMachineState;

  private currentState: VendingMachineState;
  private stock: { [key: string]: number };
  private selectedProduct: string | null = null;

  constructor(stock: { [key: string]: number }) {
    this.stock = stock;

    this.noMoneyState = new NoMoneyState(this);
    this.hasMoneyState = new HasMoneyState(this);
    this.outOfStockState = new OutOfStockState(this);
    this.dispensingState = new DispensingState(this);

    this.currentState = this.isAllOutOfStock()
      ? this.outOfStockState
      : this.noMoneyState;
  }

  setState(newState: VendingMachineState) {
    this.currentState = newState;
  }

  isProductAvailable(productName: string): boolean {
    return this.stock[productName] > 0;
  }

  // Trả về số lượng hàng tồn kho cho từng sản phẩm
  isStockEmpty(): { [key: string]: number } {
    return this.stock;
  }
  isAllOutOfStock(): boolean {
    return Object.values(this.stock).every((quantity) => quantity === 0);
  }

  releaseProduct(): void {
    if (this.selectedProduct && this.stock[this.selectedProduct] > 0) {
      this.stock[this.selectedProduct] -= 1;
      console.log(
        `Sản phẩm ${
          this.selectedProduct
        } của bạn đã được trả. Số lượng còn lại: ${
          this.stock[this.selectedProduct]
        }`
      );
      this.selectedProduct = null; // Xóa sản phẩm đã chọn sau khi trả

      // Cập nhật trạng thái sau khi trả sản phẩm
      this.setState(
        this.isAllOutOfStock() ? this.outOfStockState : this.noMoneyState
      );
    } else {
      console.log(`Sản phẩm đã hết hàng.`);
      this.setState(this.outOfStockState);
    }
  }

  insertMoney(): void {
    this.currentState.insertMoney();
  }

  selectProduct(productName: string): void {
    if (this.isProductAvailable(productName)) {
      this.selectedProduct = productName;
      this.setState(this.dispensingState);
      this.currentState.selectProduct(productName);
    } else {
      console.log(`Sản phẩm ${productName} đã hết hàng.`);
      this.setState(
        this.isAllOutOfStock() ? this.outOfStockState : this.noMoneyState
      );
    }
  }

  dispenseProduct(): void {
    this.currentState.dispenseProduct();
  }
}
