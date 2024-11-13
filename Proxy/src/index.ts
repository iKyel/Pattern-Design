// index.ts
import { RealDocument } from "./RealDocument";
import { DocumentProxy } from "./DocumentProxy";

// Tạo tài liệu thực tế
const sensitiveDocument = new RealDocument("Thông tin bí mật của công ty...");

// Người dùng với vai trò khác nhau
const adminProxy = new DocumentProxy(sensitiveDocument, "admin");
const viewerProxy = new DocumentProxy(sensitiveDocument, "viewer");

console.log("Admin truy cập:");
adminProxy.displayContent(); // Cho phép truy cập

console.log("Viewer truy cập:");
viewerProxy.displayContent(); // Từ chối truy cập
