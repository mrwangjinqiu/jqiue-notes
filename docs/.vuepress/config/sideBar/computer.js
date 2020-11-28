const general = {
  title: "通用语法",
  path: "/language/general/",
  prefix: "/language/general/",
  collapsable: false,
  children: []
};

const c = {
  title: "C",
  path: "/language/c/",
  prefix: "/language/c/",
  collapsable: false,
  children: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
};

const cpp = {
  title: "C++",
  path: "/language/cpp/",
  prefix: "/language/cpp/",
  collapsable: false,
  children: []
};

const java = {
  title: "Java",
  path: "/language/java/",
  prefix: "/language/java/",
  collapsable: false,
  children: []
};

const js = {
  title: "JavaScript",
  path: "/language/js/",
  prefix: "/language/js/",
  collapsable: false,
  children: ["1"]
};

const python = {
  title: "Python",
  path: "/language/python/",
  prefix: "/language/python/",
  collapsable: false,
  children: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
};

module.exports = {
  cs: [
    {
      title: "计算机组成",
      path: "/cs/organization/",
      prefix: "/cs/organization/",
      collapsable: false,
      children: ["1", "2", "3"]
    },
    // {
    //   title: "操作系统",
    //   path: "/cs/os/",
    //   prefix: "/cs/os/",
    //   collapsable: false,
    //   children: []
    // },
    {
      title: "编译原理",
      path: "/cs/compile/",
      prefix: "/cs/compile/",
      collapsable: false,
      children: ["1", "2"]
    },
  ],
  language: [general, c, js, python],
  algorithm: [
    "",
    {
      title: "数据结构",
      path: "/algorithm/ds/",
      prefix: "/algorithm/ds/",
      collapsable: false,
      children: []
    },
    // {
    //   title: "排序算法",
    //   path: "/algorithm/sort/",
    //   prefix: "/algorithm/sort/",
    //   collapsable: false,
    //   children: []
    // },
    // {
    //   title: "算法思想",
    //   path: "/algorithm/thought/",
    //   prefix: "/algorithm/thought/",
    //   collapsable: false,
    //   children: []
    // },
  ],
  web: [
    "",
    {
      title: "HTML",
      path: 'html/',
      prefix: "html/",
      collapsable: false,
      children: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
      title: "CSS",
      path: 'css/',
      prefix: "css/",
      collapsable: false,
      children: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "reset"]
    },
    // {
    //   title: "jQuery",
    //   path: 'jquery/',
    //   prefix: "jquery/",
    //   collapsable: false,
    //   children: []
    // },
    // {
    //   title: "Vue",
    //   path: 'vue/',
    //   prefix: "vue/",
    //   collapsable: false,
    //   children: ["1", "2", "3"]
    // },
    {
      title: "NPM",
      path: 'npm/',
      prefix: "npm/",
      collapsable: false,
      children: ["1", "2", "3"]
    },
    {
      title: "Webpack",
      path: 'webpack/',
      prefix: "webpack/",
      collapsable: false,
      children: ["1", "2", "3"]
    },
    {
      title: "其他",
      path: "other/",
      prefix: "other/",
      collapsable: false,
      children: ["1", "2", "3", "4", "5"]
    }
  ],
  lead: [
    "",
    {
      title: "NodeJS",
      path: "nodejs/",
      prefix: "nodejs/",
      collapsable: false,
      children: ["1", "2"]
    },
  ],
  tool: [
    {
      title: "Git",
      path: "/tool/git/",
      prefix: "/tool/git/",
      collapsable: false,
      children: ["1", "2", "3", "4", "5", "6", "7"]
    }
  ],
  database: [
    {
      title: "MySQL",
      path: "/database/mysql/",
      prefix: "/database/mysql/",
      collapsable: false,
      children: []
    },
    {
      title: "MongoDB",
      path: "/database/mongodb/",
      prefix: "/database/mongodb/",
      collapsable: false,
      children: []
    },
  ],
};
