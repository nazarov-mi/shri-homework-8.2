import fw from 'fw'

class Model extends fw.Model {
	constructor (state) {
		super(state)
	}

	addMessage (text) {
		const messages = this.state.messages || []

		messages.push(text)

		this.changeState({
			messages
		})
		this.fire('message-added', text)
	}

	changeData (data) {
		this.changeState({
			data
		})
		this.fire('data-changed', data)
	}
}

export default new Model({
	messages: [],
	data: ''
})