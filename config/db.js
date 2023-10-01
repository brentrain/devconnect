const mongoose = require('mongoose');
const config = require('config');
const db = config.get('MongoURI');

const connectDB = async () => {
    try{
       await  mongoose.connect(db)
       console.log('Connected to Database');
    } catch(err){
        console.error(err.message);
        process.exit(1); //exit processs with failure
}
}
module.exports = connectDB;