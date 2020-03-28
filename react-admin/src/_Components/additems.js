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
//页面组件=====================================
class news extends React.Component{
	constructor(props){
		super(props)
		
	}
	render(){
	  return (
	    <div>
	    	<Link to='/news2'>news2</Link>
	      new
	    </div>
	  );		
	}
}

export default news;
