// Interface đại diện cho các trạng thái của máy bán hàng
interface VendingMachineState {
    insertMoney(): void;
    selectProduct(productName: string): void;
    dispenseProduct(): void;
}

export default VendingMachineState