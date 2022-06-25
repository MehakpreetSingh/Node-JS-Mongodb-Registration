const mongoose = require('mongoose')

const FarmerSchema = new mongoose.Schema(
	{
		Name: { type: String, required: true },
		aadharid: { type: Int32Array, required: true },
		region: { type: String, required: true },
		crops_produced : { type: Int32Array, required: true },
		no_of_seedlings : { type: Int32Array, required: true },
		income : { type: Int32Array, required: true },
		latitude : { type: Int32Array, required: true },
	},
	{ collection: 'FarmerDetails' }
)

const model = mongoose.model('FarmerSchema', FarmerSchema)

module.exports = model
