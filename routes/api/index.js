const router = require("express").Router();

// Setting up routes
router.use("/users", require("./user-routes"));
router.use("/thoughts", require("./thought-routes"));

module.exports = router;
