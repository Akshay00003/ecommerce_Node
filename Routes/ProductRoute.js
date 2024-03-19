const {
  CreateProduct,
  getAllProduct,
  getSingleProduct,
  UpdateProduct,
  DeleteProduct,
} = require("../service/ProductService");
const multer = require("multer");
const path=require("path")
const ProductRouter = require("express").Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/Images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({
  storage: storage,
});
ProductRouter.post("/create", upload.single("logo"), async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.file);
    await CreateProduct({ ...req.body, logo: req.file.filename}).then(
      (Product) => res.json(Product)
    );
  } catch {
    (err) => console.log(err);
  }
});

ProductRouter.get("/", async (req, res) => {
  try {
    await getAllProduct({}).then((Product) => res.json(Product));
  } catch {
    (err) => console.log(err);
  }
});
ProductRouter.get("/:id", async (req, res) => {
  try {
    // const id = req.params.id;
    const { id } = req.params;
    await getSingleProduct(id).then((Product) => res.json(Product));
  } catch {
    (err) => console.log(err);
  }
});
ProductRouter.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    // if(req.file){
    //   updatedData.logo=req.file.path
    // }
    await UpdateProduct(id, updatedData).then((Product) => res.json(Product));
  } catch {
    (err) => console.log(err);
  }
});
ProductRouter.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await DeleteProduct(id).then((Product) => res.json(Product));
  } catch {
    (err) => console.log(err);
  }
});
module.exports=ProductRouter