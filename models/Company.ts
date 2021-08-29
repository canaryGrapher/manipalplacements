import mongoose, { Document, Schema } from "mongoose";


export interface Card extends Document {
    companyName: string,
    offerType: string,
    ctc?: string,
    registrationLink?: string,
    eligibleBranches: Array<string>,
    profile?: string,
    deadline?: Date,
    standbyOffer?: boolean,
    backlogsAllowed?: boolean,
    description?: string,
    file?: string,
    companyImage?: string
};

const CompanySchema: Schema = new mongoose.Schema(
    {
        companyName: {
            type: String,
            trim: true,
            required: [true, "Please add a name"],
        },
        offerType: {
            type: String,
            enum: ["Internship", "Internship + Placement", "Placement"],
            required: [true, "Please add an offer type"],
        },
        ctc: {
            type: String,
            default: "Not specified",
        },
        registrationLink: {
            type: String,
        },
        eligibleBranches: {
            type: String,
            required: [true, "Please add atleast one branch"],
        },
        profile: {
            type: String,
            default: "Profile not available"
        },
        deadline: {
            type: Date,
        },
        standbyOffer: {
            type: Boolean,
        },
        backlogsAllowed: {
            type: Boolean,
        },
        description: {
            type: String,
            default: "No company description provided",
        },
        file: {
            type: String,
        },
        companyImage: {
            type: String,
            default: "https://via.placeholder.com/250x150",
        },

    },
);

export default mongoose.models.Company || mongoose.model<Card>("Company", CompanySchema);