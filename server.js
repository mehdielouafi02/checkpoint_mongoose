const express = require("express");

 const app = express ();


const contactRouter =require('./routes/contact')

 const connectDb =require('./database/connect')



 connectDb()


app.use('/contact')











 app.listen(5000, (err) => {
    err
      ? console.log("server error")
      : console.log("server is running on port 5000");
    
     });





