const EventDispatcher = require('./EventDispatcher')

class Model extends EventDispatcher {
	constructor (state) {
		super()
		this._state = state
	}

	changeState (data) {
		Object.assign(this._state, data)
		this.fire('change', this._state)
	}

	get state () {
		return this._state
	}
}

module.exports = Model