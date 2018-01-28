import React from 'react';
import {
  Icon,
  Row,
  Input,
  Col,
  Button,
} from 'antd';
import globalConfig from 'config.js';
import moment from 'moment';


class SimpleForm extends React.PureComponent{

  // 处理方法

  render(){

    //const 定义的变量
     return(
       <div className="ant-advanced-search-form">
         {/*这个渲染组件的方法很有意思, 另外注意这里的ref*/}
         <Row>
           <Col span={6} offset={2} style={{ textAlign: 'left'}} >
             <Input addonBefore={"标题："}/>
           </Col>
           <Col span={6} offset={2} style={{ textAlign: 'left'}} >
             <Input addonBefore={"作者："}/>
           </Col>
           <Col span={6} offset={2} style={{ textAlign: 'left'}} >
             <Input addonBefore={"ISBN："}/>
           </Col>
         </Row>
         <Row style={{marginTop:'14px'}}>
           <Col span={12} offset={12} style={{ textAlign: 'right' }}>
             <Button type="primary" ><Icon type="search"/>查询</Button>
             <Button ><Icon type="cross"/>清除条件</Button>
           </Col>
         </Row>
       </div>
     );
  }

}

export default SimpleForm;
