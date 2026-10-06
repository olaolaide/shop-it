import express from 'express';
import {getProduct, getProducts, addProduct, updateProduct, deleteProduct} from "../controllers/product.controller.js";

const router = express.Router();

router.get('/', getProducts)
router.get('/:id', getProduct)
router.post('/', addProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

export default router;