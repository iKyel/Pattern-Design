// Player.ts (Lớp context)
import { PlayerState } from './PlayerState';

export class Player {
    private state: PlayerState;

    constructor(initialState: PlayerState) {
        this.state = initialState;
    }

    public setState(state: PlayerState): void {
        this.state = state;
        console.log("Trạng thái cầu thủ đã thay đổi.");
    }

    public play(): void {
        this.state.play();
    }
}
