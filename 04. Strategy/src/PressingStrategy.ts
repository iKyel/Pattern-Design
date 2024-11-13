// PressingStrategy.ts
import { Strategy } from './Strategy';

export class PressingStrategy implements Strategy {
    public executeStrategy(): void {
        console.log("Triển khai chiến thuật pressing: Gây áp lực liên tục lên đối phương để giành lại bóng.");
    }
}
