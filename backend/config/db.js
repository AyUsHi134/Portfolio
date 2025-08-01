import mongoose from "mongoose";
//mongoose ek library h jiska use kra jata h mongodb se connection banane ke liye 

// creating a function jo mongodb se connect kre 
const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    
    console.log(`MongoDB Connected`);

    } catch(error){
        console.error("Mongo connection failed:", error.message);
        process.exit(1);
    }
}; 

export default connectDB 