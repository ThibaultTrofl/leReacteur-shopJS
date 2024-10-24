import { models, model, Schema } from "mongoose";
import { Order } from "@/types/order";

const OrderSchema = new Schema<Order>({
  products: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: Number,
    },
  ],
  priceTotal: Number,
  hairCut: Number,
  createdAt: Date,
  updatedAt: Date,
  status: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export default models.Article || model("Order", OrderSchema);
