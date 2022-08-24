import { Injectable } from '@nestjs/common';
import { Job, JobDocument } from './schemas/jobs.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class JobsService {
  constructor(@InjectModel(Job.name) private jobModel: Model<JobDocument>) {}

  async getJobs(): Promise<Job[]> {
    return this.jobModel.find();
  }
}
