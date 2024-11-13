// AssistantCoachHandler.ts
import { Handler } from './Handler';

export class AssistantCoachHandler implements Handler {
    private nextHandler: Handler | null = null;

    public setNext(handler: Handler): void {
        this.nextHandler = handler;
    }

    public handleRequest(request: string): void {
        if (request === "Substitute Player") {
            console.log("Trợ lý huấn luyện viên: Đang thay cầu thủ.");
        } else if (this.nextHandler) {
            this.nextHandler.handleRequest(request);
        } else {
            console.log("Trợ lý huấn luyện viên: Yêu cầu không thể xử lý.");
        }
    }
}
