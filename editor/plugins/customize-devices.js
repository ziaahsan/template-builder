function customizeDevices(editor) {
	const panelManager = editor.Panels;

	// Hide default devices
	editor.getConfig().showDevices = 0;

	// Device icons manager
	panelManager.addPanel({ id: "devices-c" }).get("buttons").add([
		{
			id: "set-device-desktop",
			command: function(e) { return e.setDevice("Desktop") },
			className: "gjs-dekstop-device",
			active: true,
			label: `<span uk-icon="icon: desktop; ratio: 1" uk-tooltip="title: Desktop Layout; pos: top"></span>`
		},
		{
			id: "set-device-tablet",
			command: function(e) { return e.setDevice("Tablet") },
			className: "gjs-tablet-device",
			label: `<span uk-icon="icon: tablet; ratio: 1" uk-tooltip="title: Tablet Layout; pos: top"></span>`
		},
		{
			id: "set-device-mobile",
			command: function(e) { return e.setDevice("Mobile portrait") },
			className: "gjs-mobile-portrait-device",
			label: `<span uk-icon="icon: phone; ratio: 1" uk-tooltip="title: Phone Layout; pos: top"></span>`
		},
	]);

}