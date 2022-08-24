const express = require("express");

const router = express.Router();

const loginTemplateCopy = require("../models/SignUpModels");
const bcrypt = require("bcrypt");

router.post('/login', async (req, res) => {

    const loginUser = await loginTemplateCopy.findOne({
        email: req.body.email,
    })

    if (loginUser !== loginUser) {
        return { status: 'error', error: 'Invalid login' }
    }

    const isPasswordValid = await bcrypt.compare(
        req.body.password,
        loginUser.password
    )

    if (isPasswordValid) {
        console.log("Login ok !");
        return res.json({ status: 'ok', loginUser })
    } else if (!loginUser.password) {
        return res.status(403).send({ message: "User Not found." });
    } else if (!isPasswordValid) {
        console.log("Login failed !");
        //return infoJson = res.json({ status: 'error', loginUser: false })
        return res.status(401).send({ message: "Invalid Password!" });
    }
    else {
        return res.status(400).send({ message: "Invalid User or Password!" });
    }
});

module.exports = router;