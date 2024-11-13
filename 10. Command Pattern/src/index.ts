// index.ts
import { Coach } from './Coach';
import { AssistantCoach } from './AssistantCoach';
import { ChangeTacticsCommand } from './ChangeTacticsCommand';
import { SubstitutePlayerCommand } from './SubstitutePlayerCommand';
import { FootballGame } from './FootballGame';

// Tạo các đối tượng Receiver
const coach = new Coach();
const assistantCoach = new AssistantCoach();

// Tạo các lệnh
const changeTacticsCommand = new ChangeTacticsCommand(coach);
const substitutePlayerCommand = new SubstitutePlayerCommand(assistantCoach);

// Tạo invoker
const footballGame = new FootballGame();

// Thiết lập các lệnh cho invoker
footballGame.setCommand(changeTacticsCommand);
footballGame.setCommand(substitutePlayerCommand);

// Thực thi các lệnh
footballGame.executeCommands();
