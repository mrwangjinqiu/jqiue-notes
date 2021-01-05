const computer = require('./computer');

module.exports = {
  "/basic/": computer.basic,
  "/language/": computer.language,
  "/algorithm/": computer.algorithm,
  "/database/": computer.database,
  "/web/": computer.web,
  "/backend/": computer.backend,
  "/tool/": computer.tool,
  "/salvation/": require("./salvation"),
  "/store/": require("./store"),
  "/about/": ["me", "content"]
};
