// Handler.ts
export interface Handler {
    setNext(handler: Handler): void;  // Thiết lập đối tượng handler tiếp theo trong chuỗi
    handleRequest(request: string): void;  // Xử lý yêu cầu hoặc chuyển tiếp yêu cầu cho handler tiếp theo
}
