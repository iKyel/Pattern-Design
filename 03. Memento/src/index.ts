// index.ts
import { FootballMatch } from './FootballMatch';
import { MatchHistory } from './MatchHistory';

const match = new FootballMatch();
const history = new MatchHistory();

// Trận đấu bắt đầu
match.play("0-0", "00:10", "Giữa sân");
history.saveState(match.createMemento());

// Trận đấu diễn ra, cập nhật trạng thái
match.play("1-0", "15:23", "Khu vực của đội nhà");
history.saveState(match.createMemento());

match.play("1-1", "23:45", "Gần khung thành đối phương");
history.saveState(match.createMemento());

match.play("2-1", "83:45", "Tấn công trung lộ");

// Khôi phục trạng thái trước đó
console.log("\nKhôi phục trạng thái trước đó:");
const lastState = history.getLastState();
if (lastState) {
    match.restore(lastState);
}
