import React from 'react';
import {connect} from 'react-redux'
import {
  Icon,
  Row,
  Input,
  Col,
  Table,
  Button,
} from 'antd';
import globalConfig from "../../config";

class SimpleTab extends React.PureComponent {

  state = {
    // 本身的状态
    loadingSchema: false,  // 是否正在从远程加载schema
    // 选中的列
    selectedRowKeys:[],
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

  start = () => {
    this.setState({loading: true});
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
        sourceData: [],
      });
    }, 1000);
  }

  //选中状态更改
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({selectedRowKeys});
  }

  render() {
    const {loading, selectedRowKeys} = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length;
    const columns = [{
      title: '昵称',
      dataIndex: 'nickname',
      filters: [{
        text: 'Joe',
        value: 'Joe',
      }, {
        text: 'Jim',
        value: 'Jim',
      }, {
        text: 'Submenu',
        value: 'Submenu',
      }],
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.title.indexOf(value) === 0,
      sorter: (a, b) => a.name.title - b.title.length,
    }, {
      title: '电话',
      dataIndex: 'telephone',
    }, {
      title: '头像',
      dataIndex: 'image',
      render: () => <img
        src="http://jingo.oss-cn-beijing.aliyuncs.com/u%3D2064010887%2C1330835443%26fm%3D27%26gp%3D0.jpg" width="80"
        height="100"/>
    }, {
      title: '帐号状态',
      dataIndex: 'status',
      defaultSortOrder: 'descend',
    }, {
      title: '邮箱',
      dataIndex: 'email',
    }, {
      title: '最后登录时间',
      dataIndex: 'last_Login_Time',
    }, {
      title: '注册ip',
      dataIndex: 'reg_Ip',
    }, {
      title: '注册时间',
      dataIndex: 'reg_Time',
    }, {
      title: '操作',
      dataIndex: 'did',
      render: () => <div><a href="#">Del</a><a href="#">Edit</a></div>
    }
    ];




    return (
      <div>
        <div style={{marginBottom: 16}}>
          <Button
            type="primary"
            onClick={this.start}
            disabled={!hasSelected}
            loading={loading}
          >
            更多操作
          </Button>
          <span style={{marginLeft: 8}}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.dataSource}/>
      </div>
    );
  }

}

export default SimpleTab;
