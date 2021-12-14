const express = require('express');
const { protect } = require('../controllers/authController');
const { createEducationProgram, updateEducationProgram, getAllEducationProgram, getEducationProgramById, deleteEducationProgram } = require('../controllers/educationProgramController');

const router = express.Router();

router.route('/').post(createEducationProgram).get(getAllEducationProgram);

router.route('/:id').put(updateEducationProgram).get(getEducationProgramById).delete(deleteEducationProgram);

module.exports = router;
