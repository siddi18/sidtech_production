import express from "express";
const router = express.Router()
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct, createProductReview } from "../controllers/productController.js";
import { protect } from "../middleware/authMiddleware.js";

router.get('/', getProducts)
router.get('/:id', getProductById)
router.post('/', protect, createProduct)
router.put('/:id', protect, updateProduct)
router.delete('/:id', deleteProduct)
router.post('/:id/review', protect, createProductReview)


export default router;
