let express = require("express");
let app = new express();
let db = require("./db/db.js");
let mysql = require("mysql");

// Connect
var conn = mysql.createConnection(db.mysql);
conn.connect((err) => {
	if (err) {
		throw (err);
	}
	console.log('MySql Connected...')
});


//设置跨域访问
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});


//获取分类
app.get('/getCate', (req, res) => {
	let sql = "SELECT * FROM tb_item_cat";
	conn.query(sql, function(err, result) {
		if (err) {
			res.json({
				"result": {
					message: "error"
				}
			});
		}
		if (result) {
			res.json({
				"result": {
					message: "success",
					data: result
				}
			});
		}
	});
});

//引入单后台API路径
let apiCommon = require("./admin/common/common");

//使用API 请求路径
app.use("/api/common", apiCommon)

//配置服务端口
var server = app.listen(3005, '127.0.0.1', function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('你的api地址是：http://%s:%s', host, port);
});
