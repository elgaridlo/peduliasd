const express = require('express');
const {signup,logout,protect,login,isLoggedIn} = require('../controllers/authController');
const { userUpdate, getAll, getUserById } = require('../controllers/userController')
const router = express.Router();

router.route('/signup').post(signup);
router.route('/login').post(login);

router.route('/').get(getAll)

router.route('/:id').put(userUpdate).get(getUserById);



module.exports = router;
