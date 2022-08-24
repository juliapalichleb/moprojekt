import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StatusDocument = Status & Document;

@Schema()
export class Status {
  @Prop()
  name: string;

  @Prop()
  step: string;
}

export const StatusSchema = SchemaFactory.createForClass(Status);
