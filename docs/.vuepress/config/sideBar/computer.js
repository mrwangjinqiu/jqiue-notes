basic_path = "/computer/basic/"
dsal_path = "/computer/dsal/"
front_path = "/computer/front/"
language_path = "/computer/language/"
lead_path = "/computer/lead/"
rvc_path = "/computer/rvc/"
database_path = "/computer/database/"

const general = {
  title: "通用语法",
  path: language_path + "general/",
  prefix: "general/",
  collapsable: false,
  children: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
}

const c = {
  title: "C",
  path: language_path + "c/",
  prefix: "c/",
  collapsable: false,
  children: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"]
};

const cpp = {
  title: "C++",
  path: language_path + "cpp/",
  prefix: "cpp/",
  collapsable: false,
  children: ["1"]
};

const java = {
  title: "Java",
  path: language_path + "java/",
  prefix: "java/",
  collapsable: false,
  children: [],
};

const js = {
  title: "JavaScript",
  path: language_path + "js/",
  prefix: "js/",
  collapsable: false,
  children: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
};

const python = {
  title: "Python",
  collapsable: false,
  prefix: "python/",
  children: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
};

module.exports = {
  language: ["", general, c, cpp, java, js, python],
  rvc: ["", "commit", "emoji", "ssh"],
  basic: [
    "",
    {
      title: "计算机组成",
      path: basic_path + "organization/",
      collapsable: false,
      prefix: "organization/",
      children: ["1"]
    },
    {
      title: "操作系统",
      path: basic_path + "os/",
      prefix: "os/",
      collapsable: false,
      children: ["1"]
    },
    {
      title: "编译原理",
      path: basic_path + "compile/",
      prefix: "compile/",
      collapsable: false,
      children: ["1"]
    },
  ],
  front: [
    "",
    {
      title: "HTML",
      prefix: "html/",
      collapsable: false,
      children: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
    },
    {
      title: "CSS",
      prefix: "css/",
      collapsable: false,
      children: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "reset"]
    },
    {
      title: "jQuery",
      prefix: "jquery/",
      collapsable: false,
      children: ["1"],
    },
    {
      title: "Vue",
      prefix: "vue/",
      collapsable: false,
      children: ["1", "2", "3"],
    },
    {
      title: "NPM",
      collapsable: false,
      prefix: "npm/",
      children: ["1", "2", "3"],
    },
    {
      title: "Webpack",
      collapsable: false,
      prefix: "webpack/",
      children: ["1", "2", "3", "4", "5"],
    },
    {
      title: "其他",
      collapsable: false,
      prefix: "other/",
      children: ["1", "2", "3", "4", "5"],
    }
  ],
  lead: [
    "",
    {
      title: "NodeJS",
      path: "nodejs/",
      prefix: "nodejs/",
      collapsable: false,
      children: ["1", "2", "3", "4", "5", "6", "7"],
    },
  ],
  database: [
    "",
    {
      title: "MySQL",
      path: database_path + 'mysql/',
      prefix: "mysql/",
      collapsable: false,
      children: ["1"]
    },
    {
      title: "MongoDB",
      path: database_path + 'mongodb/',
      prefix: "mongodb/",
      collapsable: false,
      children: ["1"]
    },
  ],
  dsal: [
    "",
    {
      title: "线性结构",
      path: dsal_path + 'linear/',
      prefix: "linear/",
      collapsable: false,
      children: ["1"]
    },
    {
      title: "树",
      path: dsal_path + 'tree/',
      prefix: "tree/",
      collapsable: false,
      children: ["1"]
    },
    {
      title: "图",
      path: dsal_path + 'graph/',
      prefix: "graph/",
      collapsable: false,
      children: ["1"]
    },
  ]
};
