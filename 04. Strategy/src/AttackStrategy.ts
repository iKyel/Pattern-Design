// AttackStrategy.ts
import { Strategy } from './Strategy';

export class AttackStrategy implements Strategy {
    public executeStrategy(): void {
        console.log("Triển khai chiến thuật tấn công: Tăng cường cầu thủ lên tuyến trên và áp sát khung thành đối phương.");
    }
}
