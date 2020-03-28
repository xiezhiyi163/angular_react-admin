import React from 'react';
import './App.css';
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
import _route from './_Components/_router.js'
import { createHashHistory } from 'history';
//重定向的组件
import login from './_Components/login.js'
import home from './_Components/wel.js'
//展示页面的视图组件=====================================
function App() {
	return (
  	<Router>
        {renderRoutes(_route)}
		{/*以下判断是判断用户id状态并进去对应的页面*/
			sessionStorage.loginId?
			<Redirect to='/index/wel'/>:
			<Route path='/' eaxct component={login}/>
    	}       
    </Router>
  );
}

export default App;
