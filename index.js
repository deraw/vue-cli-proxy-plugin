var proxy = require('http-proxy-middleware');

module.exports = (api, options) => {
	if (options.pluginOptions === undefined) return;
	const opts = options.pluginOptions.proxy;

	if (opts && (opts.enabled === undefined || opts.enabled)) {
		api.configureDevServer((app) => {
			app.use(proxy(
				opts.context,
				opts.options
			));
		});
	}
};
