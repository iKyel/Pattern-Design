import Game from "./Game";
import Caretaker from "./Caretaker";

// Index.ts
const game = new Game(100, 1, "Start");
const caretaker = new Caretaker();

// Chơi game và lưu trạng thái
game.play(200, 2, "Forest");
caretaker.saveMemento(game.save());

game.play(300, 3, "Castle");
caretaker.saveMemento(game.save());

game.play(400, 4, "Dungeon");
game.showState(); 

game.play(500, 5, "Sky");
game.showState();

// Tải lại trạng thái trước đó từ memento
game.load(caretaker.getLastMemento()!);

