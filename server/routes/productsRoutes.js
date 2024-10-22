const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer');
const {createProduct, readProducts ,updateProduct, deleteProduct} = require('../controllers/productsControllers');
const multer = require('multer');

router.post('/addproduct', upload.single('image'), createProduct)
router.get('/products', readProducts)
router.patch('/updateproduct/:id', updateProduct)
router.delete('/deleteproduct/:id', deleteProduct)

module.exports = router;