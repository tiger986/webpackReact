import React from "react"
import { Link } from "react-router"
import $ from "jquery"
import fetchData from "../../util/util.fetch.js"

class resDetail extends React.Component {
	constructor (props) {
        super(props)
        this.state = {
        	resPlayer: [<span/>],
        	tab: "introduce",
        	resMain: [<span/>],
        	resComment: [<span/>],
        	resouceFetchBody: {},
			resourceList: [<span/>],
			fullScreenHref: ""
        }
    }
	
	
	getDetail(resId, userId){
		let detailUrl = "/api/resource/getResDetail"
		let detailHeaders = {"Accept": "application/json", "Content-Type": "application/json"}
		let detailBody = JSON.stringify({id: resId, userId: userId})
		fetchData(detailUrl, "POST", "", detailHeaders, detailBody, function (res) {
			console.log(res)
			let resPlay
			let resPath 
			if(res.data.icontype == 0){
				resPlay = <div id = "myplayer"></div>				                    
			}else if(res.data.icontype == 1){
				resPath = "http://dev2.3.zuren8.com" + res.data.resourcePath
				resPlay = <iframe src = { resPath }></iframe>
			}else if(res.data.icontype == 2){
				resPlay = <div id = "myplayer"></div>
			}else{
				resPath = "http://dev2.3.zuren8.com" + res.data.resourcePath
				let bg = {width: 800, height: 480, backgroundImage: "url(" + resPath + ")", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "contain"}
				resPlay = <div style = { bg }></div>
			}
			
			let resSize = Math.ceil(res.data.size)
			let resDescribe = res.data.resourceIntro || "暂无资源描述内容…"
			let resMa = <div className = "resMain">
					<div className = "resMain_explain">资源说明</div>
					<div className = "resMain_explain_con">
						<p className = "resMain_explain_con_title">{ res.data.resourceTitle }</p>
						<p className = "resMain_explain_con_download">下载资源</p>
						<p className = "resMain_explain_con_collect havea">收藏资源</p>
					</div>
					<div className = "resMain_explain_con">
						<p className = "resMain_explain_con_grade">{ res.data.gradeName }</p>
						<p className = "resMain_explain_con_subject">{ res.data.subjectName}</p>
					</div>
					<div className = "resMain_explain_con">
						<p className = "resMain_explain_con_form">文件格式 : { res.data.resourceFormat }</p>
						<p className = "resMain_explain_con_size">文件大小 : { resSize }Mb</p>
						<p className = "resMain_explain_con_time">上传时间 : { res.data.created_at }</p>
						<p className = "resMain_explain_con_uploader">上传者 : { res.data.realname}</p>
					</div>
					<div className = "resMain_explain_con">
						<p className = "resMain_explain_con_browseNum">浏览 : { res.data.resourceView }</p>
						<p className = "resMain_explain_con_downloadNum">下载 : <span>{ res.data.resourceDownload }</span></p>
						<p className = "resMain_explain_con_collectNum">收藏 : <span>{ res.data.resourceFav}</span></p>
					</div>
					<div className = "resMain_describe">资源描述</div>
					<div className = "resMain_describe_con">{ resDescribe }</div>
				</div>
				
			let thisGrade = res.data.resourceGrade	
			let thisSubject = res.data.resourceSubject
			let thisType = res.data.resourceType
			
	     	this.setState({
	        	resPlayer: resPlay,
	        	resMain: resMa,
	        	resouceFetchBody: {pageNumber: 1,
						       pageSize: 10,
						       isexpand: 1,
						       resourceGrade: thisGrade,
						       resourceSubject: thisSubject,
						       resourceEdition: "",
						       resourceChapter: "",
						       resourceChapterNode: [],
						       resourceType: thisType,
						       resourceTitle: "",
						       orderBy: "resourceView"},
				fullScreenHref: resPath 
	      	})
	     	
	     	if(res.data.icontype == 0){
	     		this.videoPlay(res.data.courseHighPath, res.data.courseMediumPath, res.data.courseLowPath, "http://dev2.3.zuren8.com"+res.data.resourcePic)
	     	}else if(res.data.icontype == 2){
	     		this.audioPlay("http://dev2.3.zuren8.com"+res.data.resourcePic, res.data.courseLowPath)
	     	}
	     	
	     	this.getAbout()
		}.bind(this))
	}
	
	getComment(){
		this.setState({
	    	resComment: [<div className = "resComment_no">暂无评论内容…</div>] 
	    })
	}
	
	reload = () => {
		window.location.reload()
	}
	
	getAbout(){
		let resouceUrl = "/api/resource/getResource"
		let resouceBody = JSON.stringify(this.state.resouceFetchBody)
		let resourceHeaders = {"Accept": "application/json", "Content-Type": "application/json"}		
		fetchData(resouceUrl, "POST", "", resourceHeaders, resouceBody, function (res) {
		    if(res.data.length > 1){
			    let resourceLis = res.data.map(val=>{
			    	if(val.id != this.props.params.id){
				    	let imgSrc = "http://dev2.3.zuren8.com" + val.coursePic
				    	let resUrl = "resource/resDetail/" + val.id
				    	return (<div className = "resBox">
				    		<div className = "resBox_sideLine"></div>
				    		<div className = "resBox_img">
				    			<img src = { imgSrc } />
				    		</div>
				    		<div className = "resBox_con">
				    			<Link className = "resBox_con_title" to = { resUrl } onClick = {this.reload}>
				    				{ val.courseTitle }		    			
				    			</Link>
				    			<div className = "resBox_con_time">
				    				{ val.created_at }
				    			</div>
				    		</div>
				    	</div>)
			    	}
			    })
			    
			    this.setState({
			        resourceList: resourceLis
			    })
			}else{
				this.setState({
		        	resourceList: [<div className = "noResource">暂无推荐资源…</div>]	        	
		    	})
		    	return false
			}
		}.bind(this))
	}
		
	resIntroduce = () => {
		this.setState({
	    	tab: "introduce" 
	    })
	}
	
	resComment = () => {
		this.setState({
	    	tab: "comment" 
	   	})
	}
	
	videoPlay = (highPath, mediumPath, lowPath, pic) => {
		let arr = []
        if (highPath) {
           	arr.push({
                label: '超清',
                file: highPath,
                width: '800',
                height: '480',
                type: 'mp4'
            })
        }
        if (mediumPath) {
            arr.push({
                label: '高清',
                file: mediumPath,
                width: '800',
                height: '480',
                type: 'mp4'
            })
        }
        if (lowPath && arr.length < 2) {
            arr.push({
                label: '标清',
                file: lowPath,
                width: '800',
                height: '480',
                type: 'mp4'
            })
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
                onPlay: function () {
                                    
                },
                onPlaylistComplete: function () {
                                   
                }
            }
        })
	}
	
	audioPlay = (pic, lowPath) => {
		jwplayer('myplayer').setup({
            flashplayer: '/jplayer/jwplayer.flash.swf',
            id: 'playerID',
            image: pic,
            width: '800',
            height: '480',
            type: "mp3",
            file: lowPath,
            events: {
                onPlay: function () {
               		$(".jwpreview").css('background-image', 'url("/images/resource/mp3bg.jpg")')
            	},
                onPlaylistComplete: function () {
                	
                }
            }
        })
	}
	

    render() {
		return (
			<div className="resDetailBox">
				
				<div className="detailHead">
					<span>资源中心 > 资源详情</span>
					<a className = { this.state.fullScreenHref ? "" : "hide" } href = { this.state.fullScreenHref } target = "_blank">全屏查看</a>
				</div>
				
				<div className="detailContent">
					<div className="detailContent_left">						
						<div className = "detailContent_left_up">			
							<div className = "detailContent_left_up_play">
			                    { this.state.resPlayer }
			                </div>
						</div>
						<div className = "detailContent_left_down">
							<div className = "detailContent_left_down_head">
								<div className = { this.state.tab == "introduce" ? "detailContent_left_down_head_introduce active" : "detailContent_left_down_head_introduce" } onClick = { this.resIntroduce.bind(this) }>资源介绍</div>
								<div className = { this.state.tab == "comment" ? "detailContent_left_down_head_comment active" : "detailContent_left_down_head_comment" } onClick = { this.resComment.bind(this) }>用户评论</div>
								<div className = "detailContent_left_down_head_type">
									<span>类型</span>
									<input type = "checkbox" />
									<span>私有资源</span>
								</div>
							</div>
							<div className = { this.state.tab == "introduce" ? "detailContent_left_down_introduceCon show" : "detailContent_left_down_introduceCon hide" }>
								{ this.state.resMain }
							</div>
							<div className = { this.state.tab == "comment" ? "detailContent_left_down_commentCon show" : "detailContent_left_down_commentCon hide" }>
								<div className = "detailContent_left_down_commentCon_do">
									<textarea></textarea>
									<p>发布</p>
								</div>
								<div className = "detailContent_left_down_commentCon_list">
									{ this.state.resComment }
								</div>
							</div>
						</div>
					</div>
					<div className="detailContent_right">
						<div className="detailContent_right_head">相关资源推荐</div>
						<div className="detailContent_right_con">
							{ this.state.resourceList }
						</div>
					</div>
				</div>
				
			</div>
		)
	}
    
    
    componentDidMount() {
    	this.getDetail(this.props.params.id, 108)
    	this.getComment()    	
    }
}

export default resDetail