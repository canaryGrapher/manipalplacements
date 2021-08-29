import dbConnect from "utils/dbConnect";
import Company from "models/Company";
import { Card } from "interfaces/Card"
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await dbConnect(); // connect to the database

    const { method, headers } = req;
    if (method === "POST") {
        try {
            console.log(headers, process.env.API_TOKEN)
            if (headers.api_token === process.env.API_TOKEN) {
                const postingObject: Card = {
                    companyName: req.body.companyName,
                    offerType: req.body.offerType,
                    ctc: req.body.ctc,
                    registrationLink: req.body.registrationLink,
                    eligibleBranches: req.body.eligibleBranches,
                    profile: req.body.profile,
                    deadline: new Date(req.body.deadline),
                    standbyOffer: req.body.standbyOffer === "Yes" ? true : false,
                    backlogsAllowed: req.body.backlogsAllowed === "Yes" ? true : false,
                    description: req.body.description,
                    file: req.body.file,
                    companyImage: req.body.companyImage
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