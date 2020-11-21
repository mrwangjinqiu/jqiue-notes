const {config} = require("vuepress-theme-hope");

module.exports = config({
  title: "JQiue's notes",
  description: "每一个想要学习的念头，都有可能是未来的你在向你求救",
  // base: '/jqiue_temp_site/', // 部署到自定义域名时需要删掉
  themeConfig: {
    logo: "/icon.png",
    baseLang: "zh-CN",
    hostname: "https://wjqis.me",
    nav: require("./config/nav"),
    sidebar: require("./config/sideBar"),
    blog: {
      name: "JQiue",
      intro: "/about/me.html",
      sidebarDisplay: "mobile",
      links: {
        QQ: "http://wpa.qq.com/msgrd?v=3&uin=861947542&site=qq&menu=yes",
        Qzone: "https://user.qzone.qq.com/861947542",
        Wechat: "https://mp.weixin.qq.com/s/MiOS60rgwWDOdb_-KKs7kw",
        Zhihu: "https://www.zhihu.com/people/JQiue",
        Github: "https://github.com/JQiue",
        Gmail: "mailto:jqiue@foxmail.com"
      },
    },
    mdEnhance: {
      lineNumbers: false,
      align: true,
      flowchart: true,
      sup: true,
      sub: true
    },
    comment: {
      type: "valine",
      appId: "gMiT8uL1OilW1RPmreh23QNJ-MdYXbMMI",
      appKey: "Co0JBAOd7vwoz9UONi5BLjTg"
    },
    footer: {
      copyright: "Copyright © 2019-present JQiue",
      display: true,
    },
    pwa: {
      favicon: "/icon.png",
      manifest: '/manifest.json',
      themeColor: "#5c92d1",
      appleStatusBarColor: "black",
      appleIcon: "/assets/icon/appleIcon152.png",
      msTileImage: "/assets/icon/msIcon144.png",
      msTileColor: "#ffffff"
    }
  },
  plugins: [
    [
      "demo-code",
      {
        jsLibs: [
          'https://unpkg.com/tua-storage/dist/TuaStorage.umd.js',
        ],
        showText: 'show code',
        hideText: 'hide',
        minHeight: 0,
        onlineBtns: {
          codepen: false,
          jsfiddle: false,
          codesandbox: false,
        }
      }
    ]
  ],
});
