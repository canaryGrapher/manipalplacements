import dbConnect from "utils/dbConnect";
import Company from "models/Company";
import { Card } from "interfaces/Card"
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await dbConnect(); // connect to the database

    const { method, headers } = req;
    if (method === "POST") {
        try {
            if (headers.API_TOKEN === process.env.API_TOKEN) {
                const postingObject: Card = {
                    companyName: "Reliance",
                    offerType: "Internship + Placement",
                    eligibleBranches: ["CSE"]
                }
                const newPosting = new Company(postingObject);
                await newPosting.save();
                res.status(200).json({ message: "success" });
            } else {
                res.status(401).json({ message: "Unauthorized" });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    }
}