const express = require('express');
const cors = require('cors');

const { messageRoute } = require('./server/Routers/messagesRouter');
const { connectDB } = require('./server/config/db');

const PORT = process.env.PORT;

// -------------------- Config ------------------

const app = express();
require('dotenv').config()
 connectDB();

// -------------------- Middleware -------------
app.use(cors());
app.use(express.json());


app.use('/msg',messageRoute)

app.get("/",(req,res)=>{
    res.status(200);
    res.send("Welcome to root URL server of URL.");
})

app.listen(process.env.PORT,error=>{
    if(!error)
    console.log("Server running successfully and App is listening on port : "+process.env.PORT);
else
    console.log("Error occurred, server can't start",error);
})