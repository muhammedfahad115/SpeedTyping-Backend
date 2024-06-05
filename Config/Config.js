const mongoose = require("mongoose");
const mongooseUrl = process.env.MONGOOSE_URL; 
function connectDB() {
    mongoose.connect(mongooseUrl).then(() => {
        console.log("MongoDB Connected");
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = connectDB;


