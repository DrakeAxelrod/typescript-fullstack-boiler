import { Schema, model } from 'mongoose';

// Document interface
interface Demo {
  field1: string;
  field2: string;
  optionalfield?: string;
}

// Schema
const schema = new Schema<Demo>({
  field1: { type: String, required: true },
  field2: { type: String, required: true },
  optionalfield: String,
});

// 3. Create a Model.
const DemoModel = model<Demo>('Demo', schema);

export default DemoModel;
