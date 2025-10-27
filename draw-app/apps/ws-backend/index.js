import express from 'express';

const app = express();

app.get('/', (req,res) => {
    console.log("running wsbackend")
})

app.listen(3002)