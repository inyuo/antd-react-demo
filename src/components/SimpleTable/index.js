import React from 'react';
import {message, notification, Spin} from 'antd';
import SimpleForm from  "./SimpleForm.js";
import SimpleTab from  "./SimpleTab.js";
import globalConfig from "../../config";


class SimpleTable extends React.PureComponent {

  state = {
    // 本身的状态
    loadingSchema: false,  // 是否正在从远程加载schema

    // 表单组件的状态
    // queryObj: {},  // 表单中的查询条件

    // 表格组件的状态
    // data: [],  // 表格中显示的数据
    // tableLoading: false,  // 表格是否是loading状态

    // 分页器的状态
    // currentPage: 1,  // 当前第几页, 注意页码是从1开始的, 以前总是纠结页码从0还是1开始, 这里统一下, 跟显示给用户的一致
    // pageSize: globalConfig.DBTable.pageSize || 50,  // pageSize默认值50, 这个值一旦初始化就是不可变的
    // showSizeChanger: globalConfig.DBTable.showSizeChanger, // 是否显示修改每页显示数量的选项
    // pageSizeOptions: globalConfig.DBTable.pageSizeOptions, // 每页面显示数量选项
    // total: 0,  // 总共有多少条数据
  };

  render() {
    return (
      <Spin spinning={this.state.loadingSchema} delay={500}>
        <SimpleForm/>
        <SimpleTab/>
      </Spin>
    );
  }
}

export default SimpleTable;
