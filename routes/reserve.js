var router = require("express").Router();

const reserveController = require('../controllers/reserve');

//add routers
router.get("/", reserveController.findAll);
router.get("/:id", reserveController.findOne);
router.get("/:bookId&:userId", reserveController.findByUserOrBook);
router.post("/", reserveController.create);
router.put("/:id", reserveController.update);
router.delete("/:id", reserveController.delete);

module.exports = router;
