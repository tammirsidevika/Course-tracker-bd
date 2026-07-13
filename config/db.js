const mongoose = require("mongoose");
const dns=require("dns")
dns.setServer(["8.8.8.8","8.8.4.4"])
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://tammirsidevika05_db_user:<db_password>@cluster0.7ywegpc.mongodb.net/?appName=Cluster0");

        console.log("Database Connected Successfully");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;
