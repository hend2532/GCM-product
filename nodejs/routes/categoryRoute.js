import { Router } from "express";
import  category  from "../models/categoryModle.js";

const router=new Router();

//get all categories 
router.get(`/allcategories`, async (req, res) =>{
    const categoryList = await category.find();

    if(!categoryList)  {res.status(500).json({success: false}) } 

    res.send(categoryList);
})



export default router;
