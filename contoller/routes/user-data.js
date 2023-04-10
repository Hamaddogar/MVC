const express = require('express');
const router = express.Router();
const Usercatigories = require('../../model/model/schema/userschema')

router.post("/", (req, res) => {
    
    let myuser = new Usercatigories({ name: req.body.name, fname: req.body.fname })
    myuser.save().then((user) => {
        console.log("data has saved in data base")
        res.status(200).json( {user})

    }).catch((e) => {
        console.log("there  was error", e.message)
    })

})

module.exports = router;
