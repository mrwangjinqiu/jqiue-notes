const general = {
  title: "基本概念",
  path: "/language/general/",
  prefix: "/language/general/",
  collapsable: false,
  children: []
};

const c = {
  title: "C",
  prefix: "/language/c/",
  collapsable: false,
  children: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
};

const js = {
  title: "JavaScript",
  prefix: "/language/js/",
  collapsable: false,
  children: ["1", "2", "3", "4", "5"]
};

const python = {
  title: "Python",
  prefix: "/language/python/",
  collapsable: false,
  children: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
};

const sql = {
  title: "SQL",
  prefix: "/language/sql/",
  collapsable: false,
  children: ["1", "2", "3"]
};

module.exports = {
  basic: [
    {
      title: "计算机组成",
      prefix: "/basic/organization/",
      collapsable: false,
      children: ["1", "2"]
    },
    // {
    //   title: "操作系统",
    //   prefix: "/basic/os/",
    //   collapsable: false,
    //   children: []
    // },
    {
      title: "编译原理",
      prefix: "/basic/compile/",
      collapsable: false,
      children: ["1", "2"]
    },
  ],
  language: [
    general, 
    c, 
    js,
    python,
    sql,
    {
      title: "其他",
      prefix: "/language/other/",
      collapsable: false,
      children: ['1', '2', '3', '4']
    }
  ],
  algorithm: [
    {
      title: "算法",
      prefix: "/algorithm/",
      collapsable: false,
      children: ["1", "2", "3", "4"]
    }
  ],
  web: [
    {
      title: "HTML",
      prefix: "html/",
      collapsable: false,
      children: ["1", "2", "3", "4", "5"]
    },
    {
      title: "CSS",
      prefix: "css/",
      collapsable: false,
      children: ["1", "2", "3", "4", "5", "6", "7", "8"]
    },
    {
      title: "WebAPI",
      prefix: "webapi/",
      collapsable: false,
      children: ["1", "2", "3", "4", "5", '6']
    },
    {
      title: "Vue",
      prefix: "vue/",
      collapsable: false,
      children: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"]
    },
    {
      title: "NPM",
      prefix: "npm/",
      collapsable: false,
      children: ["1", "2", "3"]
    },
    {
      title: "Webpack",
      prefix: "webpack/",
      collapsable: false,
      children: ["1"]
    },
    {
      title: "其他",
      prefix: "other/",
      collapsable: false,
      children: ["1", "2", "3"]
    }
  ],
  backend: [
    {
      title: "NodeJS",
      prefix: "nodejs/",
      collapsable: false,
      children: ["1", "2", "3"]
    },
  ],
  tool: [
    {
      title: "Git",
      prefix: "/tool/git/",
      collapsable: false,
      children: ["1", "2", "3", "4"]
    }
  ]
};
