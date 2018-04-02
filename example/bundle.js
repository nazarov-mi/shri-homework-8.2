/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fw = __webpack_require__(1);

var _fw2 = _interopRequireDefault(_fw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Класс для хранения и обработки входящих данных,
 * наследует класс fw.Model
 * @class
 * @extends fw.Model
 */
var Model = function (_fw$Model) {
	_inherits(Model, _fw$Model);

	/**
  * Создаёт экземпляр Model
  * @constructs
  */
	function Model() {
		_classCallCheck(this, Model);

		return _possibleConstructorReturn(this, (Model.__proto__ || Object.getPrototypeOf(Model)).call(this, {
			messages: [],
			data: ''
		}));
	}

	/**
  * Добавляет новое сообщение к состоянию модели
  * и генерирует событие message-added
  * @param {String} text - текст сообщение
  * @return {Model} Возвращает текущий экземпляр класса
  */


	_createClass(Model, [{
		key: 'addMessage',
		value: function addMessage(text) {
			var messages = this.state.messages || [];

			messages.push(text);

			this.changeState({
				messages: messages
			});
			this.fire('message-added', text);

			return this;
		}

		/**
   * Изменяет поле data в состоянии модели
   * и генерирует событие data-changed
   * @param  {String} data - новое значение поля data
   * @return {Model} Возвращает текущий экземпляр класса
   */

	}, {
		key: 'changeData',
		value: function changeData(data) {
			this.changeState({
				data: data
			});
			this.fire('data-changed', data);

			return this;
		}
	}]);

	return Model;
}(_fw2.default.Model);

// Возвращаем новый экземпляр модели


exports.default = new Model();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.Model = __webpack_require__(6);
module.exports.View = __webpack_require__(7);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* Abstract class */
/* eslint-disable class-methods-use-this, no-unused-vars */
var AbstractClassError = __webpack_require__(3);

/**
 * Класс реализует механизма подписки на события и рассылки данных между подписчиками.
 * @abstract
 * @class
 */

var EventDispatcher = function () {

	/**
  * Создаёт экземпляр EventDispatcher
  * @constructs
  */
	function EventDispatcher() {
		_classCallCheck(this, EventDispatcher);

		if (this.constructor === EventDispatcher) {
			throw new AbstractClassError('EventDispatcher');
		}

		this._listeners = {};
	}

	/**
  * Подписывает функцию обратного вызова на события определённого типа,
  * если она не была подписана ранее
  * @param  {String} type - тип события
  * @param  {Function} callback - функция обратного вызова
  * @param  {Boolean} greatPriority - если является true —
  * функция обратного вызова добавляется в начало очереди
  * @return {EventDispatcher} Возвращает текущий экземпляр класса
  */


	_createClass(EventDispatcher, [{
		key: 'on',
		value: function on(type, callback) {
			var greatPriority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

			if (typeof callback === 'function') {
				var callbacks = this._listeners[type];

				if (!Array.isArray(callbacks)) {
					callbacks = [];
					this._listeners[type] = callbacks;
				}

				var index = callbacks.indexOf(callback);

				if (index < 0) {
					if (greatPriority) {
						callbacks.unshift(callback);
					} else {
						callbacks.push(callback);
					}
				}
			}

			return this;
		}

		/**
   * Отписывает функцию обратного вызова от событий определённого типа,
   * @param  {String} type - тип события
   * @param  {Function} callback - функция обратного вызова
   * @return {EventDispatcher} Возвращает текущий экземпляр класса
   */

	}, {
		key: 'off',
		value: function off(type, callback) {
			var callbacks = this._listeners[type];

			if (Array.isArray(callbacks)) {
				var index = callbacks.indexOf(callback);

				if (index >= 0) {
					callbacks.splice(index, 1);
				}
			}

			return this;
		}

		/**
   * Рассылает данные между всему функциями обратного вызова,
   * подписанными на событие определённого типа
   * @param  {String} type - тип события
   * @param  {any} payload - данные для рассылки
   * @return {EventDispatcher} Возвращает текущий экземпляр класса
   */

	}, {
		key: 'fire',
		value: function fire(type, payload) {
			var callbacks = this._listeners[type];

			if (Array.isArray(callbacks)) {
				callbacks.forEach(function (callback) {
					return callback(payload);
				});
			}

			return this;
		}
	}]);

	return EventDispatcher;
}();

module.exports = EventDispatcher;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Класс ошибки создания абстракного класса
 * @class
 */
var AbstractClassError =

/**
 * Создаёт экземпляр AbstractClassError
 * @constructs
 */
function AbstractClassError(className) {
	_classCallCheck(this, AbstractClassError);

	throw new Error("\u041F\u043E\u043F\u044B\u0442\u043A\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440\u0430 \u0430\u0431\u0441\u0442\u0440\u0430\u043A\u0442\u043D\u043E\u0433\u043E \u043A\u043B\u0430\u0441\u0441\u0430 " + className);
};

module.exports = AbstractClassError;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _View = __webpack_require__(5);

var _View2 = _interopRequireDefault(_View);

var _Model = __webpack_require__(0);

var _Model2 = _interopRequireDefault(_Model);

var _Controller = __webpack_require__(9);

var _Controller2 = _interopRequireDefault(_Controller);

var _sendToServer = __webpack_require__(10);

var _sendToServer2 = _interopRequireDefault(_sendToServer);

var _$ = __webpack_require__(11);

var _$2 = _interopRequireDefault(_$);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initLog() {
	var $log = (0, _$2.default)('.log');

	// Функция логирования
	function log(data) {
		$log.innerHTML += data;
	}

	// Логирование модели

	// Старое состояние
	var oldState = JSON.stringify(_Model2.default.state);

	_Model2.default.on('change', function (state) {
		var newState = JSON.stringify(state);
		var html = ['<p><b>В моделе изменились данные</b></p>', '<p>+ Старое состояние</p>', '<pre>' + oldState + '</pre>', '<p>+ Новое состояние</p>', '<pre>' + newState + '</pre>'].join('');

		log(html);

		oldState = newState;
	});

	// Логирование представления
	_View2.default.on('submit', function (data) {
		var html = ['<p><b>Представление сгенерировало событие<br>отправки формы</b></p>', '<p>+ Переданные данные</p>', '<pre>' + data + '</pre>'].join('');

		log(html);
	});
}

initLog();

// Функция отправки данных на сервер
async function send(data) {
	var message = void 0;

	try {
		message = await (0, _sendToServer2.default)(data);
	} catch (e) {
		message = e.message;
	}

	_Controller2.default.addMessage(message);
}

// Прикрепляет представление
_View2.default.mount(document);

// Подписываемся на событие отправки формы
_View2.default.on('submit', function (data) {
	return _Controller2.default.changeData(data);
});

// Метод вынесен из модели для того, чтобы показать как работает отправка событий
// и вызов методов контроллера в методе send
_Model2.default.on('data-changed', function (data) {
	return send(data);
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fw = __webpack_require__(1);

var _fw2 = _interopRequireDefault(_fw);

var _Model = __webpack_require__(0);

var _Model2 = _interopRequireDefault(_Model);

var _$ = __webpack_require__(11);

var _$2 = _interopRequireDefault(_$);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Класс для работы с представлением,
 * наследует обстрактный класс fw.View
 * @class
 * @extends fw.View
 */
var View = function (_fw$View) {
	_inherits(View, _fw$View);

	/**
  * Создаёт экземпляр View
  * @constructs
  */
	function View() {
		_classCallCheck(this, View);

		return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this, _Model2.default));
	}

	/**
  * Запускает инициализацию представления
  * @param {target} target - родительский HTML элемент
  */


	_createClass(View, [{
		key: 'init',
		value: function init(target) {
			var _this2 = this;

			this._$apply = (0, _$2.default)('.view-stub__apply', target);
			this._$input = (0, _$2.default)('.view-stub__input', target);
			this._$label = (0, _$2.default)('.view-stub__label', target);

			this._$apply.addEventListener('click', function () {
				var data = _this2._$input.value;

				_this2.fire('submit', data);
				_this2._$input.value = '';
			});

			this.model.on('message-added', function () {
				return _this2.renderMessages();
			});
		}

		/**
   * Запускает отрисовку представления
   */

	}, {
		key: 'render',
		value: function render() {
			this.renderMessages();
		}

		/**
   * Запускает отрисовку списка сообщений
   */

	}, {
		key: 'renderMessages',
		value: function renderMessages() {
			var state = this.model.state;
			this._$label.innerHTML = '<p>' + state.messages.join('</p><p>') + '</p>';
		}
	}]);

	return View;
}(_fw2.default.View);

exports.default = new View(_Model2.default);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventDispatcher = __webpack_require__(2);

/**
 * Класс реализует модель для хранения и обработки входящих данных
 * @class
 * @extends EventDispatcher
 */

var Model = function (_EventDispatcher) {
	_inherits(Model, _EventDispatcher);

	/**
  * Создаёт экземпляр Model
  * @param {Object} - внутреннее состояние модели
  * @constructs
  */
	function Model(state) {
		_classCallCheck(this, Model);

		var _this = _possibleConstructorReturn(this, (Model.__proto__ || Object.getPrototypeOf(Model)).call(this));

		_this._state = Object.assign({}, state);
		return _this;
	}

	/**
  * Добавляет переданные данные к состоянию модели
  * @param  {Object} data - полученные данные
  * @return {Object} Возвращает изменённое состояние модели
  */


	_createClass(Model, [{
		key: 'changeState',
		value: function changeState(data) {
			Object.assign(this._state, data);
			this.fire('change', this._state);

			return this._state;
		}

		/**
   * Возвращает внутреннее состояние модели
   * @readonly
   * @return {Object}
   */

	}, {
		key: 'state',
		get: function get() {
			return this._state;
		}
	}]);

	return Model;
}(EventDispatcher);

module.exports = Model;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Abstract class */
/* eslint-disable class-methods-use-this, no-unused-vars */
var EventDispatcher = __webpack_require__(2);
var AbstractClassError = __webpack_require__(3);
var AbstractMethodError = __webpack_require__(8);

/**
 * Абстрактный класс для работы с представлением
 * и отображения данных, переданных моделью
 * @abstract
 * @class
 * @extends EventDispatcher
 */

var View = function (_EventDispatcher) {
	_inherits(View, _EventDispatcher);

	/**
  * Создаёт экземпляр View
  * @param {Model} - модель данных
  * @constructs
  */
	function View(model) {
		_classCallCheck(this, View);

		var _this = _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this));

		if (_this.constructor === View) {
			throw new AbstractClassError('View');
		}

		_this._model = model;
		_this._target = null;
		return _this;
	}

	/**
  * Устанавливает родительский HTML элемент,
  * после чего запускает инициализацию и отрисовку представления
  * @param  {target} target - родительский HTML элемент
  * @return {View} Возвращает текущий экземпляр класса
  */


	_createClass(View, [{
		key: 'mount',
		value: function mount(target) {
			this._target = target;
			this.init(target);
			this.render();

			return this;
		}

		/**
   * Запускает инициализацию представления
   * @abstract
   * @param {target} target - родительский HTML элемент
   */

	}, {
		key: 'init',
		value: function init(target) {
			throw new AbstractMethodError('View', 'init');
		}

		/**
   * Запускает отрисовку представления
   * @abstract
   */

	}, {
		key: 'render',
		value: function render() {
			throw new AbstractMethodError('View', 'render');
		}

		/**
   * Возвращает привязанную модель
   * @readonly
   * @return {Model}
   */

	}, {
		key: 'model',
		get: function get() {
			return this._model;
		}
	}]);

	return View;
}(EventDispatcher);

// Возвращаем новый экземпляр представления


module.exports = View;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Класс ошибки вызова абстрактного метода
 * @class
 */
var AbstractMethodError =

/**
 * Создаёт экземпляр AbstractMethodError
 * @constructs
 */
function AbstractMethodError(className, methodName) {
	_classCallCheck(this, AbstractMethodError);

	throw new Error("\u041D\u0435 \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D \u043C\u0435\u0442\u043E\u0434 " + methodName + " \u043A\u043B\u0430\u0441\u0441\u0430 " + className);
};

module.exports = AbstractMethodError;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Model = __webpack_require__(0);

var _Model2 = _interopRequireDefault(_Model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Методы, которые может выполнить пользователь
exports.default = {
	// Добавить сообщение
	addMessage: function addMessage(text) {
		_Model2.default.addMessage(text);
	},


	// Изменить данные
	changeData: function changeData(data) {
		if (data) {
			_Model2.default.changeData(data);
		} else {
			_Model2.default.addMessage('Заполните форму');
		}
	}
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

// Отправка данных на сервер
exports.default = function (data) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			if (Math.random() > .3) {
				resolve("\u0421\u0435\u0440\u0432\u0435\u0440 \u043F\u0440\u0438\u043D\u044F\u043B \u0434\u0430\u043D\u043D\u044B\u0435 \xAB" + data + "\xBB");
			} else {
				reject(new Error("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \xAB" + data + "\xBB"));
			}
		}, 500);
	});
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Метод для работы с DOM-дереом,
 * ищет элемент по селектору
 * @param  {String} selector - селектор для поиска
 * @param  {HTMLElement} target - root элемент в котором выполнится поиск
 * @return {HTMLElement|null} Возвращает найденный элемент или null
 */
exports.default = function (selector, target) {
  return (target || document).querySelector(selector);
};

/***/ })
/******/ ]);