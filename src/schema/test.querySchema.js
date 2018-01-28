import React from 'react';
import {Icon} from 'antd';

// 定义某个表的querySchema
// schema的结构和含义参考下面的例子
// 注意: 所有的key不能重复

module.exports = [
  {
    key: 'name',  // 传递给后端的字段名
    title: '用户名',  // 前端显示的名称
    placeholder: '请输入用户名',  // 提示语, 可选

    // 数据类型, 前端会根据数据类型展示不同的输入框
    // 目前可用的dataType: int/float/varchar/datetime
    // 为啥我会把字符串定义为varchar而不是string呢...我也不知道, 懒得改了...
    dataType: 'varchar',

    // 显示类型, 一些可枚举的字段, 比如type, 可以被显示为单选框或下拉框
    // 默认显示类型是normal, 就是一个普通的输入框, 这时可以省略showType字段
    // 目前可用的showType: normal/select/radio/between/checkbox/multiSelect/cascader
    // between只能用于int/float/datetime, 会显示2个输入框, 用于范围查询
    showType: 'normal',

    // 有一点要注意, 就算showType是normal, 也不意味是等值查询, 只是说传递给后台的是单独的一个值
    // 至于后台用这个值做等值/大于/小于/like, 前端不关心

    // 对于varchar类型的字段, 可以设置前置标签和后置标签
    addonBefore: (<Icon type="user"/>),
    defaultValue: 'foolbear', // 默认值
  },
  {
    key: 'blog',
    title: 'BLOG',
    placeholder: '请输入网址',
    dataType: 'varchar',
    showType: 'normal',
    addonBefore: 'http://',  // 这个前置和后置标签的值不能被传到后端, 其实作用很有限, 也就是美观点而已, antd官方的例子中还有用select做addon的, 感觉也没啥大用...
    addonAfter: '.me',
    defaultValue: 'jxy',
  },
  {
    key: 'age',
    title: '年龄',
    placeholder: '请输入年龄',
    dataType: 'int',
    defaultValue: 18,
    // 对于数字类型(int/float), 可以配置max/min
    min: 0,
    max: 99,
  },
  {
    key: 'weight',
    title: '体重(kg)',
    dataType: 'float',  // 小数会统一保留2位
    defaultValue: 50.1,
    min: 0,
    max: 99.9,
  },
  {
    key: 'userType',
    title: '性别',
    dataType: 'varchar',   // 理论上来说, 这里的dataType可以是int/float/varchar甚至datetime, 反正对前端而言都是字符串, 只是后端反序列化时有区别
    showType: 'radio',  // 单选框, 和下拉框schema是一样的, 只是显示时有差别
    options: [{key: 'male', value: '男'}, {key: 'female', value: '女'}],
    defaultValue: 'male',
  },
  {
    key: 'type',
    title: '类型',
    dataType: 'int',
    showType: 'select',  // 下拉框选择, antd版本升级后, option的key要求必须是string, 否则会有个warning, 后端反序列化时要注意
    options: [{key: '1', value: '类型1'}, {key: '2', value: '类型2'}],
    defaultValue: '1', // 这个defaultValue必须和options中的key是对应的
  },

  {
    key: 'gpa',
    title: 'GPA',
    dataType: 'float',
    showType: 'between',  // 小数也可以范围查询, 固定两位小数
    placeholderBegin: '哈哈',  // 对于范围查询, 可以定义placeholderBegin和placeholderBegin, 用于两个框的提示语
    placeholderEnd: '切克闹',  // 如果不定义, 对于int/float的范围查询, 提示语是"最小值"/"最大值", 对于日期的范围查询, 提示语是"开始日期"/"结束日期"
    defaultValueEnd: 99.9,
  },
  {
    key: 'birthday',
    title: '出生日期',
    dataType: 'datetime',
    showType: 'between',
    defaultValueBegin: '2016-01-01 12:34:56',
  }
];
