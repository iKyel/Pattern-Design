// DefenseStrategy.ts
import { Strategy } from './Strategy';

export class DefenseStrategy implements Strategy {
    public executeStrategy(): void {
        console.log("Triển khai chiến thuật phòng thủ: Đẩy cầu thủ về phần sân nhà và tăng cường bảo vệ khung thành.");
    }
}
