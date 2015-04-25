Package.describe({
	name: "zhenya:forkme",
	version: "0.0.1",
	summary: "Github fork me CSS ribbon based on simonwhitaker/github-fork-ribbon-css",
	git: "https://github.com/zhenyasav/forkme",
	documentation: "README.md"
});

Package.onUse(function(api) {
	api.versionsFrom('0.1');
	
	api.use(['templating'], 'client');

	api.addFiles([
		'forkme.html', 
		'forkme.coffee'
		], 'client');
});