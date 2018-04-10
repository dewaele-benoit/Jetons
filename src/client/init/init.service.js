const Q = require("q");

function testButton() {
	let defer = Q.defer();
	var url = "init";
	$.ajax({
		url: url,
		type: "GET",
		datType: "json"
	}).done(function (result) {
		defer.resolve(result);
	}).fail(function (xhr, ajaxOptions, thrownError) {
		defer.reject({msg: " ", type: "error"});
	});
	return defer.promise;
}

module.exports = {
	testButton
};