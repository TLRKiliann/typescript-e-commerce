const express = require("express");

const router = express.Router();

const signUpTemplateCopy = require("../models/SignUpModels");
const bcrypt = require("bcrypt");


router.post("/signup", async (req, res) => {

    const saltPassword = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(req.body.password, saltPassword);

    const signUpUser = new signUpTemplateCopy({
        fullName: req.body.fullName,
        userName: req.body.userName,
        email: req.body.email,
        password: securePassword
    })
    signUpUser.save()
    .then(data => {
        console.log(JSON.stringify(res.data))
        res.json(data)
    })
    .catch(error => {
        console.log("Error sign-up !")
        res.json(error)
    })
});

module.exports = router;
