import { Router } from "express";
import { sample_sale } from "../data";
import asyncHandler from "express-async-handler";
import { SaleModel } from "../models/sale.model";

const router = Router();

router.get("/seed", asyncHandler(
    async (req, res) => {
        const saleCount = await SaleModel.countDocuments();
        if (saleCount > 0) {
            res.send("Seed is already done!");
            return;
        }

        await SaleModel.create(sample_sale);
        res.send("Seed is done!");
    }));

router.get("/", asyncHandler(
    async (req, res) => {
        const sales = await SaleModel.find();
        res.json(sales);
    }));

export default router;