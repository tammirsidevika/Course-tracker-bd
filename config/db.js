const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://tammirsidevika05_db_user:<db_password>@cluster0.7ywegpc.mongodb.net/?appName=Cluster0");

        console.log("Database Connected Successfully");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;
