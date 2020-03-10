function customCodeEditor(editor) {
	const stylePrefix = editor.getConfig().stylePrefix;

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
	btnSave.innerHTML = 'Save Changes';
	btnSave.className = stylePrefix + 'btn-prim ' + stylePrefix + 'btn-import';

	codeDivEditor.appendChild(codeDiv);
	codeDiv.appendChild(codeDivTitle);
	codeDiv.appendChild(codeDivHTML);
	codeDiv.appendChild(btnSave);

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

	// Command for opening the edit
	command.add('edit-component-code', {
		run: function(editor, sender) {
			const component = editor.getSelected();

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
				text: 'Edit <span style="border-bottom: 1px dotted #ddedfd;color: #ddedfd;">'+component.getName()+'</span> Code',
				full: true, // Full width button
				label: false,
				command: 'edit-component-code'
			}, {
				at: 0
			});

			// Component HTML
			console.log(component.toHTML());
		}
	});
};