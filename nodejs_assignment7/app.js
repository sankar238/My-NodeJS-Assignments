const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const MarioChar = require("./models/marioChar");

app.use(bodyParser.json());

app.get("/mario", async (req, res) => {
    try {
        const marioCharacters = await MarioChar.find()
        res.status(200).json({
            status: "success",
            marioCharacters
        })
    } catch (err) {
        res.status(500).json({
            message: "error in fetching the data"
        })
    }

})
app.get("/mario/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const marioCharacter = await MarioChar.findById(id)
        if(!marioCharacter){
            res.status(400).json({
                message : "character not found"
            })
        }
        res.status(200).json({
            status: "success",
            marioCharacter
        })

    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})

app.post("/mario", async (req, res) => {
    try {
        // console.log("from the post mario")
        // console.log(req.body)
        // const createMarioChar=await new MarioChar({name,weight}).save();

        const { name, weight } = req.body;
        const createMarioChar = await MarioChar.create({ name, weight });

        res.status(201).json({
            status: "data added successfully",
            createMarioChar
        })
    } catch (err) {
        res.status(400).json({
            message: 'either name or weight is missing'
            // status: "error in adding data",    
        })
    }
})

app.patch("/mario/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, weight } = req.body;
        const updatedMarioChar = await MarioChar.findByIdAndUpdate(id, { name, weight });
      
        if(!updatedMarioChar){
            res.status(400).json({
                message : "character was not found"
            })
            return;
       }
       
        res.status(200).json({
            message: "successfully updated",
            updatedMarioChar
        })

    } catch (err) {
        res.status(400).json(({ message: err.message }))
    }
})
app.delete("/mario/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMarioChar = await MarioChar.findByIdAndDelete(id)
        if(!deletedMarioChar){
            res.status(400).json({ message: 'character was not found' })
            return;
        }
        res.status(200).json({ message: 'character deleted' })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})


module.exports = app;