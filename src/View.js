/* Abstract class */
/* eslint-disable class-methods-use-this, no-unused-vars */
const EventDispatcher = require('./EventDispatcher')
const AbstractClassError = require('./errors/AbstractClassError')
const AbstractMethodError = require('./errors/AbstractMethodError')

/**
 * Абстрактный класс для работы с представлением
 * и отображения данных, переданных моделью
 * @abstract
 * @class
 */
class View extends EventDispatcher {

	/**
	 * Создаёт экземпляр View
	 * @param {Model} - модель данных
	 * @constructs
	 */
	constructor (model) {
		super()

		if (this.constructor === View) {
			throw new AbstractClassError('View')
		}

		this._model = model
		this._target = null
	}

	/**
	 * Устанавливает родительский HTML элемент,
	 * после чего запускает инициализацию и отрисовку представления
	 * @param  {target} target - родительский HTML элемент
	 * @return {View} Возвращает текущий экземпляр класса
	 */
	mount (target) {
		this._target = target
		this.init(target)
		this.render()

		return this
	}

	/**
	 * Запускает инициализацию представления
	 * @abstract
	 * @param  {target} target - родительский HTML элемент
	 */
	init (target) {
		throw new AbstractMethodError('View', 'init')
	}

	/**
	 * Запускает отрисовку представления
	 * @abstract
	 */
	render () {
		throw new AbstractMethodError('View', 'render')
	}

	/**
	 * Возвращает привязанную модель
	 * @readonly
	 * @return {Model}
	 */
	get model () {
		return this._model
	}
}

module.exports = View