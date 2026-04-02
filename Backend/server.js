require("dotenv").config();
const app = require("./src/app")
const connectToDB = require("./src/config/database")
const port = process.env.port
connectToDB()

app.listen(port, () => {
    console.log("Server is running on port 3000")
})