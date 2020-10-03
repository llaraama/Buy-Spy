const router = require("express").Router();
const favoritesRoutes = require("./favorites");
const userRoutes=require("./users")

router.use("/favorites", favoritesRoutes);
router.use("/users",userRoutes)

module.exports = router;
