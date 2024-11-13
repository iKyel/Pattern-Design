// OutOfStockState.ts
import VendingMachine from "./VendingMachine";
import VendingMachineState from "../Interface/VendingMachineState";

export default class OutOfStockState implements VendingMachineState {
    constructor(private vendingMachine: VendingMachine) {}

    insertMoney(): void {
        console.log("Máy hết hàng, không thể nhận thêm tiền.");
    }

    selectProduct(productName: string): void {
        console.log(`Sản phẩm ${productName} đã hết hàng.`);
    }

    dispenseProduct(): void {
        console.log("Máy hết hàng.");
    }
}
