/* Abstract class */
/* eslint-disable class-methods-use-this, no-unused-vars */
const AbstractClassError = require('./errors/AbstractClassError')

/**
 * Класс реализует механизма подписки на события и рассылки данных между подписчиками.
 * @abstract
 * @class
 */
class EventDispatcher {

	/**
	 * Создаёт экземпляр EventDispatcher
	 * @constructs
	 */
	constructor () {
		if (this.constructor === EventDispatcher) {
			throw new AbstractClassError('EventDispatcher')
		}

		this._listeners = {}
	}

	/**
	 * Подписывает функцию обратного вызова на события определённого типа,
	 * если она не была подписана ранее
	 * @param  {String} type - тип события
	 * @param  {Function} callback - функция обратного вызова
	 * @param  {Boolean} greatPriority - если является true —
	 * функция обратного вызова добавляется в начало очереди
	 * @return {EventDispatcher} Возвращает текущий экземпляр класса
	 */
	on (type, callback, greatPriority = false) {
		if (typeof callback === 'function') {
			let callbacks = this._listeners[type]

			if (!Array.isArray(callbacks)) {
				callbacks = []
				this._listeners[type] = callbacks
			}

			const index = callbacks.indexOf(callback)

			if (index < 0) {
				if (greatPriority) {
					callbacks.unshift(callback)
				} else {
					callbacks.push(callback)
				}
			}
		}

		return this
	}

	/**
	 * Отписывает функцию обратного вызова от событий определённого типа,
	 * @param  {String} type - тип события
	 * @param  {Function} callback - функция обратного вызова
	 * @return {EventDispatcher} Возвращает текущий экземпляр класса
	 */
	off (type, callback) {
		const callbacks = this._listeners[type]

		if (Array.isArray(callbacks)) {
			const index = callbacks.indexOf(callback)

			if (index >= 0) {
				callbacks.splice(index, 1)
			}
		}

		return this
	}

	/**
	 * Рассылает данные между всему функциями обратного вызова,
	 * подписанными на событие определённого типа
	 * @param  {String} type - тип события
	 * @param  {any} payload - данные для рассылки
	 * @return {EventDispatcher} Возвращает текущий экземпляр класса
	 */
	fire (type, payload) {
		const callbacks = this._listeners[type]

		if (Array.isArray(callbacks)) {
			callbacks.forEach(callback => callback(payload))
		}

		return this
	}
}

module.exports = EventDispatcher