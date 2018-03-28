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
  handleSearch= (e) => {
    e.preventDefault();
    // 还是要交给上层组件处理, 因为要触发table组件的状态变化...
    this.props.parentHandleSubmit();

}
  handleClear= async(e) => {

  }

  /**
   * 表单的查询条件不能直接传给后端, 要处理一下
   *
   * @param oldObj
   * @returns {{}}
   */
  filterQueryObj(oldObj) {
    // 将提交的值中undefined/null去掉
    const newObj = {};
    for (const key in oldObj) {
      if (oldObj[key] !== undefined && oldObj[key] !== null) {
        // 对于js的日期类型, 要转换成字符串再传给后端
        if (oldObj[key] instanceof Date) {
          newObj[key] = oldObj[key].format('yyyy-MM-dd HH:mm:ss');
        } else if (moment.isMoment(oldObj[key])) {  // 处理moment对象
          newObj[key] = oldObj[key].format('YYYY-MM-DD HH:mm:ss');
        } else {
          newObj[key] = oldObj[key];
        }
      }
    }
    logger.debug('old queryObj: %o, new queryObj %o', oldObj, newObj);
    return newObj;
  }

  render(){

    //const 定义的变量
     return(
       <div className="ant-advanced-search-form">
         {/*这个渲染组件的方法很有意思, 另外注意这里的ref*/}
         <Row>
           <Col span={6} offset={2} style={{ textAlign: 'left'}} >
             <Input addonBefore={"昵称："}/>
           </Col>
           <Col span={6} offset={2} style={{ textAlign: 'left'}} >
             <Input addonBefore={"电话："}/>
           </Col>
           <Col span={6} offset={2} style={{ textAlign: 'left'}} >
             <Input addonBefore={"邮箱："}/>
           </Col>
         </Row>
         <Row style={{marginTop:'14px'}}>
           <Col span={12} offset={12} style={{ textAlign: 'right' }}>
             <Button type="primary" onClick={this.handleSearch}><Icon type="search"/>查询</Button>
             <Button onClick={this.handleClear}><Icon type="cross"/>清除条件</Button>
           </Col>
         </Row>
       </div>
     );
  }

}

export default SimpleForm;
