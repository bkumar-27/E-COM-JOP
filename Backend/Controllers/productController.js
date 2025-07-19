
import { Product } from "../models/productModels.js"

export let getAllProducts = async (req, res) => {


	let products = await Product.find()

	return res.status(200).json({
		success: true,
		message: `All products`,
		products,

	});
};


export let getSingleProduct = async (req, res) => {

	let product = await Product.findById(req.params.id)
	if (!product) {
		res.status(404).json({
			success: false,
			message: "Product not found with given Id"
		})

	}


	res.status(200).json({
		success: true,

		message: `get single product`,
		product,
	})

};



export let createProduct = async (req, res) => {
	let product = await Product.create(req.body)
	return res.status(201).json({
		success: true,
		message: 'create product in DB',
		product
	})
}


export let updateProduct = async (req, res) => {
	let updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true
	})
	if (!updateProduct) {
		res.status(404).json({
			message: "Product Not Found With Id"
		})
	}
	res.status(201).json({
		success: true,
		message: 'Update product',
		updateProduct
	})
}

export let deleteProduct = async (req, res) => {
	let product = await Product.findByIdAndDelete(req.params.id)
	if (!product) {
		res.status(404).json({
			success: false,
			message: "Prodct not Found with Id"

		})
	}
	res.status(201).json({
		success: true,
		message: 'delete product',
	})
}