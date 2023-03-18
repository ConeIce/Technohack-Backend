const express = require('express');
const app = express();
//body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//routes
app.get("/user",(req,res)=>{
    console.log("Things be working just fine");
})
app.post("/user", (req,res)=>{
    console.log("Things be working just fine");
})
app.get("/user/id", (req,res)=>{
    console.log("Things be working just fine");
})
app.post("/user?location",(req,res)=>{
    console.log("Things be working just fine");
})
app.post("/user?available",(req,res)=>{
    console.log("Things be working just fine");
});

app.listen("3000",()=>{
    console.log("Sever started at 3000");
})