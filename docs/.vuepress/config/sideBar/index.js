const computer = require('./computer');

module.exports = {
  "/computer/basic/": computer.basic,
  "/computer/language/": computer.language,
  "/computer/front/": computer.front,
  "/computer/lead/": computer.lead,
  "/computer/database/": computer.database,
  "/computer/rvc/": computer.rvc,
  "/computer/dsal/": computer.dsal,

  "/thought/": require("./thought"),
  "/store/": require("./store"),
  "/computer/": [
    '',
    "basic/",
    "language/",
    "front/",
    "lead/",
    "database/",
    "rvc/",
    "dsal/",
  ],

  "/about/": ["me"]
};
