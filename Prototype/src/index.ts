// index.ts
import { Employee } from "./Employee";

// Khởi tạo một đối tượng nhân viên mẫu
const originalEmployee = new Employee("John Doe", "Developer", 5000);

// Tạo một bản sao của nhân viên mẫu
const newEmployee1 = originalEmployee.clone();
newEmployee1.name = "Do Xuan Kien"; // Tùy chỉnh thuộc tính của bản sao
newEmployee1.salary = 5500;

const newEmployee2 = originalEmployee.clone();
newEmployee2.name = "Truong Tuan Anh";
newEmployee2.position = "Senior Developer";
newEmployee2.salary = 7000;

console.log("Nhan vien chinh thuc: ", originalEmployee);
console.log("Nhan vien 1:", newEmployee1);
console.log("Nhan vien 2:", newEmployee2);
