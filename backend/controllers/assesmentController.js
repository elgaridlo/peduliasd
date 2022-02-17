const Assesment = require('../models/assesmentModel');
const factory = require('./handlerController');

exports.createAssesment = factory.createOne(Assesment)
exports.deleteAssesment = factory.deleteOne(Assesment)
exports.getAllAssesment = factory.getAll(Assesment)
exports.getAssesmentById = factory.getOne(Assesment)
exports.updateAssesment = factory.updateOne(Assesment)
