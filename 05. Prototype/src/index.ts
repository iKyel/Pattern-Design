// index.ts
import { FootballTactics } from './FootballTactics';
import { Match } from './Match';

// Tạo chiến thuật ban đầu cho một trận đấu
const initialTactics = new FootballTactics("4-4-2", "Tấn công", "Messi");
const match1 = new Match(initialTactics);

// Hiển thị chiến thuật của trận đấu đầu tiên
console.log("Chiến thuật trận đấu 1:");
match1.showTactics();

// Sao chép chiến thuật cho trận đấu tiếp theo và điều chỉnh chiến thuật
const backupTactics = match1.createBackupTactics();
backupTactics.strategy = "Phòng ngự chặt chẽ";
backupTactics.keyPlayers = "Van Dijk";
const match2 = new Match(backupTactics);

// Hiển thị chiến thuật của trận đấu thứ hai
console.log("\nChiến thuật trận đấu 2:");
match2.showTactics();

// Sao chép chiến thuật cho trận đấu thứ ba và điều chỉnh một chút
const backupTactics2 = match2.createBackupTactics();
backupTactics2.formation = "3-5-2";
backupTactics2.keyPlayers= "Kante";
const match3 = new Match(backupTactics2);

// Hiển thị chiến thuật của trận đấu thứ ba
console.log("\nChiến thuật trận đấu 3:");
match3.showTactics();
