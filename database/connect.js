const mongoose = require('mongoose');

const connectDb = () => {

mongoose.connect("mongodb://127.0.0.1:27017/users")
.then(() => console.log('connected to database sucessfully'))
.catch((err) => console.log('connection to database failed',err))

}

 module.exports = connectDb