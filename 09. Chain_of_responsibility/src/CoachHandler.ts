// CoachHandler.ts
import { Handler } from './Handler';

export class CoachHandler implements Handler {
    private nextHandler: Handler | null = null;

    public setNext(handler: Handler): void {
        this.nextHandler = handler;
    }

    public handleRequest(request: string): void {
        if (request === "Change Tactics") {
            console.log("Huấn luyện viên: Đang thay đổi chiến thuật.");
        } else if (this.nextHandler) {
            this.nextHandler.handleRequest(request);
        } else {
            console.log("Huấn luyện viên: Yêu cầu không thể xử lý.");
        }
    }
}
