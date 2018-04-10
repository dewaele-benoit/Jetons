(function (Ractive) {
	const template = require("./init.template.html");
	const initService = require("./init.service");

	Ractive.components['init'] = Ractive.extend({
		template: template,
		on: {
			init: function () {
				var ctx = this;
				ctx.set("testButton", testButton);
			}
		}
	});

	function testButton() {
		window.location.href = "/formulaire"
	}

})
(Ractive.default);
