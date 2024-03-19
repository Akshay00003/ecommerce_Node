const {CreateCategory,getAllCategory,getSingleCategory,UpdateCategory,DeleteCategory}=require("../service/CategoryService")
const multer=require("multer")
const path=require("path")
const CategoryRouter=require("express").Router()

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

  CategoryRouter.post("/create", upload.single("logo"), async (req, res) => {
    try {
      console.log(req.body);
      console.log(req.file);
      await CreateCategory({ ...req.body }).then(
        (Category) => res.json(Category)
      );
    } catch {
      (err) => console.log(err);
    }
  });
  CategoryRouter.get("/", async (req, res) => {
    try {
      await getAllCategory().then((Category) => res.json(Category));
    } catch {
      (err) => console.log(err);
    }
  });
  CategoryRouter.get("/:id", async (req, res) => {
    try {
      // const id = req.params.id;
      const { id } = req.params;
      await getSingleCategory(id).then((Category) => res.json(Category));
    } catch {
      (err) => console.log(err);
    }
  });
  CategoryRouter.put("/:id",upload.single('logo'), async (req, res) => {
    try {
      const id=req.params.id
      const updatedData=req.body
      if(req.file){
        updatedData.logo=req.file.path
      }
      await UpdateCategory(id,updatedData).then((category) => res.json(category));
    } catch {
      (err) => console.log(err);
    }
  });
  CategoryRouter.delete("/:id", async (req, res) => {
    try {
      const id=req.params.id
      await DeleteCategory(id).then((category) => res.json(category));
    } catch {
      (err) => console.log(err);
    }
  });
module.exports=CategoryRouter