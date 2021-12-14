const Kid = require('./../models/kidsModel')
const factory = require('./handlerController');



exports.createKid = factory.createOne(Kid)
exports.deleteKid = factory.deleteOne(Kid)
exports.getAllKid = factory.getAll(Kid)
exports.getKidById = factory.getOne(Kid)
exports.updateKid = factory.updateOne(Kid)
