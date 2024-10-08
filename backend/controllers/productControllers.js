import productModel from '../models/productModel.js'
import mongoose from 'mongoose'

export const createProduct = async (req, res) => {
    const products = req.body; // Now it should be an array
    const createdProducts = [];
  
    if (!Array.isArray(products)) {
      return res.status(400).json({ success: false, message: 'Invalid input, expecting an array of products' });
    }
  
    for (const { title, price, description, category, image } of products) {
      if (!title || !price || !image || !category) {
        return res.status(400).json({ success: false, message: 'Please provide all the required details of the product!' });
      }
  
      try {
        const productExists = await productModel.findOne({ title });
        if (productExists) {
          return res.status(409).json({ success: false, message: 'Product already exists!' });
        }
  
        const createdProduct = new productModel({
          title,
          price,
          description,
          category,
          image
        });
  
        await createdProduct.save();
        createdProducts.push(createdProduct);
      } catch (error) {
        console.error("Error in creating product:", error.message);
        return res.status(500).json({ success: false, message: "Server error" });
      }
    }
  
    return res.status(201).json({ success: true, data: createdProducts });
  };
  
  


export const deleteProduct = async (req,res)=>{
    if(!req.params.id) return res.json({message: "You can't delete something that doesn't exist"})
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(404).json({success: false, message: "Product Id is not valid!"})        
    }
    
    try {
        const product = await productModel.findById(req.params.id)
        await product.deleteOne()
        return res.status(200).json({success: true, message: "Product deleted successfully"})
    } catch (error) {
        console.log("Error deleting product", error.message);
        return res.status(500).json({success: false, message: "server error"})
    }
}



export const allProducts = async (req,res)=>{
    try {
        const products = await productModel.find({})
        return res.status(200).json({success: true, message: products})
    } catch (error) {
        console.log("Server error mostly", error.message);
        return res.status(500).json({success: false, message: 'Server error'})
    }
}



export const updateProduct = async (req,res)=>{
    const {name, price, image} = req.body;
    const product = await productModel.findById(req.params.id)
    if(!product) return res.json({success: false, message: "This product do not exists"})
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(404).json({success: false, message: "Product Id is not valid!"})
    }

    try {
            if (name) product.name = name;  
            if (price) product.price = price;  
            if (image) product.image = image; 

        // WHY DIDN'T WE USED AWAIT BEFORE PRODUCT.SET()
        // product.set(...): This method is used to update the properties of the document in memory. It modifies the object but doesn't save it to the database or return a promise. Instead, it prepares the document to be saved later.
        // Saving Changes: To actually persist the changes to the database, you call await product.save();, which is what we do afterward.
        const updatedProduct = await product.save()
        return res.status(200).json({success: true, data: updatedProduct})
    } catch (error) {
        console.log("Error", error.message);
        return res.status(500).json({success: false, message:"Server error"})
    }
}