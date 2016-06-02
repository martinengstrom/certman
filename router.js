module.exports = function(app) {

	// Include all APIs
	function requireAPIs(app) {
		var normalizedPath = require("path").join(__dirname, "api");
		require("fs").readdirSync(normalizedPath).forEach(function(file) {
			require("./api/" + file)(app);
		});
	}

	requireAPIs(app);
}
