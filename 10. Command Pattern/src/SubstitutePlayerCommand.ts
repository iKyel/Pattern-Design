// SubstitutePlayerCommand.ts
import { Command } from './Command';
import { AssistantCoach } from './AssistantCoach';

export class SubstitutePlayerCommand implements Command {
    private receiver: AssistantCoach;

    constructor(receiver: AssistantCoach) {
        this.receiver = receiver;
    }

    public execute(): void {
        this.receiver.substitutePlayer();
    }
}
