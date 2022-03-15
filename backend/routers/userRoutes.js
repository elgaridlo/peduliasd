const express = require('express');
const authController = require('../controllers/authController');
const { userUpdate, getAll, getUserById, getProducts, updateProperty } = require('../controllers/userController')
const router = express.Router();

router.route('/update').put(updateProperty);
router.route('/signup').post(authController.signup);
router.route('/login').post(authController.login);

router.route('/').get(getProducts)
router.route('/way').get(getAll)

router.use(authController.protect)
router.route('/passwordUpdate').patch(authController.updatePassword);
router.route('/passwordUpdate/:id').patch(authController.updatePasswordById);
router.route('/:id').put(userUpdate).get(getUserById);
router.route('/auth/:id').get(authController.getAuthById);

module.exports = router;
