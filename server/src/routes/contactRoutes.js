const router=require('express').Router(); const Contact=require('../models/Contact'); const validate=require('../middleware/validate'); const rules=require('../validators'); const {protect,requireAdmin}=require('../middleware/auth');
router.post('/',validate(rules.contact),async(req,res,next)=>{try{const contact=await Contact.create(req.validated.body);res.status(201).json({success:true,message:'Thanks! We will get back to you soon.',contactId:contact.id});}catch(e){next(e)}});
router.get('/',protect,requireAdmin,async(req,res,next)=>{try{res.json({success:true,contacts:await Contact.find().sort({createdAt:-1})});}catch(e){next(e)}});
module.exports=router;
