export class LogDebugger {
  constructor(public enableDebugger: boolean) {}

  debug(message: any) {
    if (this.enableDebugger) {
      console.log("DEBUG: ", message);
    }
  }
}
