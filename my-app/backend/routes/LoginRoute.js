const express = require("express");

const router = express.Router();

const loginTemplateCopy = require("../models/SignUpModels");
const bcrypt = require("bcrypt");

router.post('/login', async (req, res, next) => {

    const loginUser = await loginTemplateCopy.findOne({
        email: req.body.email
    })
    if (loginUser !== null) {
        const verify_password = await bcrypt.compare(req.body.password, loginUser.password);
        if (verify_password) {
            return res.json({ status: 'ok', loginUser
            });
        } else {
            res.status(401).send({message:'Wrong email or password.'});
        }
    } else {
         res.status(404).send({message:"User not found."})
     }
});

module.exports = router;
