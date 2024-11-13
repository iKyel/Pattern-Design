// FootballMatch.ts
import { Subject } from './Subject';
import { Observer } from './Observer';

export class FootballMatch implements Subject {
    private observers: Observer[] = [];
    private score: string = "0 - 0"; // Tỉ số trận đấu
    private event: string = ""; // Sự kiện mới (ví dụ: "Bàn thắng", "Thẻ đỏ")

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index >= 0) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(): void {
        this.observers.forEach(observer => observer.update(this.score, this.event));
    }

    // Phương thức cập nhật trạng thái trận đấu
    updateScore(score: string, event: string): void {
        this.score = score;
        this.event = event;
        this.notifyObservers();
    }
}
