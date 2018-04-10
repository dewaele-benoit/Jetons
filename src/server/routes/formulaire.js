var express = require("express");
var router = express.Router();

router.use(function (req, res, next) {
	res.header("Cache-Control", "no-cache, no-store, must-revalidate");
	res.header("Pragma", "no-cache");
	res.header("Expires", 0);
	next();
});

/* GET home page. */
router.get("/", function (req, res, next) { // eslint-disable-line no-unused-vars
	var model = {
		js:["formulaire.js"]
	};
	res.render("formulaire", model);
});

module.exports = router;
