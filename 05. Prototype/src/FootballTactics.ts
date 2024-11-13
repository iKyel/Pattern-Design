// FootballTactics.ts
import { TacticsPrototype } from "./TaticsPrototype";

export class FootballTactics implements TacticsPrototype {
    constructor(
        public formation: string,
        public strategy: string,
        public keyPlayers: string
    ) {}

    public clone(): FootballTactics {
        return new FootballTactics(this.formation, this.strategy, this.keyPlayers);
    }
}
