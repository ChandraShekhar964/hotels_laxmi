const express = require('express')
const app = express();

// import mongodb no
const db=require('./db');

const bodyParser=require('body-parser');
app.use(bodyParser.json());


// const MenuItem=require('./models/MenuItem');
// app is variable and we export the blueprint of express in app variable
app.get('/', function (req, res) {
  res.send('Welcome to my hotel Laxmi .....How can i help you ?')
})

// this make more complex to create a lots of endpoint so we router to improve the readability of the code 
// app.post('/person',async (req,res)=>{
//   try{
//     const data=req.body

//     const newPerson=new Person(data);
//     const response=await newPerson.save();
//     console.log('data saved');
//     res.status(200).json(response);
//   }
//   catch(err){
//     console.log(err);
//     res.status(500).json({error:'Internal server error'});
//   }
// })

// // GET method to get the person 
// app.get('/person',async (req,res)=>{
//   try{
//     const data=await Person.find();
//     console.log('data fetch successfully');
//     res.status(200).json(data);
//   }
//   catch(err){
//     console.log(err);
//     res.status(500).json({error:'Internal server error'});
//   }
// })


// // if you want to fetch the data for any particular person 
// app.get('/person/:workType',async(req,res)=>{
//   try{
//     const workType=req.params.workType;
//     if(workType=='chef'|| workType=='manager'|| workType=='waiter'){
//       const response=await Person.find({work:workType});
//       console.log('response fetched');
//       res.status(200).json(response);
//     }
//     else{
//       res.status(404).json({error:'Invalid work type'});
//     }
//   }
//   catch(err){
//     console.log(err);
//     res.status(500).json({error:'Invalid work type'});
//   }
// })


// import the router files
const personRoutes=require('./routes/personRoutes');
// creating router file for menu
const menuItemRoutes=require('./routes/menuItemRoutes');
// use the routers
app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);

// app.post('/menu',async(req,res)=>{
//   try{
//     const data=req.body;
//     const newMenu=new MenuItem(data);
//     const response=await newMenu.save();
//     console.log('data saved for menu items');
//     res.status(200).json(response);
//   }
//   catch{
//     console.log(err);
//     res.status(500).json(response);
//   }
// })

// app.get('/menu',async(req,res)=>{
//   try{
//     const data=await MenuItem.find();
//     console.log('data fetch for menu items');
//     res.status(200).json(data);
//   }
//   catch{
//     console.log(err);
//     res.status(500).json({error:'Internal server Error'});
//   }
// })


app.listen(3001,()=>{
    console.log("listening on prot 3001");
})

