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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _View = __webpack_require__(2);

var _View2 = _interopRequireDefault(_View);

var _Model = __webpack_require__(3);

var _Model2 = _interopRequireDefault(_Model);

var _Controller = __webpack_require__(7);

var _Controller2 = _interopRequireDefault(_Controller);

var _sendToServer = __webpack_require__(1);

var _sendToServer2 = _interopRequireDefault(_sendToServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function send(data) {
	try {
		var message = await (0, _sendToServer2.default)(data);
		_Controller2.default.addMessage(message);
	} catch (e) {
		_Controller2.default.addMessage(e.message);
	}
}

_View2.default.mount(document);
_View2.default.on('submit', function (data) {
	return _Controller2.default.changeData(data);
});
_Model2.default.on('data-changed', function (data) {
	return send(data);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fw = __webpack_require__(4);

var _fw2 = _interopRequireDefault(_fw);

var _Model = __webpack_require__(3);

var _Model2 = _interopRequireDefault(_Model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var $ = function $(selector, target) {
	return (target || document).querySelector(selector);
};

var View = function (_fw$View) {
	_inherits(View, _fw$View);

	function View(model) {
		_classCallCheck(this, View);

		return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this, model));
	}

	_createClass(View, [{
		key: 'init',
		value: function init(target) {
			var _this2 = this;

			this._$apply = $('.view-stub__apply', target);
			this._$input = $('.view-stub__input', target);
			this._$label = $('.view-stub__label', target);

			this._$apply.addEventListener('click', function () {
				var data = _this2._$input.value;

				_this2.fire('submit', data);
				_this2._$input.value = '';
			});

			this.model.on('message-added', function () {
				return _this2.renderMessages();
			});
		}
	}, {
		key: 'render',
		value: function render() {
			this.renderMessages();
		}
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fw = __webpack_require__(4);

var _fw2 = _interopRequireDefault(_fw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Model = function (_fw$Model) {
	_inherits(Model, _fw$Model);

	function Model(state) {
		_classCallCheck(this, Model);

		return _possibleConstructorReturn(this, (Model.__proto__ || Object.getPrototypeOf(Model)).call(this, state));
	}

	_createClass(Model, [{
		key: 'addMessage',
		value: function addMessage(text) {
			var messages = this.state.messages || [];

			messages.push(text);

			this.changeState({
				messages: messages
			});
			this.fire('message-added', text);
		}
	}, {
		key: 'changeData',
		value: function changeData(data) {
			this.changeState({
				data: data
			});
			this.fire('data-changed', data);
		}
	}]);

	return Model;
}(_fw2.default.Model);

exports.default = new Model({
	messages: [],
	data: ''
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.Model = __webpack_require__(5);
module.exports.View = __webpack_require__(6);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventDispatcher = __webpack_require__(10);

var Model = function (_EventDispatcher) {
	_inherits(Model, _EventDispatcher);

	function Model(state) {
		_classCallCheck(this, Model);

		var _this = _possibleConstructorReturn(this, (Model.__proto__ || Object.getPrototypeOf(Model)).call(this));

		_this._state = state;
		return _this;
	}

	_createClass(Model, [{
		key: 'changeState',
		value: function changeState(data) {
			Object.assign(this._state, data);
			this.fire('change', this._state);
		}
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Abstract class */
/* eslint-disable class-methods-use-this, no-unused-vars */
var EventDispatcher = __webpack_require__(10);

var View = function (_EventDispatcher) {
	_inherits(View, _EventDispatcher);

	function View(model) {
		_classCallCheck(this, View);

		var _this = _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this));

		_this._model = model;
		_this._target = null;
		return _this;
	}

	_createClass(View, [{
		key: 'mount',
		value: function mount(target) {
			this._target = target;
			this.init(target);
			this.render();
		}
	}, {
		key: 'init',
		value: function init(target) {
			// abstract
		}
	}, {
		key: 'render',
		value: function render() {
			// abstract
		}
	}, {
		key: 'model',
		get: function get() {
			return this._model;
		}
	}]);

	return View;
}(EventDispatcher);

module.exports = View;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Model = __webpack_require__(3);

var _Model2 = _interopRequireDefault(_Model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	addMessage: function addMessage(text) {
		_Model2.default.addMessage(text);
	},
	changeData: function changeData(data) {
		if (data) {
			_Model2.default.changeData(data);
		} else {
			_Model2.default.addMessage('Заполните форму');
		}
	}
};

/***/ }),
/* 8 */,
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* Abstract class */
/* eslint-disable class-methods-use-this, no-unused-vars */
var AbstractClassError = __webpack_require__(9);

/**
 * Класс реализует шаблон проектирования наблюдатель —
 * механизма подписки на события и рассылки данных между подписчиками.
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
  * Подписывает функцию обратного вызова, если она не была подписана ранее
  * @param  {Function} callback - функция обратного вызова
  * @return {EventDispatcher} Возвращает текущий экземпляр класса
  */


	_createClass(EventDispatcher, [{
		key: 'on',
		value: function on(type, callback) {
			if (typeof callback === 'function') {
				var callbacks = this._listeners[type];

				if (!Array.isArray(callbacks)) {
					callbacks = [];
					this._listeners[type] = callbacks;
				}

				var index = callbacks.indexOf(callback);

				if (index < 0) {
					callbacks.push(callback);
				}
			}

			return this;
		}

		/**
   * Отписывает функцию обратного вызова от событий
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
   * Рассылает данные между всему функциями обратного вызова
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

/***/ })
/******/ ]);