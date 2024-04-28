const { Register} = require('../models/user.model');

const getRegisters = async(req, res) => {
    try {
        const registers = await Register.find({});
        res.status(200).json(registers);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getRegister = async (req, res) => {
    try {
      const { id } = req.params;
      const register = await Register.findById(id);
      res.status(200).json(register);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

const createRegister = async(req, res) => {
    try {
        const register = await Register.create(req.body);
        res.status(201).json(register).send("Registrations created successfully");
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const updateRegister = async(req, res) => {
    try {
        const {id} = req.params;
        const register = await Register.findByIdAndUpdate(id, req.body) ;
        if (!register) {
            return res.status(404).json({message: "id not found"});
        }
        const updateRegister = await Register.findById(id);
        res.status(200).json(updateRegister);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const deleteRegister = async(req, res) => {
    try {
        const {id} = req.params;
        const register = await Register.findByIdAndDelete(id);
        if (!register) {
            return res.status(404).json({message: "id not found"});
        }
        res.status(200).json({message: `deleted successfully ${id}`});

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports = {
    getRegisters,
    getRegister,
    createRegister,
    updateRegister,
    deleteRegister
}