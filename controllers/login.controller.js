const {Login, Register} = require('../models/user.model');

// const getUser = async (req, res) => {try {

//         const user = await Register.findOne({Username: req.body.Email});
//         const password = await Register.findOne({Password: req.body.Pass});
//         if (!user && !password) {
//             res.status(404).json({message:"user not found or password is incorrect"});
//         }
//         res.status(200).json({user, password}).send({message: "success"});
//     } 
//         catch (error) {
//         res.status(500).json({message: error.message});
//     }
// };

const getLogins = async(req, res) => {
    try {
        const logins = await Login.find({});
        res.status(200).json(logins);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const createLogin = async(req, res) => {
    try {
        const check = await Register.findOne({ Username: req.body.Username});
        const login = await Login.create(req.body);

        if(check.Password === req.body.Password) {
            res.status(201).json(login);  
        }  
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports = {
    getLogins,
    createLogin,
}