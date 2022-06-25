
const mongoose = require('mongoose')

const FarmerActivity = new mongoose.Schema(
	{
		Name: { type: String, required: true },
		aadharid: { type: Number, required: true },
		region: { type: String, required: true },
		crops_produced : { type: Number, required: true },
		no_of_seedlings : { type: Number, required: true },
		income : { type: Number, required: true },
		latitude : { type: Number, required: true },
		longitude : { type: Number, required: true },
	},
	{ collection: 'FarmerActivity' }
)

const model = mongoose.model('FarmerActivity', FarmerActivity)

module.exports = model
