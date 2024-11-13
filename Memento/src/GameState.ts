export default class GameState {
    constructor(public score: number, public level: number, public position: string) {}

    showState() {
        console.log(`Trạng thái hiện tại: Điểm: ${this.score}, Cấp độ: ${this.level}, Vị trí: ${this.position}`);
    }
}