import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StatusDocument = Status & Document;

@Schema()
export class Status {
  @Prop()
  name: string;

  @Prop()
  step: number;
}

export const StatusSchema = SchemaFactory.createForClass(Status);
