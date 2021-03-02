module.exports = [
  { text: '首页', icon: 'zhuye', link: '/' },
  {
    text: '计算机',
    icon: 'jisuanji',
    items: [
      {
        text: '基础',
        prefix: '/basic/',
        items: [
          { text: '计算机组成', icon: 'jiegou', link: 'organization/1' },
          { text: '编译原理', icon: 'bianyi', link: 'compile/1' },
        ]
      },
      {
        text: '编程语言',
        prefix: '/language/',
        items: [
          { text: 'C', icon: 'Cyuyan', link: 'c/1' },
          { text: 'JavaScript', icon: 'JavaScript', link: 'js/1' },
          { text: 'Python', icon: 'python', link: 'python/1' },
          { text: 'SQL', icon: 'SQL', link: 'sql/1' },
        ]
      },
      {
        text: '开发',
        icon: 'youtian',
        prefix: '/',
        items: [
          { text: 'Web', icon: 'jiemian', link: 'web/html/1' },
          { text: '后端', icon: 'shujuchuli', link: 'backend/nodejs/1' }
        ]
      },
      // { text: '算法', icon: 'suanfa', link: '/algorithm/1' },
      // {
      //   text: '数据库',
      //   icon: 'shujuku',
      //   prefix: '/database/',
      //   items: [
      //     {text: 'MySQL', icon: 'MySQL', link: 'mysql/'},
      //     {text: 'MongoDB', icon: 'mongoDB', link: 'mongodb/'}
      //   ]
      // },
    ]
  },
  {
    text: '工具',
    icon: 'gongju',
    prefix: '/tool/',
    items: [
      { text: 'Git', icon: 'git', link: 'git/1' }
    ]
  },
  {
    text: '救赎',
    icon: 'jiuyuan',
    items: [
      { text: '随笔', icon: 'note', link: '/salvation/essay/3' },
      { text: '英语', icon: 'yingyu', link: '/salvation/english/nce/1' },
      { text: '数学', icon: 'math', link: '/salvation/math/1' }
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