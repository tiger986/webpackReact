webpackJsonp([1],{

/***/ 16:
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

var _jquery = __webpack_require__(10);

var _jquery2 = _interopRequireDefault(_jquery);

var _utilFetch = __webpack_require__(17);

var _utilFetch2 = _interopRequireDefault(_utilFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var resDetail = function (_React$Component) {
	_inherits(resDetail, _React$Component);

	function resDetail(props) {
		_classCallCheck(this, resDetail);

		var _this = _possibleConstructorReturn(this, (resDetail.__proto__ || Object.getPrototypeOf(resDetail)).call(this, props));

		_this.reload = function () {
			window.location.reload();
		};

		_this.resIntroduce = function () {
			_this.setState({
				tab: "introduce"
			});
		};

		_this.resComment = function () {
			_this.setState({
				tab: "comment"
			});
		};

		_this.videoPlay = function (highPath, mediumPath, lowPath, pic) {
			var arr = [];
			if (highPath) {
				arr.push({
					label: '超清',
					file: highPath,
					width: '800',
					height: '480',
					type: 'mp4'
				});
			}
			if (mediumPath) {
				arr.push({
					label: '高清',
					file: mediumPath,
					width: '800',
					height: '480',
					type: 'mp4'
				});
			}
			if (lowPath && arr.length < 2) {
				arr.push({
					label: '标清',
					file: lowPath,
					width: '800',
					height: '480',
					type: 'mp4'
				});
			}
			jwplayer('myplayer').setup({
				flashplayer: '/jplayer/jwplayer.flash.swf',
				id: 'playerID',
				image: pic,
				width: '800',
				height: '480',
				type: "mp4",
				levels: arr,
				events: {
					onPlay: function onPlay() {},
					onPlaylistComplete: function onPlaylistComplete() {}
				}
			});
		};

		_this.audioPlay = function (pic, lowPath) {
			jwplayer('myplayer').setup({
				flashplayer: '/jplayer/jwplayer.flash.swf',
				id: 'playerID',
				image: pic,
				width: '800',
				height: '480',
				type: "mp3",
				file: lowPath,
				events: {
					onPlay: function onPlay() {
						(0, _jquery2.default)(".jwpreview").css('background-image', 'url("/images/resource/mp3bg.jpg")');
					},
					onPlaylistComplete: function onPlaylistComplete() {}
				}
			});
		};

		_this.state = {
			resPlayer: [_react2.default.createElement("span", null)],
			tab: "introduce",
			resMain: [_react2.default.createElement("span", null)],
			resComment: [_react2.default.createElement("span", null)],
			resouceFetchBody: {},
			resourceList: [_react2.default.createElement("span", null)],
			fullScreenHref: ""
		};
		return _this;
	}

	_createClass(resDetail, [{
		key: "getDetail",
		value: function getDetail(resId, userId) {
			var detailUrl = "/api/resource/getResDetail";
			var detailHeaders = { "Accept": "application/json", "Content-Type": "application/json" };
			var detailBody = JSON.stringify({ id: resId, userId: userId });
			(0, _utilFetch2.default)(detailUrl, "POST", "", detailHeaders, detailBody, function (res) {
				console.log(res);
				var resPlay = void 0;
				var resPath = void 0;
				if (res.data.icontype == 0) {
					resPlay = _react2.default.createElement("div", { id: "myplayer" });
				} else if (res.data.icontype == 1) {
					resPath = "http://dev2.3.zuren8.com" + res.data.resourcePath;
					resPlay = _react2.default.createElement("iframe", { src: resPath });
				} else if (res.data.icontype == 2) {
					resPlay = _react2.default.createElement("div", { id: "myplayer" });
				} else {
					resPath = "http://dev2.3.zuren8.com" + res.data.resourcePath;
					var bg = { width: 800, height: 480, backgroundImage: "url(" + resPath + ")", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "contain" };
					resPlay = _react2.default.createElement("div", { style: bg });
				}

				var resSize = Math.ceil(res.data.size);
				var resDescribe = res.data.resourceIntro || "暂无资源描述内容…";
				var resMa = _react2.default.createElement(
					"div",
					{ className: "resMain" },
					_react2.default.createElement(
						"div",
						{ className: "resMain_explain" },
						"\u8D44\u6E90\u8BF4\u660E"
					),
					_react2.default.createElement(
						"div",
						{ className: "resMain_explain_con" },
						_react2.default.createElement(
							"p",
							{ className: "resMain_explain_con_title" },
							res.data.resourceTitle
						),
						_react2.default.createElement(
							"p",
							{ className: "resMain_explain_con_download" },
							"\u4E0B\u8F7D\u8D44\u6E90"
						),
						_react2.default.createElement(
							"p",
							{ className: "resMain_explain_con_collect havea" },
							"\u6536\u85CF\u8D44\u6E90"
						)
					),
					_react2.default.createElement(
						"div",
						{ className: "resMain_explain_con" },
						_react2.default.createElement(
							"p",
							{ className: "resMain_explain_con_grade" },
							res.data.gradeName
						),
						_react2.default.createElement(
							"p",
							{ className: "resMain_explain_con_subject" },
							res.data.subjectName
						)
					),
					_react2.default.createElement(
						"div",
						{ className: "resMain_explain_con" },
						_react2.default.createElement(
							"p",
							{ className: "resMain_explain_con_form" },
							"\u6587\u4EF6\u683C\u5F0F : ",
							res.data.resourceFormat
						),
						_react2.default.createElement(
							"p",
							{ className: "resMain_explain_con_size" },
							"\u6587\u4EF6\u5927\u5C0F : ",
							resSize,
							"Mb"
						),
						_react2.default.createElement(
							"p",
							{ className: "resMain_explain_con_time" },
							"\u4E0A\u4F20\u65F6\u95F4 : ",
							res.data.created_at
						),
						_react2.default.createElement(
							"p",
							{ className: "resMain_explain_con_uploader" },
							"\u4E0A\u4F20\u8005 : ",
							res.data.realname
						)
					),
					_react2.default.createElement(
						"div",
						{ className: "resMain_explain_con" },
						_react2.default.createElement(
							"p",
							{ className: "resMain_explain_con_browseNum" },
							"\u6D4F\u89C8 : ",
							res.data.resourceView
						),
						_react2.default.createElement(
							"p",
							{ className: "resMain_explain_con_downloadNum" },
							"\u4E0B\u8F7D : ",
							_react2.default.createElement(
								"span",
								null,
								res.data.resourceDownload
							)
						),
						_react2.default.createElement(
							"p",
							{ className: "resMain_explain_con_collectNum" },
							"\u6536\u85CF : ",
							_react2.default.createElement(
								"span",
								null,
								res.data.resourceFav
							)
						)
					),
					_react2.default.createElement(
						"div",
						{ className: "resMain_describe" },
						"\u8D44\u6E90\u63CF\u8FF0"
					),
					_react2.default.createElement(
						"div",
						{ className: "resMain_describe_con" },
						resDescribe
					)
				);

				var thisGrade = res.data.resourceGrade;
				var thisSubject = res.data.resourceSubject;
				var thisType = res.data.resourceType;

				this.setState({
					resPlayer: resPlay,
					resMain: resMa,
					resouceFetchBody: { pageNumber: 1,
						pageSize: 10,
						isexpand: 1,
						resourceGrade: thisGrade,
						resourceSubject: thisSubject,
						resourceEdition: "",
						resourceChapter: "",
						resourceChapterNode: [],
						resourceType: thisType,
						resourceTitle: "",
						orderBy: "resourceView" },
					fullScreenHref: resPath
				});

				if (res.data.icontype == 0) {
					this.videoPlay(res.data.courseHighPath, res.data.courseMediumPath, res.data.courseLowPath, "http://dev2.3.zuren8.com" + res.data.resourcePic);
				} else if (res.data.icontype == 2) {
					this.audioPlay("http://dev2.3.zuren8.com" + res.data.resourcePic, res.data.courseLowPath);
				}

				this.getAbout();
			}.bind(this));
		}
	}, {
		key: "getComment",
		value: function getComment() {
			this.setState({
				resComment: [_react2.default.createElement(
					"div",
					{ className: "resComment_no" },
					"\u6682\u65E0\u8BC4\u8BBA\u5185\u5BB9\u2026"
				)]
			});
		}
	}, {
		key: "getAbout",
		value: function getAbout() {
			var resouceUrl = "/api/resource/getResource";
			var resouceBody = JSON.stringify(this.state.resouceFetchBody);
			var resourceHeaders = { "Accept": "application/json", "Content-Type": "application/json" };
			(0, _utilFetch2.default)(resouceUrl, "POST", "", resourceHeaders, resouceBody, function (res) {
				var _this2 = this;

				if (res.data.length > 1) {
					var resourceLis = res.data.map(function (val) {
						if (val.id != _this2.props.params.id) {
							var imgSrc = "http://dev2.3.zuren8.com" + val.coursePic;
							var resUrl = "resource/resDetail/" + val.id;
							return _react2.default.createElement(
								"div",
								{ className: "resBox" },
								_react2.default.createElement("div", { className: "resBox_sideLine" }),
								_react2.default.createElement(
									"div",
									{ className: "resBox_img" },
									_react2.default.createElement("img", { src: imgSrc })
								),
								_react2.default.createElement(
									"div",
									{ className: "resBox_con" },
									_react2.default.createElement(
										_reactRouter.Link,
										{ className: "resBox_con_title", to: resUrl, onClick: _this2.reload },
										val.courseTitle
									),
									_react2.default.createElement(
										"div",
										{ className: "resBox_con_time" },
										val.created_at
									)
								)
							);
						}
					});

					this.setState({
						resourceList: resourceLis
					});
				} else {
					this.setState({
						resourceList: [_react2.default.createElement(
							"div",
							{ className: "noResource" },
							"\u6682\u65E0\u63A8\u8350\u8D44\u6E90\u2026"
						)]
					});
					return false;
				}
			}.bind(this));
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "resDetailBox" },
				_react2.default.createElement(
					"div",
					{ className: "detailHead" },
					_react2.default.createElement(
						"span",
						null,
						"\u8D44\u6E90\u4E2D\u5FC3 > \u8D44\u6E90\u8BE6\u60C5"
					),
					_react2.default.createElement(
						"a",
						{ className: this.state.fullScreenHref ? "" : "hide", href: this.state.fullScreenHref, target: "_blank" },
						"\u5168\u5C4F\u67E5\u770B"
					)
				),
				_react2.default.createElement(
					"div",
					{ className: "detailContent" },
					_react2.default.createElement(
						"div",
						{ className: "detailContent_left" },
						_react2.default.createElement(
							"div",
							{ className: "detailContent_left_up" },
							_react2.default.createElement(
								"div",
								{ className: "detailContent_left_up_play" },
								this.state.resPlayer
							)
						),
						_react2.default.createElement(
							"div",
							{ className: "detailContent_left_down" },
							_react2.default.createElement(
								"div",
								{ className: "detailContent_left_down_head" },
								_react2.default.createElement(
									"div",
									{ className: this.state.tab == "introduce" ? "detailContent_left_down_head_introduce active" : "detailContent_left_down_head_introduce", onClick: this.resIntroduce.bind(this) },
									"\u8D44\u6E90\u4ECB\u7ECD"
								),
								_react2.default.createElement(
									"div",
									{ className: this.state.tab == "comment" ? "detailContent_left_down_head_comment active" : "detailContent_left_down_head_comment", onClick: this.resComment.bind(this) },
									"\u7528\u6237\u8BC4\u8BBA"
								),
								_react2.default.createElement(
									"div",
									{ className: "detailContent_left_down_head_type" },
									_react2.default.createElement(
										"span",
										null,
										"\u7C7B\u578B"
									),
									_react2.default.createElement("input", { type: "checkbox" }),
									_react2.default.createElement(
										"span",
										null,
										"\u79C1\u6709\u8D44\u6E90"
									)
								)
							),
							_react2.default.createElement(
								"div",
								{ className: this.state.tab == "introduce" ? "detailContent_left_down_introduceCon show" : "detailContent_left_down_introduceCon hide" },
								this.state.resMain
							),
							_react2.default.createElement(
								"div",
								{ className: this.state.tab == "comment" ? "detailContent_left_down_commentCon show" : "detailContent_left_down_commentCon hide" },
								_react2.default.createElement(
									"div",
									{ className: "detailContent_left_down_commentCon_do" },
									_react2.default.createElement("textarea", null),
									_react2.default.createElement(
										"p",
										null,
										"\u53D1\u5E03"
									)
								),
								_react2.default.createElement(
									"div",
									{ className: "detailContent_left_down_commentCon_list" },
									this.state.resComment
								)
							)
						)
					),
					_react2.default.createElement(
						"div",
						{ className: "detailContent_right" },
						_react2.default.createElement(
							"div",
							{ className: "detailContent_right_head" },
							"\u76F8\u5173\u8D44\u6E90\u63A8\u8350"
						),
						_react2.default.createElement(
							"div",
							{ className: "detailContent_right_con" },
							this.state.resourceList
						)
					)
				)
			);
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			this.getDetail(this.props.params.id, 108);
			this.getComment();
		}
	}]);

	return resDetail;
}(_react2.default.Component);

exports.default = resDetail;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\tiger\\Desktop\\edu_anxu\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "resDetail.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\tiger\\Desktop\\edu_anxu\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\tiger\\Desktop\\edu_anxu\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var fetchData = function fetchData(url, method, mode, headers, body, callback) {
  fetch(url, { method: method, mode: mode, headers: headers, body: body }).then(function (response) {
    return response.json();
  }).then(function (res) {
    callback(res);
  }).catch(function (err) {
    console.log(err);
  });
};

exports.default = fetchData;

/*需要传参时要同时传入headers:
1.参数为对象时要JSON.stringify(参数),同时headers为{"Accept": "application/json", "Content-Type": "application/json"}
2.参数为字符串时,headers为{"Content-type": "application/x-www-form-urlencoded;charset=UTF-8}*/

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\tiger\\Desktop\\edu_anxu\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "util.fetch.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ })

});