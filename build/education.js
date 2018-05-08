/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		6: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + ({"0":"resource","1":"resDetail","2":"teacherCourseList","3":"uploadRes","4":"evaluateManageTea","5":"community"}[chunkId]||chunkId) + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
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
/******/ 	__webpack_require__.p = "/build";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = window.React;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = window.ReactRouter;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = window.ReactRedux;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\tiger\\Desktop\\edu_anxu\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\tiger\\Desktop\\edu_anxu\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = exports.mapDispatchToProps = exports.mapStateToProps = undefined;

var _redux = __webpack_require__(6);

function changer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { title: '主页' };
  var action = arguments[1];

  switch (action.type) {
    case 'SETTITLE':
      return { title: action.title };
    default:
      return state;
  }
}

// 将 Redux state 转化成 组件的 props
function mapStateToProps(state) {
  return {
    value: state.title
  };
}

// 将 Redux actions 转化成 组件的 props
function mapDispatchToProps(dispatch) {
  return {
    onChange: function onChange(action) {
      return dispatch(action);
    }
  };
}

var store = (0, _redux.createStore)(changer);

exports.mapStateToProps = mapStateToProps;
exports.mapDispatchToProps = mapDispatchToProps;
exports.store = store;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\tiger\\Desktop\\edu_anxu\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "store.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\tiger\\Desktop\\edu_anxu\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\tiger\\Desktop\\edu_anxu\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(5);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _store = __webpack_require__(3);

var _layoutHome = __webpack_require__(7);

var _layoutHome2 = _interopRequireDefault(_layoutHome);

var _teacherHomePage = __webpack_require__(8);

var _teacherHomePage2 = _interopRequireDefault(_teacherHomePage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(9);

var resource = function resource(location, cb) {
	__webpack_require__.e/* require.ensure */(0).then((function (require) {
		cb(null, __webpack_require__(11).default);
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var teacherCourseList = function teacherCourseList(location, cb) {
	__webpack_require__.e/* require.ensure */(2).then((function (require) {
		cb(null, __webpack_require__(12).default);
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var evaluateManageTea = function evaluateManageTea(location, cb) {
	__webpack_require__.e/* require.ensure */(4).then((function (require) {
		cb(null, __webpack_require__(13).default);
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var community = function community(location, cb) {
	__webpack_require__.e/* require.ensure */(5).then((function (require) {
		cb(null, __webpack_require__(14).default);
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var uploadRes = function uploadRes(location, cb) {
	__webpack_require__.e/* require.ensure */(3).then((function (require) {
		cb(null, __webpack_require__(15).default);
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var resDetail = function resDetail(location, cb) {
	__webpack_require__.e/* require.ensure */(1).then((function (require) {
		cb(null, __webpack_require__(16).default);
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

_reactDom2.default.render(_react2.default.createElement(
	_reactRedux.Provider,
	{ store: _store.store },
	_react2.default.createElement(
		_reactRouter.Router,
		{ history: _reactRouter.hashHistory },
		_react2.default.createElement(
			_reactRouter.Route,
			{ path: "/", component: _layoutHome2.default },
			_react2.default.createElement(_reactRouter.IndexRedirect, { to: "/teacherHomePage" }),
			_react2.default.createElement(_reactRouter.Route, { path: "teacherHomePage", title: "\u6559\u5E08\u4E2A\u4EBA\u4E3B\u9875", component: _teacherHomePage2.default }),
			_react2.default.createElement(_reactRouter.Route, { path: "resource", title: "\u8D44\u6E90\u5217\u8868 ", getComponent: resource }),
			_react2.default.createElement(_reactRouter.Route, { path: "teacherCourseList", title: "\u8BFE\u7A0B\u4E2D\u5FC3", getComponent: teacherCourseList }),
			_react2.default.createElement(_reactRouter.Route, { path: "evaluateManageTea", title: "\u6D4B\u8BC4\u7BA1\u7406", getComponent: evaluateManageTea }),
			_react2.default.createElement(_reactRouter.Route, { path: "community", title: "\u793E\u533A\u9996\u9875", getComponent: community }),
			_react2.default.createElement(_reactRouter.Route, { path: "resource/uploadRes", title: "\u4E0A\u4F20\u8D44\u6E90", getComponent: uploadRes }),
			_react2.default.createElement(_reactRouter.Route, { path: "resource/resDetail/:id", title: "\u8D44\u6E90\u8BE6\u60C5", getComponent: resDetail })
		)
	)
), document.getElementById("root"));

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\tiger\\Desktop\\edu_anxu\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "education.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = window.ReactDOM;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = window.Redux;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\tiger\\Desktop\\edu_anxu\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\tiger\\Desktop\\edu_anxu\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _store = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var layoutHome = function (_React$Component) {
	_inherits(layoutHome, _React$Component);

	function layoutHome(props) {
		_classCallCheck(this, layoutHome);

		return _possibleConstructorReturn(this, (layoutHome.__proto__ || Object.getPrototypeOf(layoutHome)).call(this, props));
	}

	_createClass(layoutHome, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"div",
					{ className: "headBg" },
					_react2.default.createElement(
						"div",
						{ className: "head" },
						_react2.default.createElement(
							"div",
							{ className: "head_logo" },
							_react2.default.createElement("img", { src: "http://dev2.3.zuren8.com/uploads/heads/cut1495786466.png" })
						),
						_react2.default.createElement(
							"ul",
							null,
							_react2.default.createElement(
								"li",
								{ className: "active" },
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: "/teacherHomePage", activeClassName: "active" },
									"\u4E2A\u4EBA\u4E3B\u9875",
									_react2.default.createElement("span", null)
								)
							),
							_react2.default.createElement(
								"li",
								null,
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: "/resource", activeClassName: "active" },
									"\u8D44\u6E90\u4E2D\u5FC3",
									_react2.default.createElement("span", null)
								)
							),
							_react2.default.createElement(
								"li",
								null,
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: "/teacherCourseList", activeClassName: "active" },
									"\u8BFE\u7A0B\u4E2D\u5FC3",
									_react2.default.createElement("span", null)
								)
							),
							_react2.default.createElement(
								"li",
								null,
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: "/evaluateManageTea", activeClassName: "active" },
									"\u6D4B\u8BC4\u7BA1\u7406",
									_react2.default.createElement("span", null)
								)
							),
							_react2.default.createElement(
								"li",
								null,
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: "/community", activeClassName: "active" },
									"\u95EE\u7B54\u793E\u533A",
									_react2.default.createElement("span", null)
								)
							)
						),
						_react2.default.createElement(
							"a",
							{ className: "touxiangBox" },
							_react2.default.createElement("img", { className: "touxiang", src: "http://dev2.3.zuren8.com/uploads/heads/cut1498123053.png" })
						)
					)
				),
				_react2.default.createElement(
					"div",
					{ className: "contentBox" },
					this.props.children
				),
				_react2.default.createElement(
					"div",
					{ className: "footBox" },
					_react2.default.createElement(
						"div",
						{ className: "foot" },
						_react2.default.createElement(
							"div",
							{ className: "foot_left" },
							_react2.default.createElement(
								"div",
								{ className: "foot_left_img" },
								_react2.default.createElement("img", { src: "/images/layout/logodown.png" })
							),
							_react2.default.createElement(
								"div",
								{ className: "foot_left_name" },
								"\u542F\u521B\u6559\u80B2\u4E91\u6821\u56ED\u6559\u5B66\u8D44\u6E90\u5E94\u7528\u5E73\u53F0"
							),
							_react2.default.createElement(
								"div",
								{ className: "foot_left_copyright" },
								"Copyright \xA9 2017 primecloud.cn lnc.All Rights Reserved"
							),
							_react2.default.createElement(
								"div",
								{ className: "foot_left_explain" },
								"\u542F\u521B\u5353\u8D8A \u7248\u6743\u6240\u6709"
							)
						),
						_react2.default.createElement(
							"div",
							{ className: "foot_middle" },
							_react2.default.createElement(
								"div",
								{ className: "foot_middle_title" },
								"\u5173\u4E8E\u6211\u4EEC"
							),
							_react2.default.createElement(
								"div",
								{ className: "foot_middle_link" },
								_react2.default.createElement(
									"a",
									{ href: "/aboutUs/firmintro/1", title: "\u6821\u56ED\u4ECB\u7ECD" },
									"\u6821\u56ED\u4ECB\u7ECD"
								),
								_react2.default.createElement(
									"a",
									{ href: "{{url($weibo)}}", title: "\u5B98\u65B9\u5FAE\u535A" },
									"\u5B98\u65B9\u5FAE\u535A"
								),
								_react2.default.createElement(
									"a",
									{ href: "/aboutUs/firmintro/2", title: "\u8054\u7CFB\u6211\u4EEC" },
									"\u8054\u7CFB\u6211\u4EEC"
								),
								_react2.default.createElement(
									"a",
									{ href: "/aboutUs/firmintro/4" },
									"\u7528\u6237\u534F\u8BAE"
								),
								_react2.default.createElement(
									"a",
									{ href: "/aboutUs/firmintro/3", title: "\u5E38\u89C1\u95EE\u9898" },
									"\u5E38\u89C1\u95EE\u9898"
								),
								_react2.default.createElement(
									"a",
									{ href: "/aboutUs/firmintro/5", title: "\u53CB\u60C5\u94FE\u63A5" },
									"\u53CB\u60C5\u94FE\u63A5"
								)
							)
						),
						_react2.default.createElement(
							"div",
							{ className: "foot_right" },
							_react2.default.createElement(
								"div",
								{ className: "foot_right_title" },
								"\u5B98\u65B9\u5FAE\u4FE1"
							),
							_react2.default.createElement("img", { className: "foot_right_weima", src: "/images/layout/qczyerweima.jpg" })
						)
					)
				)
			);
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			var title = this.props.routes[1].title;
			this.props.onChange({
				type: 'SETTITLE',
				title: title
			});
		}
	}, {
		key: "componentDidUpdate",
		value: function componentDidUpdate() {
			var title = this.props.routes[1].title;
			this.props.onChange({
				type: 'SETTITLE',
				title: title
			});
		}
	}]);

	return layoutHome;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(_store.mapStateToProps, _store.mapDispatchToProps)(layoutHome);

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\tiger\\Desktop\\edu_anxu\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "layoutHome.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\tiger\\Desktop\\edu_anxu\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\tiger\\Desktop\\edu_anxu\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var teacherHomePage = function (_React$Component) {
  _inherits(teacherHomePage, _React$Component);

  function teacherHomePage() {
    _classCallCheck(this, teacherHomePage);

    return _possibleConstructorReturn(this, (teacherHomePage.__proto__ || Object.getPrototypeOf(teacherHomePage)).apply(this, arguments));
  }

  _createClass(teacherHomePage, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "teacherHomePageBox" },
        "teacherHomePage\u2026\u2026"
      );
    }
  }]);

  return teacherHomePage;
}(_react2.default.Component);

exports.default = teacherHomePage;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\tiger\\Desktop\\edu_anxu\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "teacherHomePage.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = window.$;

/***/ })
/******/ ]);