// FootballTeam.ts
import { Strategy } from './Strategy';

export class FootballTeam {
    private strategy!: Strategy;

    public setStrategy(strategy: Strategy): void {
        this.strategy = strategy;
    }

    public play(): void {
        console.log("Đội bóng bắt đầu triển khai chiến thuật:");
        this.strategy.executeStrategy();
    }
}
