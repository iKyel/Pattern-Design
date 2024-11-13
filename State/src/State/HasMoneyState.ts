// Trạng thái có tiền
import VendingMachine from "./VendingMachine";
import VendingMachineState from "../Interface/VendingMachineState";

export default class HasMoneyState implements VendingMachineState {
    constructor(private vendingMachine: VendingMachine) {}

    insertMoney(): void {
        console.log("Bạn đã chèn tiền rồi.");
    }

    selectProduct(productName: string): void {
        if (this.vendingMachine.isProductAvailable(productName)) {
            console.log(`Sản phẩm ${productName} đã được chọn.`);
            this.vendingMachine.setState(this.vendingMachine.dispensingState);
        } else {
            console.log(`Sản phẩm ${productName} đã hết hàng.`);
            this.vendingMachine.setState(this.vendingMachine.outOfStockState);
        }
    }

    dispenseProduct(): void {
        console.log("Bạn cần chọn sản phẩm trước khi máy trả hàng.");
    }
}