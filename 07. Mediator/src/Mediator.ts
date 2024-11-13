// Mediator.ts
import { User } from "./User";

export interface Mediator {
    sendMessage(message: string, user: User): void;
}
