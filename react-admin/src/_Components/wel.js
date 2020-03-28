import React from 'react';
import Pcss from '../_Css/_Pcss.css'
import wel from '../_Css/wel.css'
//路由
import {
	HashRouter as Router,
	Route,
	Link,
	Switch,
	Redirect,
	withRouter,
	Prompt
} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import _route from './_router.js'
import { createHashHistory } from 'history';
//echarts
import ReactEcharts from 'echarts-for-react';
//UIantd
import { Table } from 'antd'
import 'antd/dist/antd.css';
//状态管理
import { connect } from 'react-redux'
import { setLog_a } from '../_store/actions.js'
//状态管理相关******************************************
/**	
 * 
 * {
 * 状态管理流程：
 * state-actions-reducers-（mapStateToProps）state
 *  }
 * 
 */
// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state) => {
	return {setLog_s:state.setLog_s}
}

// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		setLog_a (data) {//尽量函数名跟actions里面的命名一样
			dispatch(setLog_a(data))
		},
	}
}
//页面组件=====================================
/** 
 * 
 * {
 * 页面的数据，方法，元素都在下面分模块搞定（至少方法跟元素得要模块化）
 * }
 * 
 */ 
class news1 extends React.Component {
	constructor(props) {
		super(props);
		var _this = this;
		//@data
		this.state = {
			//antd-table
			dataSource: [
				{
					key:'1',
					name: '胡彦斌',//0
					isforset: '栏目修改操作',//0
				},
				{
					key:'2',
					name: '胡彦祖',
					isforset: '系统设置修改',
				},
				{
					key:'3',
					name: '胡彦斌',//0
					isforset: '栏目修改操作',//0
				},
				{
					key:'4',
					name: '胡彦祖',
					isforset: '系统设置修改',
				},
				{
					key:'5',
					name: '胡彦斌',//0
					isforset: '栏目修改操作',//0
				},
			],
			columns : [{//列数
					title: '操作人',
					dataIndex: 'name',
					key: 'name',//0
				},
				{
					title: '操作记录',
					dataIndex: 'isforset',
					key: 'isforset',//0
				},
			],
			//echarts
			eloptions:{
				animation:false,
				xAxis: {
					type: 'category',
					boundaryGap: false,
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				},
				yAxis: {
					type: 'value'
				},
				series: [{
					data: [820, 932, 901, 934, 1290, 1330, 1320],
					type: 'line',
					areaStyle: {}
				}]
			}
		}
		//@methods
		this.ms = {
			//状态管理相关 actions
			setLogfns:function(){
				let setLog_a_f = _this.props.setLog_a
				setLog_a_f([1,1,1,1,1,1])//触发setLog action
				setTimeout(function(){//异步获取数据
					console.log(_this.props.setLog_s)
				},0)				
			},
		}
	}
	//@mounted
	componentDidMount () {		
		this.ms.setLogfns()
	}
	render() {
		return(
			<div style={{padding:'50px'}} className='antdtable'>
				<div /*-echarts-*/ style={{height:'450px',marginBottom:'50px',marginRight:'5px'}}>
					<div className='floatl' style={{width:'50%',height:'100%'}}>
						<div style={{height:'100%',marginRight:'25px',position:'relative'}} className='bg-col-fafafa'>
							<ReactEcharts option={this.state.eloptions} style={{height:'100%'}}></ReactEcharts>
							<i style={{position:'absolute',bottom:'-5px',right:'-5px',width:'100%',height:'5px',backgroundColor:'#ccc'}}></i>
							<i style={{position:'absolute',bottom:'-5px',right:'-5px',width:'5px',height:'100%',backgroundColor:'#ccc'}}></i>
						</div>
					</div>
					<div className='floatl' style={{width:'50%',height:'100%'}}>
						<div style={{height:'100%',marginLeft:'25px',position:'relative'}} className='bg-col-fafafa'>
							<div></div>
							<i style={{position:'absolute',bottom:'-5px',right:'-5px',width:'100%',height:'5px',backgroundColor:'#ccc'}}></i>
							<i style={{position:'absolute',bottom:'-5px',right:'-5px',width:'5px',height:'100%',backgroundColor:'#ccc'}}></i>
						</div>
					</div>
				</div>
				<Table dataSource={this.state.dataSource} columns={this.state.columns} />
		    </div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(news1);