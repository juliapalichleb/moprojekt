import { Injectable } from '@nestjs/common';
import { JobsRepository } from './jobs.repository';
import { Job } from './schemas/jobs.schema';

@Injectable()
export class JobsService {
  constructor(private readonly jobsRepository: JobsRepository) {}

  async getJobs(): Promise<Job[]> {
    return this.jobsRepository.find({});
  }
}
