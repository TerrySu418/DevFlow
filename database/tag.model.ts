import mongoose, { model, models, Schema } from "mongoose";

export interface ITag {
  name: string;
  questions: number;
}

export interface ITagDoc extends ITag, Document {
  _id: mongoose.Types.ObjectId;
}

const TagSchema = new Schema<ITag>(
  {
    name: { type: String, require: true, unique: true },
    questions: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Tag = models?.Tag || model<ITag>("Tag", TagSchema);

export default Tag;
