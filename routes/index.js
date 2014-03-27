
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Blackhole' });
};


//
exports.getsqlinfo = function(req, res){
	console.log(req.body);
	console.log("func is ok");
};