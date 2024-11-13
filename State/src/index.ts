// Khởi tạo máy bán hàng 
import VendingMachine from "./State/VendingMachine";

const vendingMachine = new VendingMachine({
    "Coca-Cola": 2,
    "Snack": 0,  // Hết hàng
});

// Thử nghiệm các chức năng
vendingMachine.insertMoney();  // Chèn tiền
vendingMachine.selectProduct("Coca-Cola");  // Chọn sản phẩm
vendingMachine.dispenseProduct();  // Máy trả sản phẩm
console.log("----------------------------")

vendingMachine.insertMoney();  // Chèn tiền
vendingMachine.selectProduct("Coca-Cola");  // Chọn sản phẩm
vendingMachine.dispenseProduct();  // Máy trả sản phẩm
console.log("----------------------------")

vendingMachine.insertMoney();  // Chèn tiền
vendingMachine.selectProduct("Coca-Cola");  // Chọn sản phẩm
vendingMachine.dispenseProduct();  // Máy trả sản phẩm
console.log("----------------------------")

vendingMachine.insertMoney();  // Chèn tiền
vendingMachine.selectProduct("Snack");  // Sản phẩm hết hàng
vendingMachine.dispenseProduct();  // Không trả sản phẩm do hết hàng
