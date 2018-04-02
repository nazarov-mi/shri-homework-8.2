/**
 * Класс ошибки вызова абстрактного метода
 * @class
 */
class AbstractMethodError {

	/**
	 * Создаёт экземпляр AbstractMethodError
	 * @constructs
	 */
	constructor (className, methodName) {
		throw new Error(`Не реализован метод ${methodName} класса ${className}`)
	}
}

module.exports = AbstractMethodError