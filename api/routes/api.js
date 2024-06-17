const router = require ("express").Router()
const userC=require("../controller/user")
const adminC=require("../controller/admin")
const multer=require("multer")
const path=require('path')


const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,"../public/uploads/"))
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+ '-'+file.originalname)
    },
})

const upload=multer({
    storage:storage,
    limits:{fileSize:1024 * 1024 *5,}
})


router.get("/",userC.homePageController)
router.post("/reginsert",userC.regController)
router.post("/checkuser",userC.userCheckController)
router.post("/insertProduct",upload.single('img'),adminC.productinsertController)
router.get("/productdata",adminC.productDataController)
router.get("/updateformdata/:productid",adminC.updateFormController)
router.put("/updateproductdata/:id",adminC.updateProductController )
router.delete("/adminproductdelete/:id",adminC.deleteProductController)
router.get("/allProducts",adminC.allProductsController)
router.post("/queryformdata",adminC.queryProductController)
router.get("/querydata",adminC.querydataController)
router.post("/queryreplydata/:query",adminC.queryReplyController)
router.get("/userdata",adminC.userDataController)
router.get("/updateStatus/:id",adminC.userStatusController)
router.post("/cartdata",adminC.cartDataController)





module. exports = router