import { ConsoleService } from "./console.service";

export class LogDebugger {
  constructor(
    private consoleService: ConsoleService,
    public enableDebugger: boolean
  ) {}

  debug(message: any) {
    if (this.enableDebugger) {
      this.consoleService.log(`DEBUG: ${message}`);
    }
  }
}
