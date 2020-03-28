import React from 'react';
//懒加载需要组件
import ar from './_click-loadroute-base.js'
//路由配置
export default  [
	{
		component:ar(() => import('./home.jsx')),
		path:'/index',
		children:[
			{
				component:ar(() => import('./wel.js')),
				path:'/index/wel',
			},
			{
				component:ar(() => import('./setting.js')),
				path:'/index/settings',
			},
			{
				component:ar(() => import('./items.js')),
				path:'/index/items'
			}		
		]
	}
]