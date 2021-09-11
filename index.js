const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');   


require('dotenv').config();


app.use(express.json());

app.use(cors());

const uri = process.env.ATLAS_URL;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open',() =>{
    console.log("Database connected");
});

const exerciseRouter = require('./Routes/exercises');
const userRouter = require('./Routes/users');

app.use('/exercises',exerciseRouter);
app.use('/users',userRouter);


const port = process.env.PORT || 5000; 
app.listen(port,()=>console.log(`listening on port ${port}.....`));