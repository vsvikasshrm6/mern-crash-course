import { Router } from "express";
import { getAllProducts } from "../controller/productController.js";
import { saveProduct } from "../controller/productController.js";
import { getProduct } from "../controller/productController.js";
import { deleteProduct } from "../controller/productController.js";

const productRouter = Router();
productRouter.get('/allProducts', getAllProducts);
productRouter.get('/products:id', getProduct);
productRouter.get('/deleteProduct:id', deleteProduct);
productRouter.post('/saveProduct', saveProduct);

export default productRouter;