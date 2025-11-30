const express = require("express");
const dotenv = require("dotenv");
const router = require("./src/routes/userRoutes");
const connectDb = require("./src/utils/db");

dotenv.config();

const app = express();
app.use(express.json());

connectDb();

app.use('/api/users', router);

app.use((req, res)=> {
    res.status(404).json({message: "Routes not found"});
})

const PORT = process.env.PORT || 5000;

if(process.env.NODE_ENV !== "test"){
    app.listen(PORT, ()=>console.log(`Server Running on PORT= ${PORT}`));
}

module.exports = app;
