import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import globalConfig from 'config';
import {
  Icon,
  Row,
  Input,
  Col,
  Table,
  Button,
} from 'antd';
import {message} from 'antd';
import ajax from '../../utils/ajax';

class SimpleTab extends React.PureComponent {

  // 设置state状态
  state = {
    requesting: false, // 当前是否正在请求服务端接口
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };
  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  }

  // 获取books列表
  initBookList = async(e) => {    // async可以配合箭头函数
    // e.preventDefault();  // 这个很重要, 防止跳转
    const hide = message.loading('正在加载...', 1);
    try {
      // 服务端验证
      debugger;
      const res = await ajax.getBookList(1,20);
      hide();
      if (res.success) {
        message.success('登录成功');
        return res;
      } else {
        message.error(`登录失败: ${res.message}, 请联系管理员`);
      }
    } catch (exception) {
      hide();
      message.error(`网络请求出错: ${exception.message}`);
    }
  };

  //选中状态更改
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    const columns = [{
      title: '书名',
      dataIndex: 'title',
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
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.title.indexOf(value) === 0,
      sorter: (a, b) => a.name.title - b.title.length,
    }, {
      title: '作者',
      dataIndex: 'author',
    }, {
        title: '图片',
        dataIndex: 'path',
        render: () => <img src="http://jingo.oss-cn-beijing.aliyuncs.com/u%3D2064010887%2C1330835443%26fm%3D27%26gp%3D0.jpg" width="80" height="100"/>
      },{
      title: '市场价(元)',
      dataIndex: 'price',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.price - b.price,
    },{
      title: '出版社',
      dataIndex: 'publisher',
    },{
      title: 'ISBN码',
      dataIndex: 'isbn',
      filters: [{
        text: 'London',
        value: 'London',
      }, {
        text: 'New York',
        value: 'New York',
      }],
      filterMultiple: false,
      onFilter: (value, record) => record.isbn.indexOf(value) === 0,
    },{
      title: '页数',
      dataIndex: 'pages',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.pages - b.pages,
    },  {
      title: '上架',
      dataIndex: 'status',
    },{
      title: '库存',
      dataIndex: 'supply',
    },{
      title: '操作',
      dataIndex: 'did',
      render: () => <a href="#">Del</a>
    }
    ];



    const data = [];
    let ajaxData;
    try {
      ajaxData = this.initBookList();
    }catch (Exception){
      message.error("api调用会失败",2);
    }
    if (ajaxData===undefined){
      for (let i=0;i<100;i++){
        data.push({
          key: i,
          title: `社会医学`,
          author:'杨诎人',
          isbn:'9787040357936',
          path:'images/nocover.jpg',
          price:parseInt(Math.random()*100),
          pages:i,
          publisher:'东南大学出版社',
          status:'0',
          supply:'23'
        });
      }
    }

    //const 定义的变量
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button
            type="primary"
            onClick={this.start}
            disabled={!hasSelected}
            loading={loading}
          >
            更多操作
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table  rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
    );
  }

}

export default SimpleTab;
