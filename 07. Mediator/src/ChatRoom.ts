// ChatRoom.ts
import { Mediator } from "./Mediator";
import { User } from "./User";

export class ChatRoom implements Mediator {
    private users: User[] = [];

    addUser(user: User): void {
        this.users.push(user);
    }

    sendMessage(message: string, user: User): void {
        // Gửi tin nhắn cho tất cả người dùng khác trong phòng trò chuyện
        for (const u of this.users) {
            // Người gửi không nhận tin nhắn
            if (u !== user) {
                u.receive(message);
            }
        }
    }
}
