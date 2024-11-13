// index.ts
import { FootballTeam } from './FootballTeam';
import { AttackStrategy } from './AttackStrategy';
import { DefenseStrategy } from './DefenseStrategy';
import { PressingStrategy } from './PressingStrategy';

const team = new FootballTeam();

// Sử dụng chiến thuật tấn công
team.setStrategy(new AttackStrategy());
team.play();

// Chuyển sang chiến thuật phòng thủ
team.setStrategy(new DefenseStrategy());
team.play();

// Chuyển sang chiến thuật pressing
team.setStrategy(new PressingStrategy());
team.play();
