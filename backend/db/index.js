const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
//console.log(process.env.dburl,typeof(process.env.dburl))
mongoose.connect(process.env.dburl)
console.log("databse server connected....")

// Define schemas
// const AdminSchema = new mongoose.Schema({
//     // Schema definition here
//     username: String,
//     password: String
// });


const UserSchema = new mongoose.Schema({
    // Schema definition here
    fullname: String,
    username: String,
    password: String,
});


const User = mongoose.model('User', UserSchema);



module.exports = {
    User,
}
//mongoose.connection.close().then(()=>console.log("connection closed ..."));