const express = require('express');
const {createKid, deleteKid, getAllKid, getKidById, updateKid} = require('../controllers/kidController');

const router = express.Router();

router.route('/').post(createKid).get(getAllKid)
router.route('/:id').delete(deleteKid).get(getKidById).put(updateKid)

module.exports = router;
