import mongoose from "mongoose"
import { config } from "./config.js";

// This database connection is working perfectly not modification needed otherwise stated
export const DatabaseConnection = async () => {
    try {
        await mongoose.connect(config.MONGOURL, {}).then(() => {
            console.log(`Database connected succefully`);
        })
    } catch (error) {
        console.log(error);
        throw error
    }
}

