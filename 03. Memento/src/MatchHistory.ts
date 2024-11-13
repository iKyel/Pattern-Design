// MatchHistory.ts
import { MatchState } from './MatchState';

export class MatchHistory {
    private history: MatchState[] = [];

    public saveState(state: MatchState): void {
        this.history.push(state);
        console.log("Đã lưu trạng thái!")
    }

    public getLastState(): MatchState | null {
        return this.history.length > 0 ? this.history.pop()! : null;
    }
}
