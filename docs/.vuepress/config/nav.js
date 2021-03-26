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
          { text: '编译原理', icon: 'bianyi', link: 'compile/1' }
        ]
      },
      {
        text: '编程语言',
        prefix: '/language/',
        items: [
          { text: 'C', icon: 'Cyuyan', link: 'c/1' },
          { text: 'JavaScript', icon: 'JavaScript', link: 'js/1' },
          { text: 'Python', icon: 'python', link: 'python/1' }
        ]
      },
      { 
        text: '数据结构与算法',
        prefix: '/ds_algorithm/',
        items: [
          { text: '数据结构', icon: 'suanfa', link: 'ds/1' },
          { text: '算法', icon: 'shujujiegou', link: 'algorithm/1' },
        ]
      },
      {
        text: '开发',
        prefix: '/',
        items: [
          { text: 'Web', icon: 'jiemian', link: 'web/html/1' },
          { text: '后端', icon: 'shujuchuli', link: 'backend/nodejs/1' }
        ]
      },
      {
        text: '数据库',
        prefix: '/database/',
        items: [
          { text: 'SQL', icon: 'SQL', link: 'sql/1' },
          { text: 'MySQL', icon: 'MySQL', link: 'mysql/1' },
          { text: 'MongoDB', icon: 'mongoDB', link: 'mongodb/1' }
        ]
      },
      {
        text: '工具',
        prefix: '/tool/',
        items: [
          { text: 'Git', icon: 'git', link: 'git/1' }
        ]
      }
    ]
  },
  {
    text: '学科',
    icon: 'kemu',
    items: [
      { text: '英语', icon: 'yingyu', link: '/subject/english/nce/1' },
      { text: '数学', icon: 'math', link: '/subject/math/1' }
    ]
  },
  {
    text: '杂七杂八',
    icon: 'baibaoxiang',
    items: [
      { text: '资源', icon: 'gongju', link: '/store/tools' },
      { text: '麻烦', icon: 'zhongzhengji', link: '/store/trouble' },
      { text: '技巧', icon: 'jiqiao', link: '/store/essay/3'}
    ]
  }
];