function customCodeEditor(editor) {
	const stylePrefix = editor.getConfig().stylePrefix;

	// let code placeholder
	let selectedComponent = '';

	// Div set up
	let codeDivEditor = document.createElement('div');
	codeDivEditor.setAttribute("class", "gjs-cm-editor-c");

	let codeDiv = document.createElement('div');
	codeDiv.setAttribute("class", "gjs-cm-editor");
	codeDiv.setAttribute("id", "gjs-cm-htmlmixed");

	let codeDivTitle = document.createElement('div');
	codeDivTitle.setAttribute("id", "gjs-cm-title");
	codeDivTitle.innerHTML = "HTML";

	let codeDivHTML = document.createElement('div');
	codeDivHTML.setAttribute("id", "gjs-cm-code");

	let btnSave = document.createElement('button');
	btnSave.innerHTML = 'Apply <span class="dotted-white-bottom-border">HTML</span> Changes';
	btnSave.className = stylePrefix + 'btn-prim ' + stylePrefix + 'btn-import ' + stylePrefix + 'btn--full';

	codeDiv.appendChild(codeDivTitle);
	codeDiv.appendChild(codeDivHTML);
	codeDiv.appendChild(btnSave);

	codeDivEditor.appendChild(codeDiv);

	const command = editor.Commands
	const modal = editor.Modal;

	// CodeMirror setup
	var htmlCodeViewer = editor.CodeManager.getViewer('CodeMirror').clone();
	htmlCodeViewer.set({
		codeName: 'htmlmixed',
		readOnly: 0,
		theme: 'hopscotch',
		autoBeautify: true,
		autoCloseTags: true,
		autoCloseBrackets: true,
		lineWrapping: true,
		styleActiveLine: true,
		smartIndent: true,
		indentWithTabs: true,
		tabSize: 3,
		indentUnit: 3
	});

	// Save code changes
	btnSave.onclick = function() {
		// Get the new component code
		let htmlComponentCode = htmlCodeViewer.editor.getValue();

		// On the sleced component update the new htmlComponentCode
		let replacedComponent = selectedComponent.replaceWith(htmlComponentCode.trim());
		// Now select the replacedComponent
		editor.select(replacedComponent);

		// Make message
		let msg = `
	        <div class="uk-text-left uk-text-truncate uk-animation-slide-top-small">
	        	<div class="uk-flex uk-flex-middle">
					<span class="uk-margin-remove uk-text-small">
						<span uk-icon="icon: check; ratio: 0.95;"></span>
						<span>You've updated <span class="dotted-white-bottom-border">${replacedComponent.getName()}</span> component.</span>
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

		// close popup
		modal.close();
	};

	// Command for opening the edit
	command.add('edit-component-code', {
		run: function(editor, sender) {
			let component = editor.getSelected();

			// Make sure component is selected
			if (component == undefined) {
				console.log("Warnning: No component was selected when executing 'edit-component-code' command");
				return;
			}

			if (modal.isOpen())
				modal.close();

			let htmlViewer = htmlCodeViewer.editor;
			if (!htmlViewer) {
				let txtarea = document.createElement('textarea');
				codeDivHTML.appendChild(txtarea);
				htmlCodeViewer.init(txtarea);
				htmlViewer = htmlCodeViewer.editor;
			}

			let htmlCode = component.toHTML();

			// Set the current component of the component to selectedComponent
			// so we can compare old and replace with new
			selectedComponent = component;

			// Now the set the component code
			htmlCodeViewer.setContent(htmlCode);

			modal.setTitle('Component Code');
			modal.setContent(codeDivEditor);
			modal.open();

			htmlViewer.refresh();
		}
	});

	// Open component settings on selection
	editor.on('component:selected', () => {
		const component = editor.getSelected();

		// Switch view to open-tm (open trait manager)
		editor.Panels.getButton('views', 'open-tm').set('active', true);

		// Get the trait manger code button existance
		const tmCodeBtn = component.get('traits').where({
			name: 'tm-code-btn'
		});

		// Is the array empty?
		if (tmCodeBtn.length == 0) {

			// Adding button to trait manager
			component.addTrait({
				name: 'tm-code-btn', // Name is how we ref the trait
				type: 'button',
				text: 'Edit <span class="dotted-white-bottom-border">' + component.getName() + '</span> Code',
				full: true, // Full width button
				label: false,
				command: 'edit-component-code'
			}, {
				at: 0
			});
		}
	});
};