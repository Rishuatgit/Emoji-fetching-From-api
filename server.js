const express=require('express');
const path = require('path');
const app=express();
const fs=require('fs')


app.use(express.static(path.join(__dirname,"public")));





// app.get('/hello',(req,res)=>{
//     // res.end(htmlfile)
// })

app.listen(3000)