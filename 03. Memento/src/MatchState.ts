// MatchState.ts
export class MatchState {
  constructor(
    private score: string,
    private time: string,
    private ballPosition: string
  ) {}

  public getScore(): string {
    return this.score;
  }

  public getTime(): string {
    return this.time;
  }

  public getBallPosition(): string {
    return this.ballPosition;
  }
}
