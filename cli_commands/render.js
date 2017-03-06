module.exports = {
	command: 'render',
	desc: 'renders all static files',
	handler: function () {
		var enduro_instance = require('../index')

		enduro_instance.init()
			.then(() => {
				enduro.actions.render()
			})
	}
}