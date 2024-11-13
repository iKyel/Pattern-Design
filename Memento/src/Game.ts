import GameState from "./GameState";
import Memento from "./Memento";

export default class Game {
    private state: GameState;

    constructor(score: number, level: number, position: string) {
        this.state = new GameState(score, level, position);
    }

    // Tạo memento để lưu trạng thái hiện tại
    save(): Memento {
        console.log("Đang lưu trạng thái hiện tại của trò chơi...");
        return new Memento(new GameState(this.state.score, this.state.level, this.state.position));
    }

    // Khôi phục trạng thái từ memento
    load(memento: Memento) {
        this.state = memento.state;
        console.log("Đã trở lại lần lưu gần nhất");
        this.state.showState();
    }

    // Cập nhật trạng thái game (khi người chơi đạt điểm hoặc cấp độ mới)
    play(score: number, level: number, position: string) {
        console.log(`Đang chơi... Trạng thái mới: Điểm=${score}, Cấp độ=${level}, Vị trí=${position}`);
        this.state = new GameState(score, level, position);
    }

    // Hiển thị trạng thái hiện tại của game
    showState() {
        this.state.showState();
    }
}
