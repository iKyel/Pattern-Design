// FootballMatch.ts
import { MatchState } from './MatchState';

export class FootballMatch {
    private score!: string;
    private time!: string;
    private ballPosition!: string;

    public play(score: string, time: string, ballPosition: string): void {
        this.score = score;
        this.time = time;
        this.ballPosition = ballPosition;
        console.log(`Trạng thái mới: Điểm số = ${this.score}, Thời gian = ${this.time}, Vị trí bóng = ${this.ballPosition}`);
    }

    public createMemento(): MatchState {
        return new MatchState(this.score, this.time, this.ballPosition);
    }

    public restore(memento: MatchState): void {
        this.score = memento.getScore();
        this.time = memento.getTime();
        this.ballPosition = memento.getBallPosition();
        console.log(`Khôi phục trạng thái: Điểm số = ${this.score}, Thời gian = ${this.time}, Vị trí bóng = ${this.ballPosition}`);
    }
}
