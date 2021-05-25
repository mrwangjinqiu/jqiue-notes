module.exports = {
  "/basis/": require('./basis'),
  "/language/": require('./language'),
  "/ds_algorithm/": require('./ds_algorithm'),
  "/database/": require('./database'),
  "/application/web/": require('./application').web,
  "/application/backend/": require('./application').backend,
  "/application/desktop/": require('./application').desktop,
  "/subject/": require('./subject'),
  "/devtools/": require('./devtools'),
  "/store/": require('./store'),
  "/about/": ['me', 'content', 'changelist']
};