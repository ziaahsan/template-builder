function customizeOptions(editor) {
	const panelManager = editor.Panels;
	const command = editor.Commands

	// Command for opening the edit
	command.add('custom-clear-canvas', {
		run: function(editor, sender) {
			// Clear components
			editor.DomComponents.clear();
			// Clear styles
			editor.CssComposer.clear();
			// Clear undo history
			editor.UndoManager.clear();

			// Make message
			let msg = `
		        <div class="uk-text-left uk-text-truncate uk-animation-slide-top-small">
		        	<div class="uk-flex uk-flex-middle">
						<span class="uk-margin-remove uk-text-small">
							<span uk-icon="icon: check; ratio: 0.95;"></span>
							<span>You've cleared your canvas.</span>
						</span>
					</div>
				</div>
			`;

			// Send notification
			UIkit.notification({
				message: msg,
				status: 'primary',
				pos: 'bottom-right',
				group: 'message',
				timeout: 3000
			});
		}
	});

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

	// Adding new button
	panelManager.addButton('options', [{
		id: 'clear-canvas',
		className: 'gjs-pn-btn',
		command: 'custom-clear-canvas',
		active: false,
		label: `<span uk-icon="trash" uk-tooltip="title: Clear Canvas; pos: bottom"></span>`
	}, ]);

}