import { Injectable } from '@nestjs/common';
import { Status, StatusDocument } from './schemas/status.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../users/schemas/user.schema';

@Injectable()
export class StatusService {
  constructor(
    @InjectModel(Status.name) private statusModel: Model<StatusDocument>,
  ) {}

  async getStatus(): Promise<Status[]> {
    return this.statusModel.find();
  }

  async getStatusById(_id: string): Promise<User> {
    return this.statusModel.findOne({ _id });
  }
}
