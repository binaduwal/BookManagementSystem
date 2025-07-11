const mongoose= require('mongoose');


const ConnectionString= "mongodb+srv://Bina:LHhZuVKbdbp0EVAU@cluster0.nvo2z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

 
 
async function ConnectToDatabase(){
    await mongoose.connect(ConnectionString);
    console.log("MongoDB Connected Successfullyy");
}

module.exports=ConnectToDatabase; //export function