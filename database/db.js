import mongoose from 'mongoose';


 export const Connection = async (username,password) =>{
    try{
        const URL = `mongodb+srv://${username}:${password}>@blog-app.q2kkjpe.mongodb.net/?retryWrites=true&w=majority`;
        console.log("connect database.");
       await mongoose.connect(URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
       console.log("Database connected successfully.");
    }
    catch(error){
        console.log("Error while connecting the database.",error);
    }
}

export default Connection;