//here i import express to this file to do what i want in server
const express = require("express")


//here i run the surver and put it in app to do what i wnat 
const app= express()

//here whene client send req get in /hello i just send him res as hello
app.get("/hello",(req,res)=>{
    res.send("hello")
})


app.post("/test",(req,res)=>{
    res.send("hello")
})

app.get("/test",(req,res)=>{
    res.send("hello")
})


//here we just add this line to keep server listen to cleint and so what he need 
app.listen(3000,()=>{
    console.log("ez 3000")
})
