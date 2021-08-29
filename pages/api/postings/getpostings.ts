import dbConnect from "utils/dbConnect";
import Company from "models/Company";
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await dbConnect(); // connect to the database

    const { method } = req;
    if (method === "GET") {
        try {
            const getAllCompanies = await Company.find({}).sort("deadline");
            res.status(200).json(getAllCompanies);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    }
}