// RestingState.ts
import { PlayerState } from './PlayerState';

export class RestingState implements PlayerState {
    public play(): void {
        console.log("Cầu thủ đang nghỉ ngơi và hồi phục thể lực.");
    }
}
