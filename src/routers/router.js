const express = require('express');
const router = new express.Router();
const MensRanking = require("../models/api");

router.post('/create',async(req,res)=>{
    try{
        const data = new MensRanking(req.body);
        console.log(req.body);
        const datastore = await data.save();
        res.status(200).send(datastore);
    }catch(e){
        res.status(400).send(e);
    } 
})
router.get('/read',async(req,res)=>{
 try{
        const data1 = await MensRanking.find({});
        res.send(data1);
    }catch(e){
        res.status(400).send(e);
    } 
})
router.get('/read/:id',async(req,res)=>{
 try{
     const _id=req.params.id;
        const data2 = await MensRanking.findById(_id);
        res.send(data2);
    }catch(e){
        res.status(400).send(e);
    } 
})
router.patch('/read/:id',async(req,res)=>{
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
router.delete('/read/:id',async(req,res)=>{
 try{
     const _id=req.params.id;
        const data4 = await MensRanking.findByIdAndDelete(_id);
        res.send(data4);
    }catch(e){
        res.status(400).send(e);
    } 
})
router.get('/',(req,res)=>{
    res.send("Hello from Engineer");
})

module.express= router;