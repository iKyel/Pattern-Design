import VendingMachineState from "../Interface/VendingMachineState";
import VendingMachine from "./VendingMachine";

// Trạng thái chưa có tiền
export default class NoMoneyState implements VendingMachineState {
    constructor(private vendingMachine: VendingMachine) {}

    insertMoney(): void {
        console.log("Tiền đã được chèn vào.");
        this.vendingMachine.setState(this.vendingMachine.hasMoneyState);
    }

    selectProduct(productName: string): void {
        console.log("Bạn cần chèn tiền trước khi chọn sản phẩm.");
    }

    dispenseProduct(): void {
        console.log("Bạn không thể nhận sản phẩm nếu chưa chèn tiền.");
    }
}