var express = require('express');
var router = express.Router();
var productHelpers = require('../helpers/product-helpers')

/* GET users listing. */
router.get('/', function(req, res, next) {
 let products=[
    {
      name : "IPHONE 17",
      category : "MOBILE",
      desciption : "This is a good phone",
      image :"https://imgs.search.brave.com/U0OwRGqz4MUQOKlCGMdpIG6DLxQSYsc4u5HI4UDKYOk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzMxMi8zMTIveGlm/MHEvbW9iaWxlL2ov/Ny9mLy1vcmlnaW5h/bC1pbWFoZnQ1Z2Zn/d3B0NnByLmpwZWc_/cT03MA"

    },
    {
      name : "PIXEL 10",
      category : "MOBILE",
      desciption : "This is a good phone",
      image :"https://imgs.search.brave.com/LkwnJCrmkjPIXQcI4IxTAA4dCaz-rTTcXQFGYBUxC00/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/OTEtaW1nLmNvbS9w/aWN0dXJlcy8xNjU3/NzgtdjMtZ29vZ2xl/LXBpeGVsLTEwLW1v/YmlsZS1waG9uZS1o/cmVzLTUuanBnP3Ry"

    },
    {
      name : "SAMSUNG S26 ULTRA",
      category : "MOBILE",
      desciption : "This is a good phone",
      image :"https://imgs.search.brave.com/rUW_nDHtDaeN1pGgv8MCEi1ZhOKDXH2yR2cEGLHAsVo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWct/cHJkLXBpbS5wb29y/dmlrYS5jb20vcHJv/ZHVjdC9TYW1zdW5n/LWdhbGF4eS1zMjYt/dWx0cmEtNWctY29i/YWx0LXZpb2xldC0x/NmdiLTFUYi1Gcm9u/dC1CYWNrLVZpZXcu/d2VicA"

      },
    {
      name : "XIOMI 17 ULTRA",
      category : "MOBILE",
      desciption : "This is a good phone",
      image :"https://imgs.search.brave.com/BC9YQB0ROzStn5TQtVhLmpF3tguKyiehGgGViLgf-8o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mZG4y/LmdzbWFyZW5hLmNv/bS92di9waWNzL3hp/YW9taS9sZWljYS1s/ZWl0enBob25lLXBv/d2VyZWQtYnkteGlh/b21pLTEuanBn"

  }
]
  res.render('admin/view-products', {admin:true, products})

});

router.get('/add-product', (req,res)=>{
  res.render('admin/add-product')
})

router.post('/add-product',(req,res)=>{
  console.log(req.body)
  console.log(req.files.image)
  productHelpers.addProduct(req.body)
})

module.exports = router;
