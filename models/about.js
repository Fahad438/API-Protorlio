//here we just we deal with mongoose db
const { default: mongoose } = require("mongoose")
const db = require("mongoose")


//bulid schma => table 

const Schema =db.Schema

const aboutSchma = new Schema({
    content:String
})

const About = mongoose.model("About",aboutSchma)

module.exports = About