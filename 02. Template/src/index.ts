// index.ts
import { ForwardTrainingSession } from './ForwardTrainingSession';
import { DefenderTrainingSession } from './DefenderTrainingSession';
import { GoalkeeperTrainingSession } from './GoalkeeperTrainingSession';

// Huấn luyện tiền đạo
const forwardTraining = new ForwardTrainingSession();
console.log("Buổi huấn luyện tiền đạo:");
forwardTraining.train();

console.log("\nBuổi huấn luyện hậu vệ:");
const defenderTraining = new DefenderTrainingSession();
defenderTraining.train();

console.log("\nBuổi huấn luyện thủ môn:");
const goalkeeperTraining = new GoalkeeperTrainingSession();
goalkeeperTraining.train();
