const { default: mongoose } = require("mongoose")
const db = require("mongoose")


const Schema = db.Schema

const expOmarSchema = new Schema({
    startDate: String,
    endDate: String,
    nameJop: String,
    compnyName: String
})



const ExperiencesOmar = mongoose.model("ExperiencesOmar", expOmarSchema)

module.exports = ExperiencesOmar