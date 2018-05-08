import React from "react"

import { Link } from "react-router"
import { connect } from "react-redux"

import { mapStateToProps, mapDispatchToProps } from "../../redux/store"

class layoutHome extends React.Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
          	<div>
      	    	<div className="headBg">
					<div className="head">
						<div className="head_logo">
	           				<img src="http://dev2.3.zuren8.com/uploads/heads/cut1495786466.png" />
						</div>
						<ul>
							<li className="active">
								<Link to="/teacherHomePage" activeClassName="active">
									个人主页
									<span></span>
								</Link>										            
							</li>
							<li>
								<Link to="/resource" activeClassName="active">
									资源中心
									<span></span>
								</Link>
							</li>
							<li>
								<Link to="/teacherCourseList" activeClassName="active">
									课程中心
									<span></span>
								</Link>
							</li>
							<li>
								<Link to="/evaluateManageTea" activeClassName="active">
									测评管理
									<span></span>
								</Link>
							</li>
							<li>
								<Link to="/community" activeClassName="active">
									问答社区
									<span></span>
								</Link>
							</li>
						</ul>
						<a className="touxiangBox">
							<img className="touxiang" src="http://dev2.3.zuren8.com/uploads/heads/cut1498123053.png" />
						</a>
					</div>
				</div>
		
				<div className="contentBox">				    
	          		{this.props.children}
	        	</div>
        	
	        	<div className="footBox">
					<div className="foot">
						<div className="foot_left">
							<div className="foot_left_img">
								<img src="/images/layout/logodown.png" />
							</div>
							<div className="foot_left_name">启创教育云校园教学资源应用平台</div>
							<div className="foot_left_copyright">Copyright © 2017 primecloud.cn lnc.All Rights Reserved</div>							
							<div className="foot_left_explain">启创卓越 版权所有</div>
						</div>
						<div className="foot_middle">
							<div className="foot_middle_title">关于我们</div>
							<div className="foot_middle_link">
								<a href="/aboutUs/firmintro/1" title="校园介绍">校园介绍</a>
								<a href="{{url($weibo)}}" title="官方微博">官方微博</a>
								<a href="/aboutUs/firmintro/2" title="联系我们">联系我们</a>
								<a href="/aboutUs/firmintro/4">用户协议</a>
								<a href="/aboutUs/firmintro/3" title="常见问题">常见问题</a>
								<a href="/aboutUs/firmintro/5" title="友情链接">友情链接</a>
							</div>
						</div>
						<div className="foot_right">
							<div className="foot_right_title">官方微信</div>
							<img className="foot_right_weima" src="/images/layout/qczyerweima.jpg" />
						</div>
					</div>
				</div>

      		</div>
    	)
	}

	componentDidMount() {
		let title = this.props.routes[1].title
		this.props.onChange({
			type: 'SETTITLE',
			title: title
		})
	}
		
	componentDidUpdate() {
		let title = this.props.routes[1].title
		this.props.onChange({
			type: 'SETTITLE',
			title: title
		})
	}
}

export default connect(
  	mapStateToProps,
  	mapDispatchToProps
)(layoutHome)