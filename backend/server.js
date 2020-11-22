import express from 'express'
import mongoose from 'mongoose'
import data from './data.js'
import userRouter from './routers/userRouter.js';

// const express = require('express');
// const data = require('./data.js');


const app = express();
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazon-mimic', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,

});

app.get('/api/products/:id', (req, res)=>{
    const product = data.products.find(x=>x._id===req.params.id)
    if(product){
        res.send(product);
    } else {
        res.status(404).send({message:'Product not Found'});
    }
})


app.get('/api/products', (req, res)=>{
    res.send(data.products);
})

app.use('/api/users', userRouter);


app.get('/', (req, res)=>{
    res.send('server is ready');
});

app.use((err, res, req, next)=>{
    res.status(500).send({message: err.message});
});


const port = process.env.PORT || 5000; 
app.listen(port, ()=>{
    console.log(`server at http://localhost:${port}`);
});