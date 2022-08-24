import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Job, JobDocument } from './schemas/jobs.schema';

@Injectable()
export class JobsRepository {
  constructor(@InjectModel(Job.name) private jobModel: Model<JobDocument>) {}

  async find(jobsFilterQuery: FilterQuery<Job>): Promise<Job[]> {
    return this.jobModel.find(jobsFilterQuery);
  }
}
