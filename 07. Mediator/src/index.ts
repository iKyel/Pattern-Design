// index.ts
import { ChatRoom } from "./ChatRoom";
import { User } from "./User";

// Tạo phòng trò chuyện
const chatRoom = new ChatRoom();

// Tạo người dùng
const user1 = new User("Hoang", chatRoom);
const user2 = new User("Kien", chatRoom);
const user3 = new User("Trang", chatRoom);

// Thêm người dùng vào phòng trò chuyện
chatRoom.addUser(user1);
chatRoom.addUser(user2);

// Người dùng gửi tin nhắn
user1.send("Chào mọi người!");
user2.send("Chào Hoang!");
user3.send("Chào Kien va Hoang!");
