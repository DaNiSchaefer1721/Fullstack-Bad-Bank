const User = require('../models/userModel');
const mongoose = require('mongoose');

//Get All Users
const allUsers = async (req, res) => {
    const users = await User.find({}).sort({ dateCreated: -1 });
    res.status(200).json(users);
};

////Get Single User
const singleUser = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No user with id: ${id}`);
    }
    const user = await User.findById(id);
    res.status(200).json(user);
};
    

////Create User
async function createUser(req, res) {
    const { name, email, password } = req.body;

    try {
        const user = await User.create({
            name,
            email,
            password,
        });
        res.status(201).json(user);
        user.save();
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.log(error);
    }
    //res.send('POST Create a New User');
}

//Update User
    const updateUser = async (req, res) => {
        const { id } = req.params;
                if (!mongoose.Types.ObjectId.isValid(id)) 
            {
         return res.status(404).send(`No user with id: ${id}`);
        }

    // Update user
    await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    const updatedUser = await User.findById(req.params.id);

    res.status(201).json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        password: updatedUser.password,
        balance: updatedUser.balance,
        admin: updatedUser.admin,
    });
};

//Delete User
const deleteUser = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No user with id: ${id}`);
    }
    
    await User.findByIdAndRemove(id);

    res.status(200).json({ id: req.params.id });
};

module.exports = {
    allUsers,
    singleUser,
    createUser,
    updateUser,
    deleteUser,
};