const express = require('express');
const router = express.Router();
const {
    allUsers,
    singleUser,
    createUser,
    updateUser,
    deleteUser,
} = require('../controllers/userController');


//Get All Users
router.get('/', allUsers);

//Get Single User
router.get('/:id', singleUser);

//Create User
router.post('/', createUser);

//Update User
router.put('/:id', updateUser);

//Delete User
router.delete('/:id', deleteUser);

module.exports = router;