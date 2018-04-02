// Отправка данных на сервер
export default data => new Promise((resolve, reject) => {
	setTimeout(() => {
		if (Math.random() > .3) {
			resolve(`Сервер принял данные «${data}»`)
		} else {
			reject(new Error(`Не удалось отправить данные «${data}»`))
		}
	}, 500)
})