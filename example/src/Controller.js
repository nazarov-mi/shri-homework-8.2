import Model from './Model'

// Методы, которые может выполнить пользователь
export default {
	// Добавить сообщение
	addMessage (text) {
		Model.addMessage(text)
	},

	// Изменить данные
	changeData (data) {
		if (data) {
			Model.changeData(data)
		} else {
			Model.addMessage('Заполните форму')
		}
	}
}