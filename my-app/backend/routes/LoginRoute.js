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
    } else if (!isPasswordValid) {
        return res.status(401).send({ message: "Unauthorized !" });
    } else if (loginUser.password !== isPasswordValid) {
        return res.status(403).send({ message: "Forbidden !" });
    }
    else {
        //return res.statusCode || 500
        return res.status(404).send({ message: "Not found" });
    }
});

module.exports = router;