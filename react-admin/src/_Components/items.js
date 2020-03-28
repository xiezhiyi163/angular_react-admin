import React from 'react';
import Pcss from '../_Css/_Pcss.css'
import items from '../_Css/items.css'
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
import { Table, Button,Modal,Input } from 'antd'
import 'antd/dist/antd.css';
//页面组件=====================================
class news2 extends React.Component {
	constructor(props) {
		super(props);
		var _this = this;
		//@data
		this.state = {
			//弹框显示控制字段
			visible: false,
			//列表数据
			dataSource: [{
					key:1,//0
					name: '饮食行业', //0
					type: '服务类型', //0
				},
				{
					key:2,
					name: '程序开发',
					type: '技术类型',
				},
			],
			columns: [{ //列数
					title: '姓名',
					dataIndex: 'name',
					key: 'name', //0
				},
				{
					title: '年龄',
					dataIndex: 'type',
					key: 'type', //0
				},
			]
		};
		//@methods
		this.ms = {
			//弹窗业务流程
			showaddcolumnModal: () => {
				_this.setState({
					visible: true,
				});
			},
			handleOk: (e) => {
				console.log(e);
				_this.setState({
					visible: false,
				});
			},
			handleCancel: (e) => {
				console.log(e);
				_this.setState({
					visible: false,
				});
			}
		}
	}
	render() {
		return(
			<div style={{padding:'50px'}} className='antdtable'>
				<Modal title="Basic Modal" visible={this.state.visible} onOk={this.ms.handleOk} onCancel={this.ms.handleCancel}>
		          <div style={{maxHeight:'500px',overflow:'auto'}}>
		          	<Input/>
		          </div>
		        </Modal>
      			<Button style={{marginBottom:'30px'}} onClick={this.ms.showaddcolumnModal}>添加栏目</Button>
				<Table dataSource={this.state.dataSource} columns={this.state.columns} />
		    </div>
		);
	}
}

export default news2;