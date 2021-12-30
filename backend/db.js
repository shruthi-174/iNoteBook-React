//TO CONNECT MONGODB  (https://www.youtube.com/watch?v=jWIeK3ueOm8&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=43)
// start 
const mongoose = require('mongoose');
const mongoURI="mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to Mongo Successfully");
    })
}
module.exports=connectToMongo;
// end 