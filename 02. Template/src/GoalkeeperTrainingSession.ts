// GoalkeeperTrainingSession.ts
import { TrainingSession } from './TrainingSession';

export class GoalkeeperTrainingSession extends TrainingSession {
    protected warmUp(): void {
        console.log("Thủ môn khởi động bằng các bài tập phản xạ và bay người.");
    }

    protected practiceTactics(): void {
        console.log("Thủ môn thực hành bắt bóng và xử lý phản xạ.");
    }
}
