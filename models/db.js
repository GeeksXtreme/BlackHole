var Setting = require('../setting'),
	Db = require('mongodb').Db,
	Connection = require('mongodb').Connection,
	Server = require('mongodb').Server;

module.exports = new Db(Setting.db, new Server(Setting.host, Connection.DEFAULT_PORT, {}));
