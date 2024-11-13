// AttackingState.ts
import { PlayerState } from './PlayerState';

export class AttackingState implements PlayerState {
    public play(): void {
        console.log("Cầu thủ đang tấn công, cố gắng ghi bàn!");
    }
}
