function customizeViews(editor) {
	const panelManager = editor.Panels;

	// Views button manager
	panelManager.getButton('views', 'open-sm').set({
		id: "open-sm",
		className: 'gjs-pn-btn',
		command: "open-sm",
		active: true,
		attributes: {
			title: "Open Style Manager"
		},
		label: `<span uk-icon="paint-bucket" uk-tooltip="title: Customization; pos: right"></span>`
	});
	panelManager.getButton('views', 'open-tm').set({
		id: "open-tm",
		className: 'gjs-pn-btn',
		command: "open-tm",
		active: false,
		attributes: {
			title: "Open Settings"
		},
		label: `<span uk-icon="settings" uk-tooltip="title: Settings; pos: right"></span>`
	});
	panelManager.getButton('views', 'open-layers').set({
		id: "open-layers",
		className: 'gjs-pn-btn',
		command: "open-layers",
		active: false,
		attributes: {
			title: "Open Layers"
		},
		label: `<span uk-icon="table" uk-tooltip="title: Layers; pos: right"></span>`
	});
	panelManager.getButton('views', 'open-blocks').set({
		id: "open-blocks",
		className: 'gjs-pn-btn',
		command: "open-blocks",
		active: false,
		attributes: {
			title: "Open Blocks"
		},
		label: `<span uk-icon="grid" uk-tooltip="title: Blocks; pos: right"></span>`
	});
}