import Product from "../models/product";

export async function getAllProducts(req, res){
    try {
        const product = await Product.find({});
        res.status(200).json({sucess : "true", message: "Product retrieved successfully", data : product})    
    } catch (error) {
        console.log(error.message);
        res.status(500).json({sucess: "false", message: "Failed"});
    }
}

export async function getProduct(req, res){
    const {id} = req.params;
    if(mongoose.isValidObjectId(id)==false){
        res.status(400).json({message: "Invalid ID"});
    }
    try {
        const product = await Product.findById(id);
        res.status(200).json({sucess : "true", message: "Product retrieved successfully", data : product})    
    } catch (error) {
        console.log(error.message);
        res.status(500).json({sucess: "false", message: "Failed"});
    }
}

export async function deleteProduct(req, res){
    const {id} = req.params;
    if(mongoose.isValidObjectId(id)==false){
        res.status(400).json({message: "Invalid ID"});
    }
    try {
        const product = await Product.findByIdAndDelete(id);
        res.status(200).json({sucess : "true", message: "Product deleted successfully", data : product})    
    } catch (error) {
        console.log(error.message);
        res.status(500).json({sucess: "false", message: "Failed"});
    }
}
export async function saveProduct(req, res){
    const product = req.body;
    if(product.name ==null || product.price== null || product.image==null){
        res.status(400).json({success : "false", message : "Enter Complete details"});
    }
    try {
        const newProduct = Product(product);
        newProduct.save();
        res.status(200).json({sucess : "true", message: "Product saved successfully", data : product})    
    } catch (error) {
        console.log(error.message);
        res.status(500).json({sucess: "false", message: "Failed"});
    }
}