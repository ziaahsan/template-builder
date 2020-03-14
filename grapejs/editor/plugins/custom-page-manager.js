function customPageManager(editor) {
	const panelManager = editor.Panels;

	var pages = {
		current: 1,
		pages: [
			{ components: [], style: [] },
		]
	}

	// Adding new button
	panelManager.addButton('views', [{
		id: 'manage-pages',
		className: 'gjs-pn-btn',
		command: '',
		active: false,
		label: `<span uk-icon="list" uk-tooltip="title: Manage Pages; pos: right"></span>`
	}]);

}