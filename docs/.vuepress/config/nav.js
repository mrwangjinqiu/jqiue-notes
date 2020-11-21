module.exports = [
  { text: '首页', icon: 'zhuye', link: '/' },
  {
    text: '计算机基础',
    icon: 'jisuanji',
    prefix: '/cs/',
    items: [
      { text: '计算机组成', icon: 'jiegou', link: 'organization/' },
      // {text: '操作系统', icon: 'caozuoxitong', link: 'os/'},
      { text: '编译原理', icon: 'bianyi', link: 'compile/' },
      // {text: '计算机网络', icon: 'wangluo', link: 'networking/'}
    ]
  },
  {
    text: '编程语言',
    icon: 'kaifayuyan',
    prefix: '/language/',
    items: [
      { text: 'C', icon: 'Cyuyan', link: 'c/' },
      // {text: 'C++', icon: 'cplusplus', link: 'cpp/'},
      // {text: 'Java', icon: 'java', link: 'java/'},
      { text: 'JavaScript', icon: 'JavaScript', link: 'js/' },
      { text: 'Python', icon: 'python', link: 'python/' }
    ]
  },
  {
    text: '算法',
    icon: 'suanfa',
    prefix: '/algorithm/',
    items: [
      { text: '数据结构', icon: 'shujujiegou', link: 'ds/' },
      // {text: '排序算法', icon: 'paixu', link: 'sort/'},
      // {text: '算法思想', icon: 'sixiang', link: 'thought/'}
    ]
  },
  // {
  //   text: '数据库',
  //   icon: 'shujuku',
  //   prefix: '/database/',
  //   items: [
  //     {text: 'MySQL', icon: 'MySQL', link: 'mysql/'},
  //     {text: 'MongoDB', icon: 'mongoDB', link: 'mongodb/'}
  //   ]
  // },
  {
    text: '开发',
    icon: 'youtian',
    prefix: '/',
    items: [
      { text: '前端', icon: 'jiemian', link: 'web/' },
      { text: '后端', icon: 'shujuchuli', link: 'lead/' }
    ]
  },
  {
    text: '工具',
    icon: 'gongju',
    prefix: '/tool/',
    items: [
      { text: 'Git', icon: 'git', link: 'git/' }
    ]
  },
  {
    text: '救赎',
    icon: 'jiuyuan',
    items: [
      { text: '随笔', icon: 'note', link: '/salvation/essay/' },
      { text: '英语', icon: 'yingyu', link: '/salvation/english/' }
    ]
  },
  {
    text: '百宝箱',
    icon: 'baibaoxiang',
    items: [
      { text: '资源', icon: 'gongju', link: '/store/tools' },
      { text: '麻烦', icon: 'zhongzhengji', link: '/store/trouble' }
    ]
  }
];