const express = require("express");
const router = express.Router();
const establishmentController = require("../controllers/establishmentController");
 
router.post("/", establishmentController.createEstablishment);
router.get("/", establishmentController.getAllEstablishments);
router.put("/:id", establishmentController.updateEstablishment);
router.delete("/:id", establishmentController.deleteEstablishment);
 
module.exports = router;