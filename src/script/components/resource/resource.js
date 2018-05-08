import React from "react"
import { Link } from "react-router"
import $ from "jquery"
import fetchData from "../../util/util.fetch.js"

class resource extends React.Component {
	constructor(props) {
	    super(props)	    
	    this.state = {
	    	gradeList: [<span/>],
	    	subjectList: [<span/>],
	    	typeList: [<span/>],
	    	resourceList: [<div/>],
	    	resourceNumber: 0,
	    	resouceFetchBody: {pageNumber: 1,
						       pageSize: 10,
						       isexpand: 1,
						       resourceGrade: "",
						       resourceSubject: "",
						       resourceEdition: "",
						       resourceChapter: "",
						       resourceChapterNode: [],
						       resourceType: "",
						       resourceTitle: "",
						       orderBy: "resourceView"},
	    }
	}
	
	getResource(n, e){
		let obj = this.state.resouceFetchBody
		
		if(arguments.length){
			if((typeof n) == "number"){
				let evt = window.event || e
		        let tag = evt.target || evt.srcElement;	        	                
				if(tag.className == "gradeName"){
					if(tag.id){				
						obj.resourceGrade = tag.id;								
					}else{
						obj.resourceGrade = "";
					}
					$(".gradeName").eq(n).addClass("active").siblings().removeClass("active")		
				}else if(tag.className == "subjectName"){
					if(tag.id){				
						obj.resourceSubject = tag.id;								
					}else{
						obj.resourceSubject = "";
					}			
					$(".subjectName").eq(n).addClass("active").siblings().removeClass("active")
				}else if(tag.className == "typeName"){
					if(tag.id){				
						obj.resourceType = tag.id;								
					}else{
						obj.resourceType = "";
					}			
					$(".typeName").eq(n).addClass("active").siblings().removeClass("active")
				}
			}else if(n == "search"){
				obj.resourceTitle = $(".resource_head_search_con").find("input").val()
				$(".resource_head_search_con").find("input").val("")
			}else if(n == "hot"){
				obj.orderBy = "resourceView"
				$(".hot").addClass("active").siblings().removeClass("active")
			}else if(n == "new"){
				obj.orderBy = "created_at"
				$(".new").addClass("active").siblings().removeClass("active")
			}
		}
		
		this.setState({
			resouceFetchBody: obj
		})
		
		let resouceUrl = "/api/resource/getResource"
		let resouceBody = JSON.stringify(this.state.resouceFetchBody)
		let resourceHeaders = {"Accept": "application/json", "Content-Type": "application/json"}		
		fetchData(resouceUrl, "POST", "", resourceHeaders, resouceBody, function (res) {
		    if(res.data){		    			    
			    let resourceNum = res.data.length
			    let resourceLis = res.data.map(val=>{
			    	let imgSrc = "http://dev2.3.zuren8.com" + val.coursePic
			    	let resUrl = "resource/resDetail/" + val.id
			    	return (<div className = "resBox">
			    		<div className = "resBox_sideLine"></div>
			    		<div className = "resBox_img">
			    			<img src = { imgSrc } />
			    		</div>
			    		<div className = "resBox_con">
			    			<Link className = "resBox_con_title" to = { resUrl } target = "_blank">
			    				{ val.courseTitle }		    			
			    			</Link>
			    			<div className = "resBox_con_nature">
			    				<span>{ val.gradeName }</span>
			    				<span>{ val.subjectName }</span>
			    				<span>{ val.editionName }</span>
			    			</div>
			    			<div className = "resBox_con_info">
			    				<p className = "resBox_con_info_uploader">
			    					<span>上传者 : </span>
			    					<span>{ val.username }</span>
			    				</p>
			    				<p className = "resBox_con_info_time">
			    					<span>上传时间 : </span>
			    					<span>{ val.created_at }</span>
			    				</p>
			    				<p className = "resBox_con_info_num">
			    					<span>浏览 : </span>
			    					<span>{ val.resourceView }</span>
			    				</p>
			    				<p className = "resBox_con_info_num">
			    					<span>下载 : </span>
			    					<span>{ val.resourceDownload }</span>
			    				</p>
			    				<p className = "resBox_con_info_num">
			    					<span>收藏 : </span>
			    					<span>{ val.resourceFav }</span>
			    				</p>
			    			</div>
			    		</div>
			    	</div>)
			    })		    
			    this.setState({
			        resourceList: resourceLis,
			        resourceNum: resourceNum
			    })
			}else{
				let obj2 = this.state.resouceFetchBody
				obj2.resourceTitle = ""				
				this.setState({
		        	resourceList: [<div className = "noResource">暂无相关资源…</div>],
		        	resourceNum: 0,
		        	resouceFetchBody: obj2,
		    	})
		    	return false
			}
		}.bind(this))
	}
		
		
	render() {
		return (
			<div className = "resourceBox">
			
				<div className = "resource_head">
					<div className = "resource_head_search">
						<div className = "resource_head_search_title">
							资源搜索
						</div>
						<div className = "resource_head_search_con">
							<input type = "text" />
							<p onClick = { this.getResource.bind(this, "search") }>搜索</p>
						</div>
					</div>
					<div className = "resource_head_upres">
						<Link to="/resource/uploadRes">上传资源</Link>
						<p>欢迎上传并分享您的教学资源</p>
					</div>
				</div>
				
				<div className = "resource_content">
					<div className = "resource_content_left">
						<div className = "resource_content_left_title">资源目录</div>
						<div className = "resource_content_left_catalog">
							<p>一年级</p>
							<p>二年级</p>
							<p>三年级</p>
							<p>四年级</p>
							<p>五年级</p>
							<p>六年级</p>
						</div>
					</div>
					<div className = "resource_content_right">
						<div className = "resource_content_right_classify">
							<div className = "resource_content_right_classify_grade box">
								<div className = "resource_content_right_classify_grade_title box_title">年级</div>
								<div className = "resource_content_right_classify_grade_specific box_specific">
									<span className = "gradeName active" onClick = { this.getResource.bind(this, 0) }>全部</span>
									{ this.state.gradeList }
								</div>
							</div>
							<div className = "resource_content_right_classify_subject box">
								<div className = "resource_content_right_classify_subject_title box_title">科目</div>
								<div className = "resource_content_right_classify_subject_specific box_specific">
									<span className = "subjectName active" onClick = { this.getResource.bind(this, 0) }>全部</span>
									{ this.state.subjectList }
								</div>
							</div>
						</div>
						<div className = "resource_content_right_con">
							<div className = "resource_content_right_con_head">
								<div className = "resource_content_right_con_head_tab">
									<span className = "typeName active" onClick = { this.getResource.bind(this, 0) }>全部</span>
									{ this.state.typeList }
								</div>
								<div className = "resource_content_right_con_head_result">
									共{ this.state.resourceNum }个结果
								</div>
								<div className = "resource_content_right_con_head_cut">
									<span className = "hot active" onClick = { this.getResource.bind(this, "hot") }>热门</span>
									-
									<span className = "new" onClick = { this.getResource.bind(this, "new") }>最新</span>
								</div>
							</div>
							<div className = "resource_content_right_con_res">
								{ this.state.resourceList }
							</div>
						</div>
					</div>
				</div>
				
			</div>
		)
	}	
	
	componentDidMount() {		
        let selectsUrl = "/api/resource/getResSelects"
		fetchData(selectsUrl, "POST", "", {}, "", function (res) {
		    let gradeLis = res.data.grade.map((val, index) => {
		    	return (<span className = "gradeName" id = { val.id } onClick = { this.getResource.bind(this, index+1) }>{ val.gradeName }</span>)
		    })
		    let subjectLis = res.data.subject.map((val, index) => {
		    	return (<span className = "subjectName" id = { val.id } onClick = { this.getResource.bind(this, index+1) }>{ val.subjectName }</span>)
		    })
		    let typeLis = res.data.type.map((val, index) => {
		    	return (<span className = "typeName" id = { val.id } onClick = { this.getResource.bind(this, index+1) }>{ val.text }</span>)
		    })
		    this.setState({
		        gradeList: gradeLis,
		        subjectList: subjectLis,
		        typeList: typeLis
		    })
		}.bind(this))
		
		this.getResource()
    }	
}

export default resource 