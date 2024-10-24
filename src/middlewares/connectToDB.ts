import * as mongoose from "mongoose";

export async function connectToDB() {}
if (mongoose.connection.readyState === 0) {
  await mongoose.connect(process.env.MONGODB_URI as string);
}
