// User.ts
import { Observer } from './Observer';

export class User implements Observer {
    constructor(private name: string) {}

    update(score: string, event: string): void {
        console.log(`${this.name} nhận thông báo: Tỉ số trận đấu: ${score}, Sự kiện: ${event}`);
    }
}
