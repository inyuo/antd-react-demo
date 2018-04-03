import React from 'react';
import {message, notification, Spin} from 'antd';
import SimpleForm from  "./SimpleForm.js";
import SimpleTab from  "./SimpleTab.js";
import ajax from '../../utils/ajax';
import globalConfig from "../../config";


class SimpleTable extends React.PureComponent {

  state = {
    // 本身的状态
    loading: false,  // 是否正在从远程加载schema
    selectedRowKeys:[],
    // 表单组件的状态
    queryObj: {},  // 表单中的查询条件

    // 表格组件的状态
    dataSource: [],  // 表格中显示的数据
    tableLoading: true,  // 表格是否是loading状态

    // 分页器的状态
    currentPage: 1,  // 当前第几页, 注意页码是从1开始的, 以前总是纠结页码从0还是1开始, 这里统一下, 跟显示给用户的一致
    pageSize: globalConfig.DBTable.pageSize || 50,  // pageSize默认值50, 这个值一旦初始化就是不可变的
    showSizeChanger: globalConfig.DBTable.showSizeChanger, // 是否显示修改每页显示数量的选项
    pageSizeOptions: globalConfig.DBTable.pageSizeOptions, // 每页面显示数量选项
    total: 0,  // 总共有多少条数据
  };
  /**
   * 点击提交按钮时触发查询
   *
   * @param queryObj
   */
  handleFormSubmit = async (queryObj) => {
    logger.debug('handleFormSubmit, queryObj = %o', queryObj);
    // 这时查询条件已经变了, 要从第一页开始查
    const res = await ajax.getUserList();
    if (res.success) {
      this.setState({
        currentPage: 1,
        dataSource: res.data,
        total: res.total,
        tableLoading: false,
        queryObj: queryObj,
      });
      message.success('查询成功');
    } else {
      message.error("查询失败："+res.msg);
    }
  };

  /**
   * 组件初次挂载时parse schema
   */
  componentWillMount() {
  }
  /**
   * 刚进入页面时触发一次查询
   */
  componentDidMount() {
    this.refresh();
  }

  /**
   * 按当前的查询条件重新查询一次
   */
  refresh = async () => {
    const res = await ajax.getUserList(this.state.queryObj, this.state.currentPage, this.state.pageSize);
    if (res.status===0) {
      this.setState({
        dataSource: this.formatData(res.data),
        total: res.data.length,
        tableLoading: false,
      });
      message.success('查询成功');
    } else {
      message.error("查询失败："+res.msg);
    }
  };

  formatData(resData){
    let newData =[];
    for (let i=0;i<resData.length;i++){
      const da=resData[i];
      newData.push({
        nickname:da.nickname,
        telephone:da.telephone,
        status:da.status,
        email:da.email,
        last_Login_Time:da.last_Login_Time,
        reg_Ip:da.reg_Ip,
        reg_Time:da.reg_Time,
      });
    }
    return newData;
  }
  render() {
    return (
      <Spin spinning={this.state.tableLoading} delay={500}>
        <SimpleForm parentHandleSubmit={this.handleFormSubmit}/>
        <SimpleTab dataSource={this.state.dataSource}  />
      </Spin>
    );
  }
}

export default SimpleTable;
