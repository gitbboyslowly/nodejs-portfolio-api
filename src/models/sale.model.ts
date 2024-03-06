import { Schema, model } from "mongoose";

export interface Sale {
    id: string;
    name: string;
    sale_date: string;
    sale_amount: number;
}

export const SaleSchema = new Schema<Sale>(
    {
        name: { type: String, required: true },
        sale_date: { type: String, required: true },
        sale_amount: { type: Number, required: true }
    }, 
    {
        toJSON: {
            virtuals: true
        },
        toObject: {
            virtuals: true
        },
        timestamps: true
    }
);

export const SaleModel = model<Sale>("Sale", SaleSchema);
