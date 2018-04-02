import fw from 'fw'
import Model from './Model'
import $ from './$'

/**
 * Класс для работы с представлением,
 * наследует обстрактный класс fw.View
 * @class
 * @extends fw.View
 */
class View extends fw.View {

	/**
	 * Создаёт экземпляр View
	 * @constructs
	 */
	constructor () {
		super(Model)
	}

	/**
	 * Запускает инициализацию представления
	 * @param {target} target - родительский HTML элемент
	 */
	init (target) {
		this._$apply = $('.view-stub__apply', target)
		this._$input = $('.view-stub__input', target)
		this._$label = $('.view-stub__label', target)

		this._$apply.addEventListener('click', () => {
			const data = this._$input.value

			this.fire('submit', data)
			this._$input.value = ''
		})

		this.model.on('message-added', () => this.renderMessages())
	}

	/**
	 * Запускает отрисовку представления
	 */
	render () {
		this.renderMessages()
	}

	/**
	 * Запускает отрисовку списка сообщений
	 */
	renderMessages () {
		const state = this.model.state
		this._$label.innerHTML = `<p>${state.messages.join('</p><p>')}</p>`
	}
}

export default new View(Model)