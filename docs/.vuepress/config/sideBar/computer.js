const general = {
  title: "通用概念",
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

const cpp = {
  title: "C++",
  prefix: "/language/cpp/",
  collapsable: false,
  children: []
};

const java = {
  title: "Java",
  prefix: "/language/java/",
  collapsable: false,
  children: []
};

// const js = {
//   title: "JavaScript",
//   prefix: "/language/js/",
//   collapsable: false,
//   children: ["1"]
// };

const python = {
  title: "Python",
  prefix: "/language/python/",
  collapsable: false,
  children: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]
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
    // js, 
    python,
    {
      title: "其他",
      prefix: "/language/other/",
      collapsable: false,
      children: ["1"]
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
      children: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
    },
    {
      title: "CSS",
      prefix: "css/",
      collapsable: false,
      children: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "reset"]
    },
    // {
    //   title: "jQuery",
    //   prefix: "jquery/",
    //   collapsable: false,
    //   children: []
    // },
    {
      title: "Vue",
      prefix: "vue/",
      collapsable: false,
      children: ["1", "2", "3", "4", "5", "6", "7", "8"]
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
      children: ["1", "2", "3"]
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
      children: ["1", "2"]
    },
  ],
  tool: [
    {
      title: "Git",
      prefix: "/tool/git/",
      collapsable: false,
      children: ["1", "2", "3", "4"]
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
