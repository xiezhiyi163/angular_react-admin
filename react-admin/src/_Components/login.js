import React from 'react';
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
import { Input,Button,message } from 'antd'
import 'antd/dist/antd.css';
const historys = createHashHistory()
//页面组件=====================================
class news extends React.Component{
	constructor(props){
		super(props);
		var _this = this;
		//@data
		this.state = {
			account:'13168542548',
			password:'123456',
			enter1:'',
			enter2:'',
		};
		//@methods
		this.ms = {
			account:function(){
				setTimeout(function(){
					_this.setState({
						enter1:document.getElementById('account').value
					})
				},0)
			},
			passwords:function(){
				setTimeout(function(){
					_this.setState({
						enter2:document.getElementById('password').value
					})
				},0)
			},
			forlogin:function(){
				if(_this.state.enter1!=_this.state.account){
					message.warning('查无此账号',3)
				}else if(_this.state.enter2!=_this.state.password){
					message.warning('密码错误',3)
				}else{
					message.success('登录成功',3)
					sessionStorage.setItem('loginId','1m3m1v6v8v5v4v2v5c4c8')
					historys.replace('/index/wel')
				}
			}
		}
	}
	render(){
	  return (
	    <div id='managerloginid' style={{padding:'50px'}}>
	    	<div style={{maxWidth:700,margin:'auto',paddingTop:50}}>
		    	<p style={{marginBottom:20}}>
		    		<span style={{display:'inline-block',width:90}}>账号:</span><Input style={{maxWidth:'500px',marginLeft:20}} onInput={this.ms.account} id='account'/>
		    	</p>
		    	<p style={{marginBottom:20}}>
		    		<span style={{display:'inline-block',width:90}}>密码:</span><Input style={{maxWidth:'500px',marginLeft:20}} type='password' onInput={this.ms.passwords} id='password'/>
		    	</p>
		    	<p style={{marginBottom:20}}>
		    		<Button style={{width:'100px',marginLeft:20,marginLeft:110}} onClick={this.ms.forlogin}>提交</Button>
		    	</p>
	    	</div>
	    </div>
	  )		
	}
}

export default news;
