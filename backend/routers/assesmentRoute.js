const express = require('express');
const { createAssesment, getAllAssesment, updateAssesment, getAssesmentById } = require('../controllers/assesmentController');

const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router();

router.route('/').post(protect, restrictTo('admin'), createAssesment).get(getAllAssesment)

router.route('/:id').put(protect, restrictTo('admin'), updateAssesment).get(getAssesmentById);

module.exports = router;
