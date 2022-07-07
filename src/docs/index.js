const basicInfo = require('./basicInfo');
const servers = require('./servers');
const tags = require('./tags');
const components = require('./components');
const routes = require('./routes')

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...routes
}