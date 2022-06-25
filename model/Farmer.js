const mongoose = require('mongoose')

const FarmerSchema = new mongoose.Schema(
	{
		Name: { type: String, required: true },
		aadharid: { type: Int32Array, required: true },
		region: { type: String, required: true },
		crops_produced : { type: Number, required: true },
	},
	{ collection: 'Regionalheads' }
)

const model = mongoose.model('FarmerSchema', FarmerSchema)

module.exports = model
