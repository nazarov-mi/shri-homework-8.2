import View from './View'
import Model from './Model'
import Controller from './Controller'
import sendToServer from './sendToServer'
import $ from './$'

function initLog () {
	const $log = $('.log')

	// Функция логирования
	function log (data) {
		$log.innerHTML += data
	}

	// Логирование модели

	// Старое состояние
	let oldState = JSON.stringify(Model.state)

	Model.on('change', (state) => {
		const newState = JSON.stringify(state)
		const html = [
			'<p><b>В моделе изменились данные</b></p>',
			'<p>+ Старое состояние</p>',
			`<pre>${oldState}</pre>`,
			'<p>+ Новое состояние</p>',
			`<pre>${newState}</pre>`
		].join('')

		log(html)

		oldState = newState
	})

	// Логирование представления
	View.on('submit', (data) => {
		const html = [
			'<p><b>Представление сгенерировало событие<br>отправки формы</b></p>',
			'<p>+ Переданные данные</p>',
			`<pre>${data}</pre>`
		].join('')

		log(html)
	})
}

initLog()


// Функция отправки данных на сервер
async function send (data) {
	let message

	try {
		message = await sendToServer(data)
	} catch (e) {
		message = e.message
	}

	Controller.addMessage(message)
}

// Прикрепляет представление
View.mount(document)

// Подписываемся на событие отправки формы
View.on('submit', data => Controller.changeData(data))

// Метод вынесен из модели для того, чтобы показать как работает отправка событий
// и вызов методов контроллера в методе send
Model.on('data-changed', data => send(data))