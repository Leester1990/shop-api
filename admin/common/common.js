let express = require("express");
let router = express.Router();
let bodyParser = require("body-parser");
let db = require("../../db/db");
let mysql = require("mysql");

var conn = mysql.createConnection(db.mysql);
//conn.connect();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// 商品列表
router.post('/cate', function (req, res) {
	console.log(req);
	console.log(res);
    console.log("cate list");
});

router.get('/getNowTime', (req, res) => {
	res.json({
		message: "success",
		code: 200,
		data: {
			timestamp: new Date().getTime()
		}
	});
})

module.exports = router