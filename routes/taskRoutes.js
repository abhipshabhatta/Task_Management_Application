const express = require("express")
const taskRouter = express.Router()

taskRouter.post("/", (req, res) => {
    red.json({
        msg:"Task post reached....",
    })
})



module.exports = taskRouter
