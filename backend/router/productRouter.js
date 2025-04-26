import { Router } from "express";
import { getAllProducts } from "../controller/productController";
import { saveProduct } from "../controller/productController";
import { getProduct } from "../controller/productController";
import { deleteProduct } from "../controller/productController";

const productRouter = Router();
productRouter.get('/allProducts', getAllProducts);
productRouter.get('/products:id', getProduct);
productRouter.get('/deleteProduct:id', deleteProduct);
productRouter.post('/saveProduct', saveProduct);

export default productRouter;