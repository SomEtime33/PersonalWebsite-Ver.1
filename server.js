require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');



const app = express();

//middleware
app.use(express.json());
app.use(cors());


app.get('/', (req,res)=>{

    res.send('hellow from server')

})

PORT = 5000;

app.listen(PORT, () => {
    console.log('server listening on port: ${PORT}');
})