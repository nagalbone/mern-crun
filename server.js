const express = require('express');
var app = express();
const cors = require('cors');
app.use(cors());
app.listen(1234);
var mj = require('mongojs');
var con = mj("mongodb://localhost:27017/myapp");

app.get('/getData',(req,res)=>{
    con.city.find((err,result)=>{
        res.send({data:result});
    })
});

app.post('/deleteRow',(req,res)=>{
    console.log(req);
});

