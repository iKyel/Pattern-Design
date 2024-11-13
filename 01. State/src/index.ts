// index.ts
import { Player } from './Player';
import { AttackingState } from './AttackingState';
import { DefendingState } from './DefendingState';
import { RestingState } from './RestingState';

// Tạo đối tượng cầu thủ và đặt trạng thái ban đầu là tấn công
const player = new Player(new AttackingState());
player.play(); // Output: Cầu thủ đang tấn công, cố gắng ghi bàn!

// Chuyển trạng thái sang phòng thủ
player.setState(new DefendingState());
player.play(); // Output: Cầu thủ đang phòng thủ, cố gắng giành lại bóng!

// Chuyển trạng thái sang nghỉ ngơi
player.setState(new RestingState());
player.play(); // Output: Cầu thủ đang nghỉ ngơi và hồi phục thể lực.
