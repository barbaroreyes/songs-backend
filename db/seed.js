const manySongs = require('./seedData.json')
const mongoose = require('./connection')
const Song = require('../models/song')
const db = mongoose.connection

Song.deleteMany({}).then(() => {
    Song.insertMany(manySongs).then((songs) => {
        console.log(songs);
        db.close()
    })
})