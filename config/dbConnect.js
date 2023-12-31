import mongoose from "mongoose";
import "dotenv/config";

const CONN = null;

export async function  DB_CONNECT () {
    const MONGO_DB = process.env.MONGO_CONFIG;

    if ( !MONGO_DB || typeof MONGO_DB !== "string" ) {
        throw new Error("Please Specify a DB configuration");
    }

    return await mongoose.createConnection(MONGO_DB);
}