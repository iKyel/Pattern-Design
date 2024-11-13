// TrainingSession.ts
export abstract class TrainingSession {
    // Template method
    public train(): void {
        this.prepareEquipment();
        this.warmUp();
        this.practiceTactics();
        this.coolDown();
    }

    protected prepareEquipment(): void {
        console.log("Chuẩn bị thiết bị cho buổi huấn luyện.");
    }

    protected abstract warmUp(): void;
    protected abstract practiceTactics(): void;

    protected coolDown(): void {
        console.log("Kết thúc buổi tập bằng các bài tập giãn cơ.");
    }
}
