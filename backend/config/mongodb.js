import mongoose  from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected',() =>{
        console.log("DB Connected");
        
    })
    await mongoose.connect("mongodb+srv://greatstack:Shraddha123@cluster0.zk3pfpe.mongodb.net/?appName=Cluster0")
}
export default connectDB;