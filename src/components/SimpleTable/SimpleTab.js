import React from 'react';
import {
  Icon,
  Row,
  Input,
  Col,
  Table,
  Button,
} from 'antd';
import globalConfig from 'config.js';

class SimpleTab extends React.PureComponent {

  // 设置state状态
  state = {
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
    },
    ];

    const data = [];
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