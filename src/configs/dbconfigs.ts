


import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection =  mongoose.connection;
        connection.on('connected', ()=>{
            console.log("MongoDb connected Successfully");
        })

        connection.on('error', (error) => {
            console.log('MongoDb connection eerror', error);
            process.exit();
        })
    } catch (error) {
        console.log("error occured in db config", error);
    }
}