Ext.ns('modckeditor.tools');


modckeditor.tools.getFileBrowseUrl = function () {
	var url = MODx.config['manager_url'] + 'index.php';
	var query = {a: MODx.action['browser'], source: MODx.config['default_media_source']};
	return url + '?' + Ext.urlEncode(query);
};


modckeditor.tools.getUpdateButton = function () {
	var pageButtons = MODx.activePage ? MODx.activePage.buttons : {};

	console.log(pageButtons);

	for (var button in pageButtons) {
		var process = pageButtons[button].process;
		if (!process)
			continue;
		if (process.split('/').pop() == 'update') {
			return pageButtons[button];
		}
	}
	return null;
};
