const mongoose = require("mongoose");

const MarioSchema = new mongoose.Schema({
    name : {type : String ,required: true},
    weight : {type : Number ,required : true}
})

const MarioChar = mongoose.model("mario",MarioSchema);

module.exports=MarioChar;