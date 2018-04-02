import Model from './Model'

export default {
	addMessage (text) {
		Model.addMessage(text)
	},

	changeData (data) {
		if (data) {
			Model.changeData(data)
		} else {
			Model.addMessage('Заполните форму')
		}
	}
}