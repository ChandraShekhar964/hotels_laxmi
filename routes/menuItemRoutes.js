const express=require('express');
const router=express.Router(); 

const MenuItem=require('./../models/MenuItem');


router.post('/',async(req,res)=>{
    try{
      const data=req.body;
      const newMenu=new MenuItem(data);
      const response=await newMenu.save();
      console.log('data saved for menu items');
      res.status(200).json(response);
    }
    catch{
      console.log(err);
      res.status(500).json(response);
    }
  })
  
  router.get('/',async(req,res)=>{
    try{
      const data=await MenuItem.find();
      console.log('data fetch for menu items');
      res.status(200).json(data);
    }
    catch{
      console.log(err);
      res.status(500).json({error:'Internal server Error'});
    }
  })

  module.exports=router;