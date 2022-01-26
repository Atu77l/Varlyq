const mongoose=require('mongoose');

const connectDB=async ()=>{
    try{
       
        const conn=await mongoose.connect("mongodb+srv://new_user:1@cluster0.qjy3n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log(`Mongo DB Connected`);
    }
    catch(err)
    {
        console.error(err);
        process.exit(1);
    }
}

module.exports=connectDB;