/**
 * Класс ошибки создания абстракного класса
 * @class
 */
class AbstractClassError {

	/**
	 * Создаёт экземпляр AbstractClassError
	 * @constructs
	 */
	constructor (className) {
		throw new Error(`Попытка создания экземпляра абстрактного класса ${className}`)
	}
}

module.exports = AbstractClassError