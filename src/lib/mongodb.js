import mongoose from "mongoose";


let isConnected = false;

export async function connectDb() {
    if(isConnected) return;

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "taskmanager",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = true;
    console.log("✅ MongoDB Connected");
    }catch(error){
        console.error("MongoDB connection error:", error);
    }

}