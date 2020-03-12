function customizeOptions(editor) {
	let panelManager = editor.Panels;

	// Options button manager
	panelManager.getButton('options', 'sw-visibility').set({
		id: "sw-visibility",
		className: 'gjs-pn-btn',
		command: "sw-visibility",
		active: true,
		label: `<span uk-icon="thumbnails" uk-tooltip="title: Guide Lines; pos: bottom"></span>`
	});
	panelManager.getButton('options', 'preview').set({
		id: "preview",
		className: 'gjs-pn-btn',
		command: "preview",
		active: false,
		label: `<span uk-icon="push" uk-tooltip="title: Preview; pos: bottom"></span>`
	});
	panelManager.getButton('options', 'fullscreen').set({
		id: "fullscreen",
		className: 'gjs-pn-btn',
		command: "fullscreen",
		active: false,
		label: `<span uk-icon="expand" uk-tooltip="title: Set Fullscreen; pos: bottom"></span>`
	});
	panelManager.getButton('options', 'export-template').set({
		id: "export-template",
		className: 'gjs-pn-btn',
		command: "export-template",
		active: false,
		label: `<span uk-icon="code" uk-tooltip="title: Show Code; pos: bottom"></span>`
	});

}