// User.ts
import { Mediator } from "./Mediator";

export class User {
    constructor(public name: string, public mediator: Mediator) {}

    send(message: string): void {
        console.log(`${this.name} gửi tin nhắn: ${message}`);
        this.mediator.sendMessage(message, this);
    }

    receive(message: string): void {
        console.log(`${this.name} nhận tin nhắn: ${message}`);
    }
}
