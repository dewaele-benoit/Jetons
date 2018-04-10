(function (Ractive) {
	const template = require("./formulaire.template.html");
	const initService = require("./formulaire.service");

	Ractive.components['formulaire'] = Ractive.extend({
		template: template,
		on: {
			init: function () {
				var ctx = this;
				ctx.set("testVariable", "Bonjour");
			}
		}
	});

})
(Ractive.default);
