import express from 'express'
import { getAllProducts, getSingleProduct, updateProduct, deleteProduct, createProduct } from '../Controllers/productController.js'

let router = express.Router()

router.route('/products').get(getAllProducts).post(createProduct)
router.route('/product/:id').get(getSingleProduct).put(updateProduct).delete(deleteProduct)

export default router