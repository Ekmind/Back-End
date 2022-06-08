const mongoose = require("mongoose")

const url = "mongodb+srv://Alastor:crRJpX6iUOVxk122@cluster0.qqupiwk.mongodb.net/Sample";
const db = mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
    .then(db => { console.log("Connection to", db.connection.name, "established"); })
    .catch(error => console.log(error))

export default db;