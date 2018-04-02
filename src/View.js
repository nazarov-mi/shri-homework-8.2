/* Abstract class */
/* eslint-disable class-methods-use-this, no-unused-vars */
const EventDispatcher = require('./EventDispatcher')

class View extends EventDispatcher {
	constructor (model) {
		super()
		this._model = model
		this._target = null
	}

	mount (target) {
		this._target = target
		this.init(target)
		this.render()
	}

	init (target) {
		// abstract
	}

	render () {
		// abstract
	}

	get model () {
		return this._model
	}
}

module.exports = View