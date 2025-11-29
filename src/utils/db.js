const mongoose = require('mongoose');

const connectDb =(async()=>{
    try{
        const con = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongoose Connect ${con.connection.host}`)
    }catch(err){
        console.error(`Error Message: ${err.message}`);
        process.exit(1);
    }
})

module.exports = connectDb;