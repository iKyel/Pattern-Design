import Memento from "./Memento";

export default class Caretaker {
    private mementos: Memento[] = [];

    // Lưu memento vào danh sách
    saveMemento(memento: Memento) {
        this.mementos.push(memento);
    }

    // Lấy memento cuối cùng để tải lại trạng thái
    getLastMemento(): Memento | undefined {
        return this.mementos.pop();
    }
}