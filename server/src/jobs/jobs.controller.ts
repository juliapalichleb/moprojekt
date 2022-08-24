import { Controller, Get } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Job } from './schemas/jobs.schema';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  async getJobs(): Promise<Job[]> {
    return this.jobsService.getJobs();
  }
}
