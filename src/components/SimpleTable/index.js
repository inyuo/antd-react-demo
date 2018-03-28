import React from 'react';
import {message, notification, Spin} from 'antd';
import SimpleForm from  "./SimpleForm.js";
import SimpleTab from  "./SimpleTab.js";
import ajax from '../../utils/ajax';
import globalConfig from "../../config";


class SimpleTable extends React.PureComponent {

  state = {
    // 本身的状态
    loadingSchema: false,  // 是否正在从远程加载schema

    // 表单组件的状态
    queryObj: {},  // 表单中的查询条件

    // 表格组件的状态
    dataSource: [],  // 表格中显示的数据
    tableLoading: false,  // 表格是否是loading状态

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
    console.log("res"+res);
    if (res.success) {
      this.setState({
        currentPage: 1,
        data: res.data,
        total: res.total,
        tableLoading: false,
        queryObj: queryObj,
      });
    } else {
      this.error(res.message);
    }
  };

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
    //message.success('查询成功');
    if (res.success) {
      this.setState({
        data: res.data,
        total: res.total,
        tableLoading: false,
      });
    } else {
      this.error(res.message);
    }
  };
  render() {
    return (
      <Spin spinning={this.state.loadingSchema} delay={500}>
        <SimpleForm parentHandleSubmit={this.handleFormSubmit}/>
        <SimpleTab data={this.state.dataSource}  />
      </Spin>
    );
  }
}

export default SimpleTable;
