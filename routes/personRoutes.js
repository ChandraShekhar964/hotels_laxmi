const express=require('express');
const router=express.Router();

const Person=require('./../models/Person');
// post route to add a person 
router.post('/',async (req,res)=>{
    try{
      const data=req.body//assuming the request body contains ther person data
  
    //   create a new person documnet using the mongoose model 
      const newPerson=new Person(data);
    //   save the new person to the database 
      const response=await newPerson.save();
      console.log('data saved');
      res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'Internal server error'});
    }  
  })
  
  // GET method to get the person 
  router.get('/',async (req,res)=>{
    try{
      const data=await Person.find();
      console.log('data fetch successfully');
      res.status(200).json(data);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'Internal server error'});
    }
  })

  
  
  // if you want to fetch the data for any particular person 
  router.get('/:workType',async(req,res)=>{
    try{
      const workType=req.params.workType;//extract the work type from the url parameter
      if(workType=='chef'|| workType=='manager'|| workType=='waiter'){
        const response=await Person.find({work:workType});
        console.log('response fetched');
        res.status(200).json(response);
      }
      else{
        res.status(404).json({error:'Invalid work type'});
      }
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'Invalid work type'});
    }
  })

//   if u want to update something then we use put api 

router.put('/:id', async(req,res)=>{
    try{
     const personId=req.params.id;//extract the id from the url parameter
     const updatedPersonData=req.body;

     const response=await Person.findByIdAndUpdate(personId,updatedPersonData,{
        new :true,
        runValidators:true
     })

     if(!response){
        return res.status(404).json({error:'Person not found'});
     }
      
     console.log('data updated');
     res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error'});
    }
})


    router.delete('/:id',async(req,res)=>{
    try{
        const personId=req.params.id;
        const response=await Person.findByIdAndDelete(personId);
         if(!response){
             return res.status(404).json({error:'Person not found'});
          }
        console.log('data delete');
        res.status(404).json({message:'Person delete successfully'});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})
  module.exports=router;
  