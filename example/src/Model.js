import fw from 'fw'

/**
 * Класс для хранения и обработки входящих данных,
 * наследует класс fw.Model
 * @class
 * @extends fw.Model
 */
class Model extends fw.Model {

	/**
	 * Создаёт экземпляр Model
	 * @constructs
	 */
	constructor () {
		super({
			messages: [],
			data: ''
		})
	}

	/**
	 * Добавляет новое сообщение к состоянию модели
	 * и генерирует событие message-added
	 * @param {String} text - текст сообщение
	 * @return {Model} Возвращает текущий экземпляр класса
	 */
	addMessage (text) {
		const messages = this.state.messages || []

		messages.push(text)

		this.changeState({
			messages
		})
		this.fire('message-added', text)

		return this
	}

	/**
	 * Изменяет поле data в состоянии модели
	 * и генерирует событие data-changed
	 * @param  {String} data - новое значение поля data
	 * @return {Model} Возвращает текущий экземпляр класса
	 */
	changeData (data) {
		this.changeState({
			data
		})
		this.fire('data-changed', data)

		return this
	}
}

// Возвращаем новый экземпляр модели
export default new Model()