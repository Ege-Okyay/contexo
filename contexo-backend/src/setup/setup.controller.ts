import { Controller, Get } from '@nestjs/common';
import { SetupService } from './setup.service';

@Controller('setup')
export class SetupController {
  constructor(private setupService: SetupService) { }

  @Get('/status')
  async getSetupStatus() {
    return this.setupService.getSetupStatus();
  }
}
