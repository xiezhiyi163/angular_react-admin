import React from 'react';
import Pcss from '../_Css/_Pcss.css'
import homecss from '../_Css/home.css'
import $ from 'jquery'
//路由
import {
	HashRouter as Router,
	Route,
	Link,
	Switch,
	Redirect,
	withRouter,
} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import _route from './_router.js'
import { createHashHistory } from 'history';
//UIantd
import { Button, message, Tabs } from 'antd'
import 'antd/dist/antd.css';
const historys = createHashHistory()
const { TabPane } = Tabs; //tabs组件里面的TabPane分组件
//页面组件=====================================
/*
 * {
 * =@=组件说明：add，实现跳转，remove，实现跳转，点击左边重复后不追加，实现跳转到另外的，点击标签实现跳转
 * 数据绑定思路最好完全按照小程序的思路来走，实在没办法才用this指向当前的，当前的react事件绑定参数就得必须用this
 * 此处根据用户id是否存在来判断这个页面的停留
 * }
 */
class homes extends React.Component {
	componentWillMount(){
		if(!sessionStorage.loginId){
			this.ms.tipsbox('err','您尚未进行登录',3)
			historys.replace('/')
		}
	}
	constructor(props) {
		super(props);
		var _this = this;
		//@datas
		//tabs组件
		var panes = [
			{ title: 'welcome', content: 'Content of Tab Pane 1', path: '/index/wel', key: 'n1', closable: false, },
		];
		this.state = {
			route: props.route,
			//tabs组件
			newtabs: [
				{ title: 'items', content: 'Content of Tab Pane 2', path: '/index/items', key: 'n2', },
				{ title: 'settings', content: 'Content of Tab Pane 3', path: '/index/settings', key: 'n3', },
			],
			newTabIndex: 0,
			activeKey: panes[0].key,
			panes,
			size: 'large'
		}
		//@methods
		this.ms = {
			//弥补hash为#/出现的空白页
			reload:function(){
				if(window.location.hash=='#/'&&sessionStorage.loginId){
					if(document.getElementById('managerloginid')){
						historys.replace('/index/wel');
					}					
				}else if(window.location.hash=='#/'&&!sessionStorage.loginId&&!document.getElementById('managerloginid')){
					historys.replace('/');
				}
				setTimeout(function(){
					_this.ms.reload()
				},10)
			},
			//退出登录
			loginout:function(){
				sessionStorage.removeItem('loginId')
				historys.replace('/')
				window.location.reload()
				$('#managerloginid').show()
			},
			//控制左右两大部分的高--
			leftandcontheight: function() {
				$('#leftwrap').height($(window).height() - 44)
				$('#contwrap').height($(window).height() - 89)
				window.addEventListener('resize', function() {
					$('#leftwrap').height($(window).height() - 44)
					$('#contwrap').height($(window).height() - 89)
				})
			},
			//监听leftcontwrap滚动--
			leftcontscroll: function() {
				$('#contwrap').scroll(function() {
					$('#totop').css({ 'display': ($(this).scrollTop() > 200 ? 'block' : 'none') });
				})
			},
			//click totop--
			totop: function() {
				var top = $('#contwrap').scrollTop()
				var timer = setTimeout(function() {
					if(top < 40) {
						top = 0
						$('#contwrap').scrollTop(top)
						clearTimeout(timer)
						return;
					}
					top = top - 40;
					$('#contwrap').scrollTop(top)
					_this.ms.totop()
				}, 1)
			},
			//tabs组件--
			onChange: activeKey => {
				_this.setState({ activeKey });
				//判断tabs点击并跳转
				for(var i = 0; i < panes.length; i++) {
					console.log(panes[i].key, activeKey)
					if(panes[i].key == activeKey) {
						historys.replace(panes[i].path)
						break;
					}
				};
			},
			onEdit: (targetKey, action) => {
				_this.ms[action](targetKey);
			},
			add: (tabsarr, ind) => { //添加时一并跳转
				const panes = _this.state.panes;
				//判断tabs是否存在
				for(var i = 0; i < panes.length; i++) {
					if(panes[i].path == _this.state[tabsarr][ind].path) {
						_this.setState({ activeKey: panes[i].key });
						historys.push(panes[i].path)
						return;
					}
				};
				const activeKey = _this.state[tabsarr][ind].key;
				panes.push({ title: _this.state[tabsarr][ind].title, content: 'New Tab Pane', path: _this.state[tabsarr][ind].path, key: activeKey, });
				this.setState({ panes, activeKey });
				historys.replace(_this.state[tabsarr][ind].path)
			},
			remove: targetKey => {
				let activeKey = _this.state.activeKey;
				let lastIndex;
				this.state.panes.forEach((pane, i) => {
					if(pane.key === targetKey) {
						lastIndex = i - 1;
					}
				});
				const panes = _this.state.panes.filter(pane => pane.key !== targetKey);
				if(panes.length && activeKey === targetKey) {
					if(lastIndex >= 0) {
						activeKey = panes[lastIndex].key;
					} else {
						activeKey = panes[0].key;
					}
				}
				_this.setState({ panes, activeKey });
				//找到对应activeKey
				for(var i = 0; i < panes.length; i++) {
					if(panes[i].key == activeKey) {
						historys.replace(panes[i].path)
						break;
					}
				};
			},
			//弹框提示--
			tipsbox: function(type,msg,time) {
				if(type=='err'){
					message.warning(msg,time);
					return;
				}
		        message.success(msg,time);
			}
		}
	}
	//@mounted
	componentDidMount() {
		var _this = this;
		_this.ms.reload()
		$('#managerloginid').hide()
		this.ms.leftandcontheight()
		this.ms.leftcontscroll()
	}
	render() {
		return(
			<Router>
		    	<div className='topwrap bg-col-skyblue'>
		    		<span style={{float:'right',marginRight:30,marginTop:10,fontSize:16,color:'white',cursor:'pointer'}} onClick={this.ms.loginout}>退出</span>
		    	</div>
		    	<div className='bg-col-e7e7e7 floatl' id='leftwrap' /*Left_Wrap____________*/>
		    		<div style={{width:'100%',overflow:'hidden',fontSize:12}}>
			    		<p className='items clearP' onClick={this.ms.add.bind(this,'newtabs',0)}>栏目管理</p>
			    		<p className='items clearP' onClick={this.ms.add.bind(this,'newtabs',1)}>系统设置</p>	    		
		    		</div>
		    	</div>
		    	<div style={{paddingLeft:'180px',position:'relative'}} /*Cont_Wrap____________*/>
	    			{/*--tabs栏--*/}
		    		<div style={{height:'45px',borderBottom:'1px solid #-ebebeb',backgroundColor:'#e7e7e7',paddingTop:'5px'}}>
						<Tabs hideAdd onChange={this.ms.onChange} activeKey={this.state.activeKey} type="editable-card" onEdit={this.ms.onEdit} >
				          {this.state.panes.map(pane => (
				            <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
				            </TabPane>
				          ))}
				        </Tabs>	    			
		            	<div id='contwrap'>
		            		<div style={{width:'100%',overflow:'hidden'}}>
			            		{renderRoutes(this.state.route.children)}			            		
		            		</div>
		            	</div>
		    		</div>
		    		<i className='clboth'></i>
		    		{/*--返回顶部--*/}
		    		<div id='totop' className='bg-col-skyblue col-white' style={{position:'absolute',right:'30px',bottom:'30px',width:'30px',height:'30px',textAlign:'center',lineHeight:'30px',borderRadius:'3px',display:'none',cursor:'pointer'}} onClick={this.ms.totop}>
		    			▲
		    		</div>
		    	</div>
		    </Router>
		);
	}
}

export default homes;