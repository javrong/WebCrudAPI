import express from 'express';
import {
	getProducts,
	getProductById,
	saveProduct,
	updateProduct,
	deleteProduct
} from '../controllers/productController.js';

// Create CRUD route a product
const adminRouter = express.Router();

// READ all product
adminRouter.get('/', getProducts);
// READ a single product by id_nameo
adminRouter.get('/:id', getProductById);
// CREATE a product
adminRouter.post('/', saveProduct);
// UPDATE a product by id_name
adminRouter.patch('/:id', updateProduct);
// DELETE a product by id_name
adminRouter.delete('/:id', deleteProduct);

const userRouter = express.Router();

userRouter.get('/', getProducts);
userRouter.get('/:id', getProductById);

// export function
export default (adminRouter, userRouter);
