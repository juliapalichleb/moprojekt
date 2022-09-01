import { Injectable } from '@nestjs/common';
import { Status, StatusDocument } from './schemas/status.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class StatusService {
  constructor(
    @InjectModel(Status.name) private statusModel: Model<StatusDocument>,
  ) {}

  async getStatus(): Promise<Status[]> {
    return this.statusModel.find();
  }

  async getStatusById(_id: string): Promise<Status> {
    return this.statusModel.findOne({ _id });
  }
}
