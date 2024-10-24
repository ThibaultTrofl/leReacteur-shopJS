import { ObjectId } from "bson";
import { Status } from "@/types/status";

export type Order = {
  products: {
    product: ObjectId;
    quantity: number;
  }[];
  priceTotal: number;
  priceTotalBeforeHaircut: number;
  hairCut: number;
  owner: ObjectId;
  createdAt: Date;
  updatedAt: Date;
  status: Status;
};
