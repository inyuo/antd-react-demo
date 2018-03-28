/**
 * 定义sidebar和header中的菜单项
 *
 * 一些约定:
 * 1.菜单最多3层;
 * 2.只有"叶子"节点才能跳转;
 * 3.所有的key都不能重复;
 */

// 其实理论上可以嵌套更多层菜单的, 但是我觉得超过3层就不好看了
// 可用的图标见这里: https://ant.design/components/icon-cn/

// 定义siderbar菜单
const sidebarMenu = [
  {
    key: 'alone',
    name: '工作台',
    icon: 'dashboard',
  },
  {
    key: 'index',  // route时url中的值
    name: '列表',  // 在菜单中显示的名称
    icon: 'table',  // 图标是可选的
    child: [
      {
        key: 'option1',
        name: '模拟CRUD',
        icon: 'play-circle',   // 二级三级菜单也可以带图标
      },
      {
        key: 'option2',
        name: '图片DEMO',
        icon: 'android',
      },
      {
        key: 'option3',
        name: '自定义操作',
        icon: 'bulb',
      },
    ],
  },

  {
    key: 'alone2',
    name: '测试接口',
    icon:'coffee'
  },
  {
    key: 'noiconhaha',
    name: '又一个没图标的',
    child: [
      {
        key: 'nesnesnes',
        name: 'N64',
      },
    ],
  },
  {
    key: 'daohang',
    name: '导航',
    icon: 'appstore',
    child: [
      {
        key: '555',
        name: '选项5',
      },
      {
        key: 'sanji',  // 最多只能到三级导航
        name: '三级导航',
        icon: 'laptop',
        child: [
          {
            key: '666',
            name: '选项6',
            icon: 'check',
          },
          {
            key: '777',
            name: '选项7',
            icon: 'close',
          },
          {
            key: '888',
            name: '选项8',
          },
          {
            key: '999',
            name: '选项9',
          },
        ],
      },
    ],
  },
  {
    key: 'test',
    name: '测试',
    icon: 'eye',
    child: [
      {
        key: 'aaa',
        name: '选项a',
      },
      {
        key: 'bbb',
        name: '选项b',
        icon: 'pause',
      },
      {
        key: 'ccc',
        name: '选项c',
      },
      {
        key: 'sanjiaaa',  // 最多只能到三级导航
        name: '三级导航aaa',
        child: [
          {
            key: '666aa',
            name: '选项6',
            icon: 'meh',
          },
        ],
      },
      {
        key: 'sanjibbb',  // 最多只能到三级导航
        name: '三级导航bbb',
        child: [
          {
            key: '666bb',
            name: '选项6',
          },
        ],
      },
    ],
  },
];

export default sidebarMenu;

// 定义header菜单, 格式和sidebar是一样的
// 特殊的地方在于, 我规定header的最右侧必须是用户相关操作的菜单, 所以定义了一个特殊的key
// 另外注意这个菜单定义的顺序是从右向左的, 因为样式是float:right
export const headerMenu = [
  {
    // 一个特殊的key, 定义用户菜单, 在这个submenu下面设置icon/name不会生效
    key: 'userMenu',
    child: [
      {
        key: 'user333aaa',
        name: 'user333aaa',
        icon: 'windows',
      },
      {
        key: 'setting',
        name: '设置',
        icon: 'setting',
        // 对于headerMenu的菜单项, 可以让它跳到外部地址, 如果设置了url属性, 就会打开一个新窗口
        // 如果不设置url属性, 行为和sidebarMenu是一样的, 激活特定的组件, 注意在index.js中配置好路由, 否则会404
        url: 'http://inyu.com',
      },
      {
        key: 'userinfo',
        name: '个人信息',
        icon: 'user',
      },
    ],
  },
  {
    key: 'headerMenu4',
    name: '菜篮子',
    icon: 'shopping-cart',
  },
  {
    key: 'headerMenu5',
    name: '主页',
    icon:'home',
  },
];
