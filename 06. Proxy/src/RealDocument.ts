// RealDocument.ts
import { Document } from "./Document";

export class RealDocument implements Document {
    constructor(private content: string) {}

    displayContent(): void {
        console.log("Nội dung tài liệu:", this.content);
    }
}
