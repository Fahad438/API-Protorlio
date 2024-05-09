//here i import express to this file to do what i want in server
const express = require("express")
const db = require("mongoose")


//here i run the surver and put it in app to do what i wnat 
const app= express()


//call model
const About =require("./models/about")

//here we conect with db mangoose db 
db.connect("mongodb+srv://Fahad:Fahad767686@cluster0.gnfavon.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("ez")
}).catch((error)=>{
    console.log(error)

})



app.use(express.json())
//here whene client send req get in /hello i just send him res as hello

//About endpoint post data
app.post("/about",async (req,res)=>{

 const contentAbout=req.body.content
 
  const newAbout = new About()
  newAbout.content=contentAbout
 await newAbout.save()
 res.send("done")

})

//About endpoint get data
app.get("/about",async (req,res)=>{


    
     const about= await About.find()
     
    res.json(about)
   
   })

//get about specfic id
app.get("/about/:aboutId",async (req,res)=>{

    const id =req.params.aboutId
    const about= await About.findById(id)
    res.json(about)
    
    })

//delete about specfic id
app.delete("/about/:aboutId",async (req,res)=>{

    const id =req.params.aboutId
    const about= await About.findByIdAndDelete(id)
    res.json(about)
    
    })
 

   



//here we just add this line to keep server listen to cleint and so what he need 
app.listen(3000,()=>{
    console.log("ez 3000")
})
