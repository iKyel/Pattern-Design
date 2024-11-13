// index.ts
import { FootballMatch } from './FootballMatch';
import { User } from './User';

// Tạo đối tượng FootballMatch
const footballMatch = new FootballMatch();

// Tạo người dùng và đăng ký nhận thông báo
const user1 = new User("Kiên");
const user2 = new User("Tráng");

footballMatch.addObserver(user1);
footballMatch.addObserver(user2);

// Cập nhật tỉ số và sự kiện trong trận đấu, sau đó thông báo cho người dùng
footballMatch.updateScore("1 - 0", "Bàn thắng của Sun lì");

// Cập nhật thêm sự kiện và thông báo lại
footballMatch.updateScore("2 - 1", "Bàn thắng của Ri đỗ");

// Hủy đăng ký người dùng Bob và thông báo cho Alice
footballMatch.removeObserver(user2);
footballMatch.updateScore("3 - 1", "Sun lì ghi hattrick!!");
