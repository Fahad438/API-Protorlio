//here i import express to this file to do what i want in server
const express = require("express")
const db = require("mongoose")


//here i run the surver and put it in app to do what i wnat 
const app= express()


//call model
const About =require("./models/about")
const Experiences =require("./models/Experiences")
const Skill =require("./models/Skill")


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
 


//Exp endpoint post data
app.post("/experiences",async (req,res)=>{

    //crate new opject with type Experiences
    const newExperiences = new Experiences()
    //take value from body and put it in var
    const startDate=req.body.startDate
    const endDate=req.body.endDate
    const nameJop=req.body.nameJop
    const compnyName=req.body.compnyName
    //we put data we have in modles var
     newExperiences.startDate=startDate
     newExperiences.endDate=endDate
     newExperiences.nameJop=nameJop
     newExperiences.compnyName=compnyName
     //save data in mangoose 
    await newExperiences.save()
    res.send("done")
   
   })
//Exp endpoint get data
app.get("/experiences",async (req,res)=>{

        const exp=await Experiences.find();

        res.json(exp)
   })
//Exp endpoint delete data
app.delete("/experiences/:id",async (req,res)=>{
       const id=req.params.id

       const deleteExp=await Experiences.findByIdAndDelete(id)

       res.json(deleteExp)
   })
//Exp endpoint update data
app.put("/experiences/:id",async (req,res)=>{
    const id=req.params.id
    const upDate=await Experiences.findById(id)
    console.log(upDate)
    const startDate=req.body.startDate
    const endDate=req.body.endDate
    const nameJop=req.body.nameJop
    const compnyName=req.body.compnyName
    //we put data we have in modles var
    upDate.startDate=startDate
    upDate.endDate=endDate
    upDate.nameJop=nameJop
    upDate.compnyName=compnyName

    await upDate.save();

     res.json(upDate)
})

//Skill endpoint post Data
app.post("/skill", async(req,res)=>{
    const newSkill =new Skill()
    const nameSkill=req.body.nameSkill;
    const imgSkill=req.body.imgSkill;

    newSkill.nameSkill=nameSkill;
    newSkill.imgSkill=imgSkill

    await newSkill.save()
    res.send("Done")

})

//Skill endpoint Get Data'
app.get("/skill",async (req,res)=>{
    const allSkill=await Skill.find()
    res.json(allSkill)
})


//Skill endpoint Delete Data'
app.delete("/skill/:id",async (req,res)=>{
    const id=req.params.id
    const allSkill=await Skill.findByIdAndDelete(id)
    res.json(allSkill)
})

//Skill endpoint update data
app.put("/skill/:id",async (req,res)=>{
    const id =req.params.id
    const skillData=await Skill.findById(id)
    //
    const nameSkill=req.body.nameSkill;
    const imgSkill=req.body.imgSkill;
    //
    skillData.nameSkill=nameSkill;
    skillData.imgSkill=imgSkill;
    await skillData.save()

    res.send("done")
})



//here we just add this line to keep server listen to cleint and so what he need 
app.listen(3000,()=>{
    console.log("ez 3000")
})
