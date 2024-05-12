const { default: mongoose } = require("mongoose")
const db = require("mongoose")

const Schema =db.Schema

const skillSchema = new Schema({
   nameSkill:String,
  
})

const Skill = mongoose.model("Skill",skillSchema)

module.exports = Skill