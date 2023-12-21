import Express  from "express";
import dotenv from "dotenv";
dotenv.config();

const app=Express();
const port=3000 || process.env.PORT;

app.get("/",(req,res)=>{
    const date = new Date();
    console.log(`New Request Recived..! , ${date}`);
    res.send(`Server Working..! , ${date}`);
});

app.listen((port),()=>{
    console.log(`Server Working on port ${port}`);
});