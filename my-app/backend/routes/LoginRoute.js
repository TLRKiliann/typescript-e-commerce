const express = require("express");

const router = express.Router();

const loginTemplateCopy = require("../models/SignUpModels");
const bcrypt = require("bcrypt");

router.post('/login', async (req, res) => {

    const loginUser = await loginTemplateCopy.findOne({
        email: req.body.email,
    })

    if (!loginUser) {
        return { status: 'error', error: 'Invalid login' }
    }

    const isPasswordValid = await bcrypt.compare(
        req.body.password,
        loginUser.password
    )

    if (isPasswordValid) {
        console.log("Login ok !");
        return res.json({ status: 'ok', loginUser })
    } else {
        return res.json({ status: 'error', loginUser: false })
    }
});

module.exports = router;