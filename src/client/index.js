import "jquery"
import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap/dist/css/bootstrap.css"
import "./style.css"

window.onload = function () {
	new Ractive.default({
		el: 'body',
		append: false,
		template: $("body").html(),
	});
};