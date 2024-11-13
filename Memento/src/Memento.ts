import GameState from "./GameState";

// Memento.ts
export default class Memento {
    constructor(public readonly state: GameState) {}
}