// Match.ts
import { FootballTactics } from './FootballTactics';

export class Match {
    private tactics: FootballTactics;

    constructor(tactics: FootballTactics) {
        this.tactics = tactics;
    }

    public setTactics(tactics: FootballTactics): void {
        this.tactics = tactics;
    }

    public createBackupTactics(): FootballTactics {
        return this.tactics.clone();
    }

    public showTactics(): void {
        console.log(`Sơ đồ: ${this.tactics.formation}`);
        console.log(`Xu hướng: ${this.tactics.strategy}`);
        console.log(`Cầu thủ chủ chốt: ${this.tactics.keyPlayers}`);
    }
}
