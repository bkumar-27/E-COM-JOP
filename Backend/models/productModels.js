import mongoose from "mongoose"

let productSchema = new mongoose.Schema({

	name: {
		type: String,
		required: [true, 'Please enter product name'],
		trim: true
	},
	description: {
		type: String,
		required: [true, 'Please enter product description'],
	},
	price: {
		type: Number,
		required: [true, 'Please enter product price'],
		maxLength: [7, 'Price can not be exceed 7 digits']
	},

	category: {
		type: String,
		required: [true, 'please enter product category']
	},

	image: [
		{
			public_id: {
				type: String,
				required: true
			},
			url: {
				type: String,
				required: true
			},
		},
	],

	stock: {
		type: Number,
		required: [true, 'please enter product stock'],
		maxLength: [5, 'Stock can not be exceed 5 digits'],
		default: 1
	},

	ratings: {
		type: Number,
		default: 0,
	},

	numOfReviews: {
		type: Number,
		default: 0
	},
	reviews: [
		{
			name: {
				type: String,
				required: true
			},
			rating: {
				type: Number,
				required: true
			},
			comment: {
				type: String,
				required: true
			}
		}
	],
	createdAt: {
		type: Date,
		default: Date.now
	}
})


export let Product = mongoose.model("products", productSchema);
