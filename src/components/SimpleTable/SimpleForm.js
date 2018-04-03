import React from 'react';
import {
  Form,
  Icon,
  Row,
  Input,
  Col,
  Button,
} from 'antd';
import moment from 'moment';


const FormItem = Form.Item;
const CustomizedForm = Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  //把父组件的属性映射到表单项上
  mapPropsToFields(props) {
    return {
      username: Form.createFormField({
        ...props.username,
        value: props.username.value,
      }),
    };
  },
  // 处理方法
  handleSearch(props) {
    // 还是要交给上层组件处理, 因为要触发table组件的状态变化...
    const queryObj=this.props.form;
    debugger;
    console.log(queryObj);
    this.props.parentHandleSubmit(queryObj);
  },
  handleFormChange (props){
    this.state.fields=props;
  },
  onValuesChange(_, values) {
    console.log(values);
  },
})((props) => {
  const { getFieldDecorator } = props.form;
  return (
    <Form  layout="inline" >
      <FormItem>
        {getFieldDecorator('userName')(
          <Input id={"name"} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>} addonBefore={"昵称："}/>
        )}
      </FormItem>
      <FormItem>
        {getFieldDecorator('telephone')(
          <Input id={"telephone"} prefix={<Icon type="mobile" style={{ color: 'rgba(0,0,0,.25)' }}/>} addonBefore={"电话："}/>
        )}
      </FormItem>
      <FormItem>
        {getFieldDecorator('email')(
          <Input id={"email"} prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }}/>} addonBefore={"邮箱："}/>
        )}
      </FormItem>
      <Row style={{marginTop:'14px'}}>
        <Col span={12} offset={12} style={{ textAlign: 'right' }}>
          <Button type="primary" onClick={handleSearch} ><Icon type="search"/>查询</Button>&nbsp;
          <Button ><Icon type="cross"/>重置</Button>
        </Col>
      </Row>
    </Form>
  );
});


class SimpleForm extends React.PureComponent{

 /* state = {
    fields: {
      username: '',
      telephone: '',
      email: '',
    }
  };*/

//   // 处理方法
//   handleSearch= (e) => {
//     e.preventDefault();
//     // 还是要交给上层组件处理, 因为要触发table组件的状态变化...
//     const queryObj=this.props.form;
//     debugger;
//     console.log(queryObj);
//     this.props.parentHandleSubmit(queryObj);
// }
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
    return newObj;
  }

  render(){
    const fields = this.state.fields;
     return(
       <div>
         <CustomizedForm {...fields} onChange={this.handleFormChange} onSubmit={this.handleSearch}/>
       </div>
     );
  }
}

export default SimpleForm;
