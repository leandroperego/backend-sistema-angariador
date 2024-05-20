const express = require("express");
const ImovelController = require("./src/controllers/ImovelController");

const router = express.Router();

router.get("/imoveis", ImovelController.index);
router.get("/imoveis/:id", ImovelController.show);
router.post("/imoveis", ImovelController.store);
router.put("/imoveis/:id", ImovelController.update);


module.exports = router;