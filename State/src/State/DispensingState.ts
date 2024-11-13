import VendingMachine from "./VendingMachine";
import VendingMachineState from "../Interface/VendingMachineState";

export default class DispensingState implements VendingMachineState {
    constructor(private vendingMachine: VendingMachine) {}

    insertMoney(): void {
        console.log("Xin chờ, máy đang trả hàng.");
    }

    selectProduct(productName: string): void {
        console.log("Xin chờ, máy đang trả hàng.");
    }

    dispenseProduct(): void {
        console.log("Đang trả sản phẩm...");
        this.vendingMachine.releaseProduct();
    }
}
