const express = require('express');
const connectDB=require('../src/db/conn');
connectDB();

const MensRanking = require("../src/models/api");

const app = express();
const port=process.env.PORT||3000;
app.use(express.json());


app.post('/create',async(req,res)=>{
    try{
        
        const data = new MensRanking(req.body);
        console.log(req.body);
        const datastore = await data.save();
        res.status(200).send(datastore);
    }catch(e){
        res.status(400).send(e);
    } 
})
app.get('/read',async(req,res)=>{
 try{
        const data1 = await MensRanking.find({});
        res.status(200).send(data1);
    }catch(e){
        res.status(400).send(e);
    } 
})
app.get('/read/:id',async(req,res)=>{
 try{
     const _id=req.params.id;
        const data2 = await MensRanking.findById(_id);
        res.send(data2);
    }catch(e){
        res.status(400).send(e);
    } 
})
app.patch('/read/:id',async(req,res)=>{
 try{
     const _id=req.params.id;
        const data3 = await MensRanking.findById(_id,req.body,{
            new:true
        });
        res.send(data3);
    }catch(e){
        res.status(400).send(e);
    } 
})
app.delete('/read/:id',async(req,res)=>{
 try{
     const _id=req.params.id;
        const data4 = await MensRanking.findByIdAndDelete(_id);
        res.send(data4);
    }catch(e){
        res.status(400).send(e);
    } 
})
app.get('/',(req,res)=>{
    res.send("Hello from Engineer");
})

app.listen(port, () => {
    console.log("hello from Atul Kesharwani");
})
