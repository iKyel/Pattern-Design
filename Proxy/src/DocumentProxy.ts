// DocumentProxy.ts
import { Document } from "./Document";
import { RealDocument } from "./RealDocument";

export class DocumentProxy implements Document {
    constructor(private realDocument: RealDocument, private userRole: string) {}

    displayContent(): void {
        if (this.userRole === "admin") {
            this.realDocument.displayContent();
        } else {
            console.log("Quyền truy cập bị từ chối: Bạn không có quyền xem tài liệu này.");
        }
    }
}
