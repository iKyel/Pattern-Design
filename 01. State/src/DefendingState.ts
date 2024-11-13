// DefendingState.ts
import { PlayerState } from './PlayerState';

export class DefendingState implements PlayerState {
    public play(): void {
        console.log("Cầu thủ đang phòng thủ, cố gắng giành lại bóng!");
    }
}
