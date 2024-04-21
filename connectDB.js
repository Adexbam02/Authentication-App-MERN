const mongoose = require("mongoose")

const uri = process.env.MONGO_DB

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false)
        const connect = await mongoose.connect(uri)
        console.log(`Database connected ${connect.connection.host}`)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB