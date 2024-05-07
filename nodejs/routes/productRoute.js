
import { Router } from "express";
import  Product  from "../models/productModle.js";
import multer from 'multer';
const router=new Router();




//save product

const FILE_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg'
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const isValid = FILE_TYPE_MAP[file.mimetype];
        let uploadError = new Error('invalid image type');

        if(isValid) {
            uploadError = null
        }
      cb(uploadError, 'public/uploads')
    },
    filename: function (req, file, cb) {
        
      const fileName = file.originalname.split(' ').join('-');
      const extension = FILE_TYPE_MAP[file.mimetype];
      cb(null, `${fileName}-${Date.now()}.${extension}`)
    }
  })
  
const uploadOptions = multer({ storage: storage })

router.post(`/`, uploadOptions.single('image'), async (req, res) =>{
   
    const file = req.file;
    if(!file) return res.status(400).send('No image in the request')

    const fileName = file.filename
    const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;
    let product = new Product({
        name: req.body.name,
        details: req.body.details,
        image: `${basePath}${fileName}`,
        customerPrice: req.body.customerPrice,
        wholesalePrice: req.body.wholesalePrice,
        category: req.body.category,
        countInStock: req.body.countInStock,
        isFeatured: req.body.isFeatured,
    })

    product = await product.save();

    if(!product) 
    return res.status(500).send('The product cannot be created')

    res.send(product);
})



export default router;



//get all products with details
router.get('/getall' , async (req,res)=>{
    const ProductList= await Product.find();

    if(!ProductList){
        res.status(500).json({success : false})
    }

    res.send(ProductList);
});
 


//count of all products
router.get(`/count`, async (req, res) =>{
    const productCount = await Product.countDocuments()

    if(!productCount) {
        res.status(500).json({success: false})
    } 
    res.send({
        productCount: productCount
    });
})


//get a product details 
router.get(`/:id`, async (req, res) =>{
    const product = await Product.findById(req.params.id);

    if(!product) {
        res.status(500).json({success: false})
    } 
    res.send(product);
})



//get a product details with his category details
router.get(`/catdetails/:id`, async (req, res) =>{
    const product = await Product.findById(req.params.id).populate('category');

    if(!product) {
        res.status(500).json({success: false})
    } 
    res.send(product);
})



//get LAST 6 FEATURED products which are displayed on the HOME page
router.get(`/get/featured`, async (req, res) =>{
    const count=6;
    const products = await Product.find( {isFeatured: true}).limit(count) ;

    if(!products) {
        res.status(500).json({success: false})
    } 
    res.send(products);
})




//get products in a spacific category  
router.get(`/`, async (req, res) =>{
    let filter = {};
    if(req.query.categories)
    {
         filter = {category: req.query.categories.split(',')}
    }

    const productList = await Product.find(filter).populate('category');

    if(!productList) {
        res.status(500).json({success: false})
    } 
    res.send(productList);
})


