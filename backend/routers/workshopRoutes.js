const express = require('express');
const { protect } = require('../controllers/authController');
const { createWorkshop, updateWorkshop, getAllWorkshop, getWorkshopById, deleteWorkshop } = require('../controllers/workshopController');

const router = express.Router();

router.route('/').post(createWorkshop).get(getAllWorkshop);

router.route('/:id').put(updateWorkshop).get(getWorkshopById).delete(deleteWorkshop);

module.exports = router;
