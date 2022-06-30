require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');



const app = express();

//middleware
app.use(express.json());
app.use(cors());


//connect to mongodb
const URI = process.env.MONGO_URL

mongoose.connect(URI, (err)=> {
    if (err) throw err;
    else {
        return console.log("mongoose is connected");
    }
})





// routes
app.use('/', require('./routes/aboutRoute'));





PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('server is listening:',PORT);
})

