// ChangeTacticsCommand.ts
import { Command } from './Command';
import { Coach } from './Coach';

export class ChangeTacticsCommand implements Command {
    private receiver: Coach;

    constructor(receiver: Coach) {
        this.receiver = receiver;
    }

    public execute(): void {
        this.receiver.changeTactics();
    }
}
