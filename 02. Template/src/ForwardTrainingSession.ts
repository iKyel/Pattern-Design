// ForwardTrainingSession.ts
import { TrainingSession } from './TrainingSession';

export class ForwardTrainingSession extends TrainingSession {
    protected warmUp(): void {
        console.log("Tiền đạo khởi động bằng bài tập tăng tốc và bật cao.");
    }

    protected practiceTactics(): void {
        console.log("Tiền đạo thực hành dứt điểm và di chuyển không bóng.");
    }
}
