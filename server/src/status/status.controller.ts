import { Controller, Get, Param } from '@nestjs/common';
import { StatusService } from './status.service';
import { Status } from './schemas/status.schema';
import { User } from '../users/schemas/user.schema';

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Get()
  async getStatus(): Promise<Status[]> {
    return this.statusService.getStatus();
  }

  @Get(':_id')
  async getOneStatus(@Param('_id') _id: string): Promise<User> {
    return this.statusService.getStatusById(_id);
  }
}
