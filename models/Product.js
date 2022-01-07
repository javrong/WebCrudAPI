import mongoose from 'mongoose';

// Create mongodb database schema a product
const productSchema = mongoose.Schema({
	// Product name
	product: {
		type: String,
		required: true
	},
	// Price product
	price: {
		type: Number,
		required: true
	},
	// Date time product create
	date: {
		type: Date,
		default: Date.now
	}

});

const authSchema = mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
})
// Export function variable name
export default mongoose.model('Products', productSchema, authSchema);
