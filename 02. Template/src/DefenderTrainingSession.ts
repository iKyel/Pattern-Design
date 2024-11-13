// DefenderTrainingSession.ts
import { TrainingSession } from './TrainingSession';

export class DefenderTrainingSession extends TrainingSession {
    protected warmUp(): void {
        console.log("Hậu vệ khởi động bằng các bài tập xoay người và di chuyển ngang.");
    }

    protected practiceTactics(): void {
        console.log("Hậu vệ thực hành chặn bóng và phòng ngự.");
    }
}
