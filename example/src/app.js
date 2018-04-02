import View from './View'
import Model from './Model'
import Controller from './Controller'
import sendToServer from './sendToServer'

async function send (data) {
	try {
		const message = await sendToServer(data)
		Controller.addMessage(message)
	} catch (e) {
		Controller.addMessage(e.message)
	}
}

View.mount(document)
View.on('submit', data => Controller.changeData(data))
Model.on('data-changed', data => send(data))