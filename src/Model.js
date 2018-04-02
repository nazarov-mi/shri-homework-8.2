const EventDispatcher = require('./EventDispatcher')

/**
 * Класс реализует модель для хранения и обработки входящих данных
 * @class
 */
class Model extends EventDispatcher {

	/**
	 * Создаёт экземпляр Model
	 * @param {Object} - внутреннее состояние модели
	 * @constructs
	 */
	constructor (state) {
		super()

		this._state = Object.assign({}, state)
	}

	/**
	 * Добавляет переданные данные к состоянию модели
	 * @param  {Object} data - полученные данные
	 * @return {Object} Возвращает изменённое состояние модели
	 */
	changeState (data) {
		Object.assign(this._state, data)
		this.fire('change', this._state)

		return this._state
	}


	/**
	 * Возвращает внутреннее состояние модели
	 * @readonly
	 * @return {Object}
	 */
	get state () {
		return this._state
	}
}

module.exports = Model