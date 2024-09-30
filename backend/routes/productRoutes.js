
import express from 'express'
const router = express.Router()
import { allProducts, createProduct, deleteProduct, updateProduct } from '../controllers/productControllers.js'

router.post('/create', createProduct)

router.delete('/delete/:id', deleteProduct)

router.get('/all-products', allProducts)

router.patch('/update/:id', updateProduct)

export default router   