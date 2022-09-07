import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Name } from '../enums/status.enum';

export type StatusDocument = Status & Document;

@Schema()
export class Status {
  @Prop({ type: String, enum: Name })
  name: Name;

  @Prop()
  step: number;
}

export const StatusSchema = SchemaFactory.createForClass(Status);
