// CaptainHandler.ts
import { Handler } from './Handler';

export class CaptainHandler implements Handler {
    private nextHandler: Handler | null = null;

    public setNext(handler: Handler): void {
        this.nextHandler = handler;
    }

    public handleRequest(request: string): void {
        if (request === "Emergency Notification") {
            console.log("Đội trưởng: Đang thông báo cho các cầu thủ về tình huống khẩn cấp.");
        } else if (this.nextHandler) {
            this.nextHandler.handleRequest(request);
        } else {
            console.log("Đội trưởng: Yêu cầu không thể xử lý.");
        }
    }
}
