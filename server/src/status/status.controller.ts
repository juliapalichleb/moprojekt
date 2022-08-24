import { Controller, Get } from '@nestjs/common';
import { StatusService } from './status.service';
import { Status } from './schemas/status.schema';

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Get()
  async getStatus(): Promise<Status[]> {
    return this.statusService.getStatus();
  }
}
