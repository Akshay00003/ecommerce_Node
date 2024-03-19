// const { Create } = require("../Controllers/BrandController");
const BrandRouter = require("express").Router();
const path = require("path");
const {
  CreateBrand,
  getAllBrands,
  getSingleBrands,
  UpdateBrand,
  DeleteBrand
} = require("../service/BrandService");
const multer = require("multer");

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

BrandRouter.post("/create", upload.single("logo"), async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.file);
    await CreateBrand({ ...req.body, logo: req.file.filename }).then((Brand) =>
      res.json(Brand)
    );
  } catch {
    (err) => console.log(err);
  }
});
BrandRouter.get("/", async (req, res) => {
  try {
    await getAllBrands({}).then((Brand) => res.json(Brand));
  } catch {
    (err) => console.log(err);
  }
});
BrandRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await getSingleBrands(id).then((Brand) => res.json(Brand));
  } catch {
    (err) => console.log(err);
  }
});
BrandRouter.put("/:id", upload.single("logo"), async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    if (req.file) {
      updatedData.logo = req.file.path;
    }
    await UpdateBrand(id, updatedData).then((Brand) => res.json(Brand));
  } catch {
    (err) => console.log(err);
  }
});
BrandRouter.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    await DeleteBrand(id).then((Brand) => res.json(Brand));
  } catch {
    (err) => console.log(err);
  }
});
module.exports = BrandRouter;
