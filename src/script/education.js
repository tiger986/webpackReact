require("../style/education.scss")

import React from "react"
import ReactDOM from "react-dom"

import { Router, Route, IndexRoute, IndexRedirect, browserHistory, hashHistory } from "react-router"

import { Provider } from "react-redux"
import { store } from "./redux/store"

import layoutHome from "./components/layout/layoutHome"
import teacherHomePage from "./components/member/teacherHomePage"

const resource  = (location, cb) => {
	require.ensure([], require => {
		cb(null, require("./components/resource/resource").default)
	}, "resource")
}
const teacherCourseList = (location, cb) => {
	require.ensure([], require => {
		cb(null, require("./components/teacherCourse/teacherCourseList").default)
	}, "teacherCourseList")
}
const evaluateManageTea  = (location, cb) => {
	require.ensure([], require => {
		cb(null, require("./components/evaluateManageTea/evaluateManageTea").default)
	}, "evaluateManageTea")
}
const community = (location, cb) => {
	require.ensure([], require => {
		cb(null, require("./components/community/community").default)
	}, "community")
}
const uploadRes  = (location, cb) => {
	require.ensure([], require => {
		cb(null, require("./components/resource/uploadRes").default)
	}, "uploadRes")
}
const resDetail = (location, cb) => {
	require.ensure([], require => {
		cb(null, require("./components/resource/resDetail").default)
	}, "resDetail")
}

ReactDOM.render(
		<Provider store={store}>
    		<Router history={hashHistory}>
      			<Route path="/" component={layoutHome}>
        				<IndexRedirect to="/teacherHomePage"></IndexRedirect>
        				<Route path="teacherHomePage" title="教师个人主页" component={teacherHomePage}></Route>
        				<Route path="resource" title="资源列表 " getComponent={resource}></Route>
        				<Route path="teacherCourseList" title="课程中心" getComponent={teacherCourseList}></Route>
        				<Route path="evaluateManageTea" title="测评管理" getComponent={evaluateManageTea}></Route>
        				<Route path="community" title="社区首页" getComponent={community}></Route>
        				<Route path="resource/uploadRes" title="上传资源" getComponent={uploadRes}></Route>
        				<Route path="resource/resDetail/:id" title="资源详情" getComponent={resDetail}></Route>
      			</Route>
    		</Router>
  	</Provider>,
  	
  	document.getElementById("root")
)