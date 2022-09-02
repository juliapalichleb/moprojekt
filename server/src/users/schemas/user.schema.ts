import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Status } from '../../status/schemas/status.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  nameUser: string;

  @Prop()
  email: string;

  @Prop()
  age: number;

  @Prop()
  tel: number;

  @Prop()
  date: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Status' })
  status: Status;
}

export const UserSchema = SchemaFactory.createForClass(User);
