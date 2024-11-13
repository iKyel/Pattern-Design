// Employee.ts
import { EmployeePrototype } from "./EmployeePrototype";

export class Employee implements EmployeePrototype {
    constructor(
        public name: string,
        public position: string,
        public salary: number
    ) {}

    // Phương thức clone để tạo bản sao
    clone(): Employee {
        return new Employee(this.name, this.position, this.salary);
    }
}
