module.exports = [
  { text: '首页', icon: 'zhuye', link: '/' },
  {
    text: '所学',
    icon: 'world',
    items: [
      { text: '所学所见', icon: 'jianzheng', link: '/computer/' },
      {
        text: '编程语言',
        prefix: '/computer/language/',
        items: [
          { text: 'C', icon: 'Cyuyan', link: 'c/' },
          { text: 'C++', icon: 'cplusplus', link: 'cpp/' },
          { text: 'Java', icon: 'java', link: 'java/' },
          { text: 'JavaScript', icon: 'JavaScript', link: 'js/' },
          { text: 'Python', icon: 'python', link: 'python/' }
        ]
      },
      {
        text: '其他',
        icon: 'other',
        prefix: '/computer/',
        items: [
          { text: '前端', icon: 'qianduan', link: 'front/' },
          { text: '后端', icon: 'houduan', link: 'lead/' },
          { text: '数据库', icon: 'shujuku', link: 'database/' },
          { text: '版本控制', icon: 'git', link: 'rvc/' },
          { text: '计算机基础', icon: 'jisuanji', link: 'basic/' },
          { text: '数据结构与算法', icon: 'suanfa', link: 'dsal/' }
        ]
      }
    ]
  },
  {
    text: '觉悟',
    icon: 'Financialregulation',
    items: [
      { text: '在这里', icon: 'there', link: '/thought/' },
      { text: '随笔', icon: 'note', link: '/thought/essay/' },
      { text: '英语', icon: 'yingyu', link: '/thought/english/' }
    ]
  },
  {
    text: '仓库',
    icon: 'store',
    items: [
      { text: '关于仓库', icon: 'kuwei', link: '/store/' },
      {
        text: '软件',
        prefix: '/store/save/',
        items: [
          { text: '常用', icon: 'changyong', link: 'software' },
          { text: '开发', icon: 'youtian', link: 'dev' },
          { text: '操作系统', icon: 'caozuoxitong', link: 'systemImage' }
        ]
      },
      {
        text: '问题',
        prefix: '/store/diagnosis/',
        items: [
          { text: '小毛病', icon: 'bingdu', link: 'minorProblem' },
          { text: '大毛病', icon: 'zhongzhengji', link: 'biggerProblem' }
        ]
      }
    ]
  }
];