const mongoose= require('mongoose'); 
//Define the mongodb connection url
const mongoURL='mongodb://localhost:27017/hotel';//replace mydatabase with your database name
//set up mongodb connection
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology:true
})

// get the default connection 
// mongoose maintains a default connection object represting the mongo connection. 
const db=mongoose.connection;

db.on('connected',()=>{
    console.log('connected to mongodb server');
});

db.on('error',(err)=>{
    console.error('Mongodb connection error:',err);
});

db.on('disconnected',()=>{
    console.log('disconnected to mongodb server');
});

// export the database connection 
module.exports=db;
