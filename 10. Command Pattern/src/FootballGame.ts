// FootballGame.ts
import { Command } from './Command';

export class FootballGame {
    private commands: Command[] = [];

    public setCommand(command: Command): void {
        this.commands.push(command);
    }

    public executeCommands(): void {
        this.commands.forEach(command => command.execute());
    }
}
