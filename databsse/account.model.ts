import { model, models, Schema, Types } from "mongoose";

export interface IAccount {
  userId: Types.ObjectId;
  name: string;
  image?: string;
  password?: string;
  provider: string;
  providerAccountId: string;
}

const AccountSechema = new Schema<IAccount>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", require: true },
    name: { type: String, require: true },
    image: { type: String },
    password: { type: String },
    provider: { type: String, require: true },
    providerAccountId: { type: String, unique: true },
  },
  {
    timestamps: true,
  }
);

const Account = models?.account || model<IAccount>("Account", AccountSechema);

export default Account;
