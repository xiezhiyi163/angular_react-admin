import React from 'react';
import Pcss from '../_Css/_Pcss.css'
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
import { Input,Button } from 'antd'
import 'antd/dist/antd.css';
//页面组件=====================================
/**
 * {
 * data，methods以及DOM元素都在下面设置好模块化
 * }
 */
class news extends React.Component{
	constructor(props){
		super(props)
		//@data
		this.state = {
			fins:0
		}
		//@methods
		this.ms = {
			
		}
	}
	//@mounted
	componentDidMount() {
		
	}
	render(){
	  return (
	    <div style={{padding:'50px'}}>
	    	<div style={{maxWidth:1200,margin:'auto',paddingTop:50}}>
		    	<div style={{marginBottom:20,position:'relative'}}>
		    		<span style={{width:85,position:'absolute',top:0,left:0}} className='floatl'>禁用字符:</span>
					<p style={{maxWidth:1000,marginLeft:105}}>
						<Input style={{width:'100%'}}/>
					</p>
					
		    	</div>
		    	<div style={{marginBottom:20,position:'relative'}}>
		    		<span style={{width:85,position:'absolute',top:0,left:0}} className='floatl'>IP地址允许:</span>
					<p style={{maxWidth:1000,marginLeft:105}}>
						<Input style={{width:'100%'}}/>
					</p>
		    	</div>
		    	<div style={{marginBottom:20,position:'relative'}}>
		    		<span style={{width:85,position:'absolute',top:0,left:0}} className='floatl'>协议规则:</span>
					<p style={{maxWidth:1000,marginLeft:105}}>
						<Input style={{width:'100%'}}/>
					</p>
		    	</div>
		    	<div style={{marginBottom:20}}>
		    		<Button style={{width:'100px',marginLeft:105}}>提交</Button>
		    	</div>
	    	</div>
	    </div>
	  );		
	}
}

export default news;
