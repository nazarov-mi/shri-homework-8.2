import fw from 'fw'
import Model from './Model'

const $ = (selector, target) => (target || document).querySelector(selector)

class View extends fw.View {
	constructor (model) {
		super(model)
	}

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

	render () {
		this.renderMessages()
	}

	renderMessages () {
		const state = this.model.state
		this._$label.innerHTML = `<p>${state.messages.join('</p><p>')}</p>`
	}
}

export default new View(Model)