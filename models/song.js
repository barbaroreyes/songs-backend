const mongoose = require('../db/conection')
const {Schema,model }= mongoose
const sevenWSchema = new Schema({
    title: String,
    artist: String,
    time:Number

},{timestamps:true}
)

                           //collections- by default will make a lowercase
const Song = model('Song',sevenWSchema )
//export the schema 
module.exports= SevenW