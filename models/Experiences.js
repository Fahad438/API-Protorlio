const { default: mongoose } = require("mongoose")
const db = require("mongoose")


const Schema =db.Schema

const expSchema = new Schema({
    startDate:String,
    endDate:String,
    nameJop:String,
    compnyName:String

})

const Experiences = mongoose.model("Experiences",expSchema)

module.exports = Experiences