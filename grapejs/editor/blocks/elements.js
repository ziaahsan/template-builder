blockManager.add('layout-section', {
	category: categories.layout,
	attributes: {
		title: 'Insert section'
	},
	label:
	`
		<div>
			
			<svg data-icon="index" aria-hidden="true" focusable="false" width="62" height="57" viewBox="0 0 62 57" class="bem-Svg" style="display: block; transform: translate(0px, 0px);"><path opacity=".2" fill="currentColor" d="M5 10h52v16H5z"></path><g fill="currentColor"><path d="M5 10h2v4H5zm50 0h2v4h-2zM7 10h2v2H7zm16 0h4v2h-4zm-6 0h4v2h-4zm-6 0h4v2h-4zm18 0h4v2h-4zm6 0h4v2h-4zm6 0h4v2h-4zM23 24h4v2h-4zm-6 0h4v2h-4zm-6 0h4v2h-4zm18 0h4v2h-4zm6 0h4v2h-4zm6 0h4v2h-4zm6-14h4v2h-4zm0 14h4v2h-4z"></path><path d="M53 10h4v2h-4zm2 12h2v4h-2zM5 22h2v4H5zm0-6h2v4H5zm50 0h2v4h-2zm-2 8h2v2h-2z"></path><path d="M5 24h4v2H5z"></path></g><g opacity=".3" fill="currentColor"><path d="M5 29h2v4H5zm50 0h2v4h-2zM7 29h2v2H7zm16 0h4v2h-4zm-6 0h4v2h-4zm-6 0h4v2h-4zm18 0h4v2h-4zm6 0h4v2h-4zm6 0h4v2h-4zM23 43h4v2h-4zm-6 0h4v2h-4zm-6 0h4v2h-4zm18 0h4v2h-4zm6 0h4v2h-4zm6 0h4v2h-4zm6-14h4v2h-4zm0 14h4v2h-4z"></path><path d="M53 29h4v2h-4zm2 12h2v4h-2zM5 41h2v4H5zm0-6h2v4H5zm50 0h2v4h-2zm-2 8h2v2h-2z"></path><path d="M5 43h4v2H5z"></path></g><path opacity=".4" d="M57 10v16H5V10h52m1-1H4v18h54V9z"></path></svg>
			<div class="uk-text-normal uk-text-bold">Section</div>
		</div>
	`,
	content:
	`
		<div class="uk-section uk-section-default uk-padding-remove uk-position-relative">
		    <div class="uk-container uk-margin-small uk-padding-medium uk-container-large">
		    	<div class="uk-height-large uk-placeholder uk-flex uk-flex-middle uk-flex-center">[Remove and insert your <i>components</i>]</div>
		    </div>
		</div>
	`,
	render: ({ model, className }) => `<div class="${className}__my-wrap"> ${model.get('label')} </div>`,
});
blockManager.add('layout-container', {
	category: categories.layout,
	attributes: {
		title: 'Insert container'
	},
	label:
	`
		<div>
			<svg data-icon="index" aria-hidden="true" focusable="false" width="62" height="57" viewBox="0 0 62 57" class="bem-Svg" style="display: block; transform: translate(0px, 0px);"><path opacity=".2" fill="currentColor" d="M14 10h34v34H14z"></path><g fill="currentColor"><path d="M14 10h2v4h-2zm32 0h2v4h-2zm-30 0h2v2h-2zm10 0h4v2h-4zm-6 0h4v2h-4zm12 0h4v2h-4zm-6 32h4v2h-4zm-6 0h4v2h-4zm12 0h4v2h-4zm6-32h4v2h-4zm0 32h4v2h-4z"></path><path d="M44 10h4v2h-4zm2 30h2v4h-2zm-32 0h2v4h-2zm0-18h2v4h-2zm0-6h2v4h-2zm32 6h2v4h-2zm-32 6h2v4h-2zm32 0h2v4h-2zm-32 6h2v4h-2zm32 0h2v4h-2zm0-18h2v4h-2zm-2 26h2v2h-2z"></path><path d="M14 42h4v2h-4z"></path></g><path opacity=".4" d="M48 10v34H14V10h34m1-1H13v36h36V9z"></path></svg>
			<div class="uk-text-normal uk-text-bold">Container</div>
		</div>
	`,
	content: `<div class="uk-container uk-padding-large"></div>`,
	render: ({ model, className }) => `<div class="${className}__my-wrap"> ${model.get('label')} </div>`,
});
blockManager.add('layout-grid', {
	category: categories.layout,
	attributes: {
		title: 'Insert grid'
	},
	label:
	`
		<div>
			<svg data-icon="index" aria-hidden="true" focusable="false" width="60" height="57" viewBox="0 0 60 57" class="bem-Svg" style="display: block; transform: translate(0px, 0px);"><path opacity=".4" d="M28 9v15H13V9h15zm1-1H12v17h17V8z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 9h4v2h-2v2h-2V9zm0 9v-3h2v3h-2zm0 2v4h4v-2h-2v-2h-2zm13 0v2h-2v2h4v-4h-2zm2-2v-3h-2v3h2zm-2-7v2h2V9h-4v2h2zm-4 0h-3V9h3v2zm0 11h-3v2h3v-2z" fill="currentColor"></path><path opacity=".2" d="M32 9h15v15H32V9z" fill="currentColor"></path><path opacity=".4" d="M47 9v15H32V9h15zm1-1H31v17h17V8z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M32 9h4v2h-2v2h-2V9zm0 9v-3h2v3h-2zm0 2v4h4v-2h-2v-2h-2zm13 0v2h-2v2h4v-4h-2zm2-2v-3h-2v3h2zm-2-7v2h2V9h-4v2h2zm-4 0h-3V9h3v2zm0 11h-3v2h3v-2z" fill="currentColor"></path><path opacity=".2" d="M32 28h15v15H32V28z" fill="currentColor"></path><path opacity=".4" d="M47 28v15H32V28h15zm1-1H31v17h17V27z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M32 28h4v2h-2v2h-2v-4zm0 9v-3h2v3h-2zm0 2v4h4v-2h-2v-2h-2zm13 0v2h-2v2h4v-4h-2zm2-2v-3h-2v3h2zm-2-7v2h2v-4h-4v2h2zm-4 0h-3v-2h3v2zm0 11h-3v2h3v-2z" fill="currentColor"></path><path opacity=".2" d="M13 28h15v15H13V28z" fill="currentColor"></path><path opacity=".4" d="M28 28v15H13V28h15zm1-1H12v17h17V27z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 28h4v2h-2v2h-2v-4zm0 9v-3h2v3h-2zm0 2v4h4v-2h-2v-2h-2zm13 0v2h-2v2h4v-4h-2zm2-2v-3h-2v3h2zm-2-7v2h2v-4h-4v2h2zm-4 0h-3v-2h3v2zm0 11h-3v2h3v-2z" fill="currentColor"></path></svg>
			<div class="uk-text-normal uk-text-bold">Grid</div>
		</div>
	`,
	content:
	`
		<div class="uk-text-center uk-grid">
		    <div class="uk-width-auto">
		        <div class="uk-card uk-card-default uk-card-body">Auto</div>
		    </div>
		    <div class="uk-width-1-3">
		        <div class="uk-card uk-card-default uk-card-body">1-3</div>
		    </div>
		    <div class="uk-width-expand">
		        <div class="uk-card uk-card-default uk-card-body">Expand</div>
		    </div>
		</div>
	`,
	render: ({ model, className }) => `<div class="${className}__my-wrap"> ${model.get('label')} </div>`,
});
blockManager.add('layout-column', {
	category: categories.layout,
	attributes: {
		title: 'Insert column'
	},
	label:
	`
		<div>
			<svg data-icon="index" aria-hidden="true" focusable="false" width="62" height="57" viewBox="0 0 62 57" class="bem-Svg" style="display: block; transform: translate(0px, 0px);"><path opacity=".2" fill="currentColor" d="M14 10h16v34H14zm19 0h16v34H33z"></path><g fill="currentColor"><path d="M14 10h2v4h-2zm14 0h2v4h-2zm-12 0h2v2h-2zm4 0h4v2h-4zm0 32h4v2h-4z"></path><path d="M26 10h4v2h-4zm2 30h2v4h-2zm-14 0h2v4h-2zm0-18h2v4h-2zm0-6h2v4h-2zm14 6h2v4h-2zm-14 6h2v4h-2zm14 0h2v4h-2zm-14 6h2v4h-2zm14 0h2v4h-2zm0-18h2v4h-2zm-2 26h2v2h-2z"></path><path d="M14 42h4v2h-4zm19-32h2v4h-2zm14 0h2v4h-2zm-12 0h2v2h-2zm4 0h4v2h-4zm0 32h4v2h-4z"></path><path d="M45 10h4v2h-4zm2 30h2v4h-2zm-14 0h2v4h-2zm0-18h2v4h-2zm0-6h2v4h-2zm14 6h2v4h-2zm-14 6h2v4h-2zm14 0h2v4h-2zm-14 6h2v4h-2zm14 0h2v4h-2zm0-18h2v4h-2zm-2 26h2v2h-2z"></path><path d="M33 42h4v2h-4z"></path></g><path opacity=".4" d="M30 10v34H14V10h16m1-1H13v36h18V9zm18 1v34H33V10h16m1-1H32v36h18V9z"></path></svg>
			<div class="uk-text-normal uk-text-bold">Columns</div>
		</div>
	`,
	content:
	`
		<div class="uk-column-1-2">
		    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

		    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

		    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
		</div>
	`,
	render: ({ model, className }) => `<div class="${className}__my-wrap"> ${model.get('label')} </div>`,
});
blockManager.add('basic-div', {
	category: categories.basic,
	attributes: {
		title: 'Insert div'
	},
	label:
	`
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
				width="42" height="57"
				viewBox="0 0 172 172"
				style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b6c6d8"><path d="M49.54406,13.76c-19.72314,0 -35.78406,16.06092 -35.78406,35.78406v72.90515c0,19.72622 16.06092,35.79078 35.78406,35.79078h72.90515c19.72622,0 35.79078,-16.06092 35.79078,-35.78406v-72.91187c0,-19.72314 -16.06092,-35.78406 -35.78406,-35.78406zM49.54406,20.64h72.91187c16.0047,0 28.90406,12.89936 28.90406,28.90406v72.91187c0,16.0047 -12.90228,28.90406 -28.91078,28.90406h-72.90515c-16.0047,0 -28.90406,-12.90228 -28.90406,-28.91078v-72.90515c0,-16.0047 12.89936,-28.90406 28.90406,-28.90406zM56.85406,37.84c-10.46213,0 -19.01406,8.55193 -19.01406,19.01406v58.29187c0,10.46213 8.55193,19.01406 19.01406,19.01406h58.29187c10.46213,0 19.01406,-8.55193 19.01406,-19.01406v-58.29187c0,-10.46213 -8.55595,-19.01406 -19.02078,-19.01406zM56.85406,44.72h58.28515c6.74893,0 12.14078,5.38931 12.14078,12.13406v58.29187c0,6.74475 -5.38931,12.13406 -12.13406,12.13406h-58.29187c-6.74475,0 -12.13406,-5.38931 -12.13406,-12.13406v-58.29187c0,-6.74475 5.38931,-12.13406 12.13406,-12.13406zM65.36,65.36v3.44v37.84h41.28v-41.28zM72.24,72.24h27.52v27.52h-27.52z"></path></g></g></svg>
			<div class="uk-text-normal uk-text-bold">Div Block</div>
		</div>
	`,
	content: `<div class="uk-padding-large"></div>`,
	render: ({ model, className }) => `<div class="${className}__my-wrap"> ${model.get('label')} </div>`,
});
blockManager.add('basic-list-block', {
	category: categories.basic,
	attributes: {
		title: 'Insert list'
	},
	label:
	`
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
				width="42" height="57"
				viewBox="0 0 172 172"
				style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b6c6d8"><path d="M17.2,28.66667v22.93333h22.93333v-22.93333zM68.8,34.4c-2.06765,-0.02924 -3.99087,1.05709 -5.03322,2.843c-1.04236,1.78592 -1.04236,3.99474 0,5.78066c1.04236,1.78592 2.96558,2.87225 5.03322,2.843h80.26667c2.06765,0.02924 3.99087,-1.05709 5.03322,-2.843c1.04236,-1.78592 1.04236,-3.99474 0,-5.78066c-1.04236,-1.78592 -2.96558,-2.87225 -5.03322,-2.843zM17.2,74.53333v22.93333h22.93333v-22.93333zM68.8,80.26667c-2.06765,-0.02924 -3.99087,1.05709 -5.03322,2.843c-1.04236,1.78592 -1.04236,3.99474 0,5.78066c1.04236,1.78592 2.96558,2.87225 5.03322,2.843h80.26667c2.06765,0.02924 3.99087,-1.05709 5.03322,-2.843c1.04236,-1.78592 1.04236,-3.99474 0,-5.78066c-1.04236,-1.78592 -2.96558,-2.87225 -5.03322,-2.843zM17.2,120.4v22.93333h22.93333v-22.93333zM68.8,126.13333c-2.06765,-0.02924 -3.99087,1.05709 -5.03322,2.843c-1.04236,1.78592 -1.04236,3.99474 0,5.78066c1.04236,1.78592 2.96558,2.87225 5.03322,2.843h80.26667c2.06765,0.02924 3.99087,-1.05709 5.03322,-2.843c1.04236,-1.78592 1.04236,-3.99474 0,-5.78066c-1.04236,-1.78592 -2.96558,-2.87225 -5.03322,-2.843z"></path></g></g></svg>
			<div class="uk-text-normal uk-text-bold">List Block</div>
		</div>
	`,
	content: `
		<ul class="uk-list">
		    <li>List item 1</li>
		    <li>List item 2</li>
		    <li>List item 3</li>
		</ul>
	`,
	render: ({ model, className }) => `<div class="${className}__my-wrap"> ${model.get('label')} </div>`,
});
blockManager.add('basic-button', {
	category: categories.basic,
	attributes: {
		title: 'Insert button'
	},
	label:
	`
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
				width="42" height="57"
				viewBox="0 0 172 172"
				style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b6c6d8"><path d="M13.76,41.28c-7.59219,0 -13.76,6.16781 -13.76,13.76v61.92c0,7.59219 6.16781,13.76 13.76,13.76h144.48c7.59219,0 13.76,-6.16781 13.76,-13.76v-61.92c0,-7.59219 -6.16781,-13.76 -13.76,-13.76zM115.32063,76.74156c5.83187,0 9.54062,3.91031 9.54062,10.2125c0,6.31562 -3.70875,10.22594 -9.54062,10.22594c-5.85875,0 -9.5675,-3.91031 -9.5675,-10.22594c0,-6.30219 3.74906,-10.2125 9.5675,-10.2125zM23.78438,77.27906h9.04344c3.87,0 6.14094,1.81406 6.14094,4.82406c0,2.08281 -1.54531,3.84312 -3.60125,4.12531v0.25531c2.52625,0.13438 4.50156,2.10969 4.50156,4.58219c0,3.39969 -2.63375,5.59 -6.78594,5.59h-9.29875zM44.77375,77.27906h4.93156v12.16094c0,2.2575 1.23625,3.60125 3.42656,3.60125c2.19031,0 3.41312,-1.34375 3.41312,-3.60125v-12.16094h4.93156v12.685c0,4.35375 -3.30563,7.21594 -8.34469,7.21594c-5.03906,0 -8.35813,-2.86219 -8.35813,-7.21594zM66.38125,77.27906h16.11156v3.95062h-5.61688v15.42625h-4.90469v-15.42625h-5.59zM86.30906,77.27906h16.11156v3.95062h-5.60344v15.42625h-4.91812v-15.42625h-5.59zM129.90031,77.27906h3.93719l8.07594,10.91125h0.25531v-10.91125h4.67625v19.37687h-3.91031l-8.10281,-11.01875h-0.25531v11.01875h-4.67625zM28.71594,80.74594v4.42094h2.60688c1.80062,0 2.84875,-0.83313 2.84875,-2.20375c0,-1.38406 -0.98094,-2.21719 -2.66063,-2.21719zM115.32063,80.82656c-2.72781,0 -4.54188,2.39187 -4.54188,6.1275c0,3.74906 1.78719,6.14094 4.54188,6.14094c2.72781,0 4.52844,-2.39187 4.52844,-6.14094c0,-3.73563 -1.81406,-6.1275 -4.52844,-6.1275zM28.71594,88.16344v5.02563h2.98313c2.0425,0 3.15781,-0.91375 3.15781,-2.55313c0,-1.58562 -1.14219,-2.4725 -3.19813,-2.4725z"></path></g></g></svg>
			<div class="uk-text-normal uk-text-bold">Button</div>
		</div>
	`,
	content: `<button class="uk-button uk-button-default">Default</button>`,
	render: ({ model, className }) => `<div class="${className}__my-wrap"> ${model.get('label')} </div>`,
});
blockManager.add('basic-left-navbar', {
	category: categories.basic,
	attributes: {
		title: 'Insert left navbar'
	},
	label:
	`
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
				width="42" height="57"
				viewBox="0 0 172 172"
				style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b6c6d8"><path d="M19.17531,47.9786c-10.67088,0 -19.35,8.68584 -19.35,19.35672v40.76937c0,10.67088 8.67912,19.35672 19.35,19.35672h133.64937c10.67088,0 19.35,-8.68928 19.35,-19.35672v-40.76937c0,-10.67088 -8.67912,-19.35672 -19.35,-19.35672zM19.17531,55.2214h84.02469v64.99719h-84.02469c-6.68048,0 -12.12063,-5.43343 -12.12063,-12.11391v-40.76937c0,-6.68048 5.44015,-12.11391 12.12063,-12.11391zM110.08,55.2214h42.74469c6.68048,0 12.12063,5.43343 12.12063,12.11391v40.76937c0,6.68048 -5.44015,12.11391 -12.12063,12.11391h-42.74469zM13.76,58.48c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM34.4,58.48c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM55.04,58.48c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM75.68,58.48c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM96.32,58.48c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM24.08,68.8c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM44.72,68.8c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM65.36,68.8c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM86,68.8c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM13.76,79.12c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM34.4,79.12c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM55.04,79.12c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM75.68,79.12c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM96.32,79.12c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM24.08,89.44c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM44.72,89.44c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM65.36,89.44c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM86,89.44c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM13.76,99.76c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM34.4,99.76c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM55.04,99.76c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM75.68,99.76c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM96.32,99.76c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM24.08,110.08c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM44.72,110.08c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM65.36,110.08c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM86,110.08c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44z"></path></g></g></svg>
			<div class="uk-text-normal uk-text-bold">Left Bar</div>
		</div>
	`,
	content: `
		<ul class="uk-nav uk-nav-default">
	        <li class="uk-active"><a href="#">Active</a></li>
	        <li><a href="#">Item</a></li>
	        <li><a href="#">Item</a></li>
	    </ul>
	`,
	render: ({ model, className }) => `<div class="${className}__my-wrap"> ${model.get('label')} </div>`,
});
blockManager.add('basic-navbar', {
	category: categories.basic,
	attributes: {
		title: 'Insert navbar'
	},
	label:
	`
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
				width="42" height="57"
				viewBox="0 0 172 172"
				style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b6c6d8"><path d="M21.5,35.83333c-2.58456,-0.03655 -4.98858,1.32136 -6.29153,3.55376c-1.30295,2.2324 -1.30295,4.99342 0,7.22582c1.30295,2.2324 3.70697,3.59031 6.29153,3.55376h129c2.58456,0.03655 4.98858,-1.32136 6.29153,-3.55376c1.30295,-2.2324 1.30295,-4.99342 0,-7.22582c-1.30295,-2.2324 -3.70697,-3.59031 -6.29153,-3.55376zM21.5,78.83333c-2.58456,-0.03655 -4.98858,1.32136 -6.29153,3.55376c-1.30295,2.2324 -1.30295,4.99342 0,7.22582c1.30295,2.2324 3.70697,3.59031 6.29153,3.55376h129c2.58456,0.03655 4.98858,-1.32136 6.29153,-3.55376c1.30295,-2.2324 1.30295,-4.99342 0,-7.22582c-1.30295,-2.2324 -3.70697,-3.59031 -6.29153,-3.55376zM21.5,121.83333c-2.58456,-0.03655 -4.98858,1.32136 -6.29153,3.55376c-1.30295,2.2324 -1.30295,4.99342 0,7.22582c1.30295,2.2324 3.70697,3.59031 6.29153,3.55376h129c2.58456,0.03655 4.98858,-1.32136 6.29153,-3.55376c1.30295,-2.2324 1.30295,-4.99342 0,-7.22582c-1.30295,-2.2324 -3.70697,-3.59031 -6.29153,-3.55376z"></path></g></g></svg>
			<div class="uk-text-normal uk-text-bold">Navbar</div>
		</div>
	`,
	content:
	`
		<div class="uk-width-1-1 uk-box-shadow-small uk-sticky">
			<div class="uk-padding-remove">
				<div>
					<nav class="uk-navbar-container uk-height-auto uk-navbar" uk-navbar="mode: click">
						<div class="nav-overlay uk-navbar-left uk-width-expand">
							<ul class="uk-navbar-nav">
								<li>
									<a href="#">
										<span>MyLinkPreview</span>
									</a>
								</li>
								<li>
									<a href="#" class="uk-text-capitalize">Demo</a>
								</li>
								<li>
									<a href="#" class="uk-text-capitalize">Get API Key</a>
								</li>
								<li>
									<a href="#" class="uk-text-capitalize">Documentaion</a>
								</li>
								<li>
									<a href="#" class="uk-text-capitalize">Pricing</a>
								</li>
							</ul>
						</div>
						<div class="nav-overlay uk-navbar-right">
							<ul class="uk-navbar-nav">
								<li class="uk-text-small">
									<a class="uk-text-capitalize" href="#">My Dashboard <span uk-icon="icon: arrow-right; ratio: 0.72" class="uk-icon"></span></a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</div>
	`,
	render: ({ model, className }) => `<div class="${className}__my-wrap"> ${model.get('label')} </div>`,
});
blockManager.add('basic-search', {
	category: categories.basic,
	attributes: {
		title: 'Insert navbar'
	},
	label:
	`
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
				width="42" height="57"
				viewBox="0 0 172 172"
				style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b6c6d8"><path d="M14.33333,43c-7.91917,0 -14.33333,6.41417 -14.33333,14.33333v57.33333c0,7.91917 6.41417,14.33333 14.33333,14.33333h143.33333c7.91917,0 14.33333,-6.41417 14.33333,-14.33333v-57.33333c0,-7.91917 -6.41417,-14.33333 -14.33333,-14.33333zM126.2985,57.34733c1.03732,0.03583 2.08919,0.14177 3.14941,0.30794c9.00133,1.41183 16.64984,8.03574 19.63834,16.64291c2.58,7.43183 1.38082,14.26995 -1.69368,19.96028l6.69076,6.69076c2.795,2.795 2.795,7.33911 0,10.13411c-2.795,2.795 -7.33911,2.795 -10.13411,0l-6.69076,-6.69076c-5.68317,3.08167 -12.52846,4.27368 -19.96028,1.69368c-8.60717,-2.9885 -15.23107,-10.63701 -16.64291,-19.63834c-2.49266,-15.91 10.08344,-29.63801 25.64323,-29.10059zM125.41667,68.97917c-7.42133,0 -13.4375,6.01617 -13.4375,13.4375c0,7.42133 6.01617,13.4375 13.4375,13.4375c7.42133,0 13.4375,-6.01617 13.4375,-13.4375c0,-7.42133 -6.01617,-13.4375 -13.4375,-13.4375z"></path></g></g></svg>
			<div class="uk-text-normal uk-text-bold">Search Bar</div>
		</div>
	`,
	content: `
		<form class="uk-search uk-search-default">
			<input class="uk-search-input" type="search" placeholder="Search...">
		</form>
	`,
	render: ({ model, className }) => `<div class="${className}__my-wrap"> ${model.get('label')} </div>`,
});
blockManager.add('basic-hr', {
	category: categories.basic,
	attributes: {
		title: 'Insert hr'
	},
	label:
	`
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
				width="42" height="57"
				viewBox="0 0 172 172"
				style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b6c6d8"><path d="M8.6,83.85h154.8v2.15h-154.8z"></path></g></g></svg>
			<div class="uk-text-normal uk-text-bold">Hr block</div>
		</div>
	`,
	content: `<hr/>`,
	render: ({ model, className }) => `<div class="${className}__my-wrap"> ${model.get('label')} </div>`,
});
blockManager.add('typography-heading', {
	category: categories.typography,
	attributes: {
		title: 'Insert heading'
	},
	label:
	`
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
				width="42" height="57"
				viewBox="0 0 172 172"
				style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b6c6d8"><path d="M75.25,21.5v53.75h-43v-53.75h-32.25v129h32.25v-53.75h43v53.75h32.25v-129zM172,21.5v129h-25.155v-96.062c0,0 -11.38425,5.4825 -24.3595,5.4825v-21.25275c15.96375,-3.94525 28.06825,-10.4275 34.26025,-17.16775z"></path></g></g></svg>
			<div class="uk-text-normal uk-text-bold">Heading</div>
		</div>
	`,
	content: `<h1 class="uk-heading-small">Small</h1>`,
	render: ({ model, className }) => `<div class="${className}__my-wrap"> ${model.get('label')} </div>`,
});
blockManager.add('typography-paragraph', {
	category: categories.typography,
	attributes: {
		title: 'Insert paragraph'
	},
	label:
	`
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
				width="42" height="57"
				viewBox="0 0 172 172"
				style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b6c6d8"><path d="M114.66667,68.08333h-21.5v53.75h-14.33333v-53.75h-21.5v-14.33333h57.33333z"></path><path d="M25.08333,28.66667h7.16667v114.66667h-7.16667zM139.75,28.66667h7.16667v114.66667h-7.16667z"></path><path d="M28.66667,25.08333h118.25v7.16667h-118.25zM28.66667,139.75h118.25v7.16667h-118.25z"></path><g><path d="M39.41667,39.41667h-21.5v-21.5h21.5zM39.41667,154.08333h-21.5v-21.5h21.5zM154.08333,39.41667h-21.5v-21.5h21.5zM154.08333,154.08333h-21.5v-21.5h21.5z"></path></g></g></g></svg>
			<div class="uk-text-normal uk-text-bold">Paragraph</div>
		</div>
	`,
	content: `
		<p class="uk-text-small">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
		</p>
	`,
	render: ({ model, className }) => `<div class="${className}__my-wrap"> ${model.get('label')} </div>`,
});
blockManager.add('typography-text-link', {
	category: categories.typography,
	attributes: {
		title: 'Insert text link'
	},
	label:
	`
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
				width="42" height="57"
				viewBox="0 0 172 172"
				style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b6c6d8"><path d="M43,50.16667c-19.78717,0 -35.83333,16.04617 -35.83333,35.83333c0,19.78717 16.04617,35.83333 35.83333,35.83333h28.66667v-14.33333h-28.66667c-11.87517,0 -21.5,-9.62483 -21.5,-21.5c0,-11.87517 9.62483,-21.5 21.5,-21.5h28.66667v-14.33333zM100.33333,50.16667v14.33333h28.66667c11.87517,0 21.5,9.62483 21.5,21.5c0,11.87517 -9.62483,21.5 -21.5,21.5h-28.66667v14.33333h28.66667c19.78717,0 35.83333,-16.04617 35.83333,-35.83333c0,-19.78717 -16.04617,-35.83333 -35.83333,-35.83333zM50.16667,78.83333v14.33333h71.66667v-14.33333z"></path></g></g></svg>
			<div class="uk-text-normal uk-text-bold">Text Link</div>
		</div>
	`,
	content: `<a href="#">Link</a>`,
	render: ({ model, className }) => `<div class="${className}__my-wrap"> ${model.get('label')} </div>`,
});
blockManager.add('media-image', {
	category: categories.media,
	attributes: {
		title: 'Insert image'
	},
	label:
	`
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
				width="42" height="57"
				viewBox="0 0 172 172"
				style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b6c6d8"><path d="M28.66667,28.66667c-7.83362,0 -14.33333,6.49972 -14.33333,14.33333v86c0,7.83362 6.49972,14.33333 14.33333,14.33333h114.66667c7.83362,0 14.33333,-6.49972 14.33333,-14.33333v-86c0,-7.83362 -6.49972,-14.33333 -14.33333,-14.33333zM28.66667,43h114.66667v86h-114.66667zM71.66667,57.33333c-3.95804,0 -7.16667,3.20863 -7.16667,7.16667c0,3.95804 3.20863,7.16667 7.16667,7.16667c3.95804,0 7.16667,-3.20863 7.16667,-7.16667c0,-3.95804 -3.20863,-7.16667 -7.16667,-7.16667zM103.91667,78.83333l-25.08333,28.66667l-17.91667,-17.91667l-19.51237,25.08333h89.38737z"></path></g></g></svg>
			<div class="uk-text-normal uk-text-bold">Image</div>
		</div>
	`,
	content: `<img width="140" height="140" alt="" uk-img>`,
	render: ({ model, className }) => `<div class="${className}__my-wrap"> ${model.get('label')} </div>`,
});
blockManager.add('components-banner-0', {
		category: categories.components,
	attributes: {
		title: 'Insert banner'
	},
	label:
	`
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
				style="transform: rotate(45deg);"
				width="42" height="57"
				viewBox="0 0 172 172"
				style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b6c6d8"><path d="M96.75,10.75c-11.7998,0 -21.5,9.7002 -21.5,21.5h-43v32.25c-11.7998,0 -21.5,9.7002 -21.5,21.5c0,11.7998 9.7002,21.5 21.5,21.5v32.25h43c0,11.7998 9.7002,21.5 21.5,21.5c11.7998,0 21.5,-9.7002 21.5,-21.5h43v-43h-10.75c-6.00489,0 -10.75,-4.74511 -10.75,-10.75c0,-6.00489 4.74511,-10.75 10.75,-10.75h10.75v-43h-43c0,-11.7998 -9.7002,-21.5 -21.5,-21.5zM96.75,21.5c6.00489,0 10.75,4.74511 10.75,10.75v10.75h43v21.5c-11.7998,0 -21.5,9.7002 -21.5,21.5c0,11.7998 9.7002,21.5 21.5,21.5v21.5h-43v10.75c0,6.00489 -4.74511,10.75 -10.75,10.75c-6.00489,0 -10.75,-4.74511 -10.75,-10.75v-10.75h-43v-32.25h-10.75c-6.00489,0 -10.75,-4.74511 -10.75,-10.75c0,-6.00489 4.74511,-10.75 10.75,-10.75h10.75v-32.25h43v-10.75c0,-6.00489 4.74511,-10.75 10.75,-10.75z"></path></g></g></svg>
			<div class="uk-text-normal uk-text-bold">Banner 0</div>
		</div>
	`,
	content:
	`
	   <div class="uk-section uk-section-default uk-height-1-1 uk-padding-remove">
		    <div class="uk-container uk-padding-remove uk-height-1-1">
		        <div class="uk-container uk-flex uk-height-1-1 uk-flex-middle">
		            <div class="uk-container uk-padding-remove uk-margin-remove">
		                <p id="i00yl" class="uk-margin-remove uk-text-small uk-text-bold">Music Application
		                </p>
		                <h3 id="ixxh" class="uk-text-bold uk-heading-large uk-margin-remove uk-width-xxlarge">Alone, it's music.
		          <br>​​​​​​​Togather its magic.
		          <br>
		          <br>
		        </h3>
		                <h1 class="uk-text-small uk-margin-remove">Our elite team builds web responsive app for leading companies
		        </h1>
		            </div>
		        </div>
		    </div>
		    <div class="uk-container uk-position-center-right uk-height-1-1 uk-width-1-2">
		    </div>
		</div>
	`,
	render: ({ model, className }) => `<div class="${className}__my-wrap"> ${model.get('label')} </div>`,
});
blockManager.add('components-banner-1', {
		category: categories.components,
	attributes: {
		title: 'Insert banner'
	},
	label:
	`
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
				style="transform: rotate(90deg);"
				width="42" height="57"
				viewBox="0 0 172 172"
				style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b6c6d8"><path d="M96.75,10.75c-11.7998,0 -21.5,9.7002 -21.5,21.5h-43v32.25c-11.7998,0 -21.5,9.7002 -21.5,21.5c0,11.7998 9.7002,21.5 21.5,21.5v32.25h43c0,11.7998 9.7002,21.5 21.5,21.5c11.7998,0 21.5,-9.7002 21.5,-21.5h43v-43h-10.75c-6.00489,0 -10.75,-4.74511 -10.75,-10.75c0,-6.00489 4.74511,-10.75 10.75,-10.75h10.75v-43h-43c0,-11.7998 -9.7002,-21.5 -21.5,-21.5zM96.75,21.5c6.00489,0 10.75,4.74511 10.75,10.75v10.75h43v21.5c-11.7998,0 -21.5,9.7002 -21.5,21.5c0,11.7998 9.7002,21.5 21.5,21.5v21.5h-43v10.75c0,6.00489 -4.74511,10.75 -10.75,10.75c-6.00489,0 -10.75,-4.74511 -10.75,-10.75v-10.75h-43v-32.25h-10.75c-6.00489,0 -10.75,-4.74511 -10.75,-10.75c0,-6.00489 4.74511,-10.75 10.75,-10.75h10.75v-32.25h43v-10.75c0,-6.00489 4.74511,-10.75 10.75,-10.75z"></path></g></g></svg>
			<div class="uk-text-normal uk-text-bold">Banner 1</div>
		</div>
	`,
	content:
	`
	   
        <div class="uk-box-shadow-small uk-border-rounded" id="ilqj">
            <div class="uk-grid uk-margin-remove">
                <div id="im06m" class="uk-width-1-3 uk-flex uk-flex-middle uk-padding-medium">
                    <div class="uk-padding-remove uk-text-left uk-width-medium">
                        <h1 class="uk-heading-small uk-width-1-1 uk-text-bold">Recipe<br/>Contest</h1>
                        <p class="uk-text-small uk-width-1-1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                        </p>
                        <div id="i101" class="uk-width-1-1">
                            <a href="#" id="ihbt" class="uk-display-inline">How they work</a>
                            <div id="ik43h" class="uk-display-inline"></div>
                        </div>
                    </div>
                </div>
                <div class="uk-width-expand uk-padding-remove uk-height-large">
                	<div class="uk-height-1-1 uk-placeholder uk-flex uk-flex-middle uk-flex-center">[Remove and insert an image]</div>
                </div>
            </div>
        </div>
		    
	`,
	render: ({ model, className }) => `<div class="${className}__my-wrap"> ${model.get('label')} </div>`,
});
blockManager.add('components-banner-2', {
		category: categories.components,
	attributes: {
		title: 'Insert banner'
	},
	label:
	`
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
				style="transform: rotate(135deg);"
				width="42" height="57"
				viewBox="0 0 172 172"
				style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b6c6d8"><path d="M96.75,10.75c-11.7998,0 -21.5,9.7002 -21.5,21.5h-43v32.25c-11.7998,0 -21.5,9.7002 -21.5,21.5c0,11.7998 9.7002,21.5 21.5,21.5v32.25h43c0,11.7998 9.7002,21.5 21.5,21.5c11.7998,0 21.5,-9.7002 21.5,-21.5h43v-43h-10.75c-6.00489,0 -10.75,-4.74511 -10.75,-10.75c0,-6.00489 4.74511,-10.75 10.75,-10.75h10.75v-43h-43c0,-11.7998 -9.7002,-21.5 -21.5,-21.5zM96.75,21.5c6.00489,0 10.75,4.74511 10.75,10.75v10.75h43v21.5c-11.7998,0 -21.5,9.7002 -21.5,21.5c0,11.7998 9.7002,21.5 21.5,21.5v21.5h-43v10.75c0,6.00489 -4.74511,10.75 -10.75,10.75c-6.00489,0 -10.75,-4.74511 -10.75,-10.75v-10.75h-43v-32.25h-10.75c-6.00489,0 -10.75,-4.74511 -10.75,-10.75c0,-6.00489 4.74511,-10.75 10.75,-10.75h10.75v-32.25h43v-10.75c0,-6.00489 4.74511,-10.75 10.75,-10.75z"></path></g></g></svg>
			<div class="uk-text-normal uk-text-bold">Banner 2</div>
		</div>
	`,
	content:
	`
	  <div class="uk-container uk-margin-small uk-padding-medium uk-container-large">
        <div id="ilqj" class="uk-box-shadow-small uk-border-rounded uk-padding-large">
            <div id="im06m" class="uk-flex uk-flex-middle uk-padding-medium uk-width-1-1 uk-flex-center">
                <div class="uk-padding-remove uk-text-left uk-text-center">
                    <h1 class="uk-heading-small uk-width-1-1 uk-text-bold">Recipe Contest</h1>
                    <p class="uk-text-small uk-width-medium uk-align-center uk-clearfix">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                    </p>
                    <div id="i101" class="uk-width-1-1">
                        <a href="#" id="ihbt" class="uk-display-inline">How they work</a>
                        <div id="ik43h" class="uk-display-inline">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
	`,
	render: ({ model, className }) => `<div class="${className}__my-wrap"> ${model.get('label')} </div>`,
});
blockManager.add('components-grid-0', {
		category: categories.components,
	attributes: {
		title: 'Insert grid'
	},
	label:
	`
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
				style="transform: rotate(135deg);"
				width="42" height="57"
				viewBox="0 0 172 172"
				style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b6c6d8"><path d="M96.75,10.75c-11.7998,0 -21.5,9.7002 -21.5,21.5h-43v32.25c-11.7998,0 -21.5,9.7002 -21.5,21.5c0,11.7998 9.7002,21.5 21.5,21.5v32.25h43c0,11.7998 9.7002,21.5 21.5,21.5c11.7998,0 21.5,-9.7002 21.5,-21.5h43v-43h-10.75c-6.00489,0 -10.75,-4.74511 -10.75,-10.75c0,-6.00489 4.74511,-10.75 10.75,-10.75h10.75v-43h-43c0,-11.7998 -9.7002,-21.5 -21.5,-21.5zM96.75,21.5c6.00489,0 10.75,4.74511 10.75,10.75v10.75h43v21.5c-11.7998,0 -21.5,9.7002 -21.5,21.5c0,11.7998 9.7002,21.5 21.5,21.5v21.5h-43v10.75c0,6.00489 -4.74511,10.75 -10.75,10.75c-6.00489,0 -10.75,-4.74511 -10.75,-10.75v-10.75h-43v-32.25h-10.75c-6.00489,0 -10.75,-4.74511 -10.75,-10.75c0,-6.00489 4.74511,-10.75 10.75,-10.75h10.75v-32.25h43v-10.75c0,-6.00489 4.74511,-10.75 10.75,-10.75z"></path></g></g></svg>
			<div class="uk-text-normal uk-text-bold">Grid 0</div>
		</div>
	`,
	content:
	`
	   <div class="uk-grid uk-margin-remove">
            <ul class="uk-nav uk-nav-default uk-width-1-5">
                <li class="uk-active">
                    <a href="#" id="imyez" class="uk-text-bold uk-text-large">Filter By</a>
                </li>
                <li>
                    <a href="#" id="ir8xk">Contest Winners</a>
                </li>
                <li id="ihacp">
                    <a href="#" id="i59ca">Featured</a>
                </li>
                <li id="imz84">
                    <a href="#" id="ik4bt">Test Kitchen-Approved</a>
                </li>
            </ul>
            <div class="uk-width-expand uk-padding-remove">
                <div class="uk-text-center uk-grid uk-margin-remove">
                    <div id="itdh" class="uk-width-1-3 uk-padding-remove">
                        <div id="idp1f" class="uk-height-small uk-border-rounded uk-box-shadow-medium uk-margin-small">
                        </div>
                        <div id="i8wvs">
                            <h1 id="ilthm" class="uk-text-left uk-margin-remove uk-text-small uk-text-bold">Kerala Chicken Curry</h1>
                            <p class="uk-text-small uk-text-left uk-margin-remove">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                            </p>
                        </div>
                        <div id="ihon8" class="uk-width-1-1 uk-clearfix uk-margin-small-top">
                            <a href="#" class="uk-margin-remove uk-align-left uk-text-small">By Sarah Elvis</a>
                        </div>
                    </div>
                    <div class="uk-width-1-3 uk-padding-remove">
                        <div id="ibqq7" class="uk-height-small uk-border-rounded uk-box-shadow-medium uk-margin-small">
                        </div>
                        <div id="iqy5m">
                            <h1 class="uk-text-left uk-margin-remove uk-text-small uk-text-bold">Kerala Chicken Curry</h1>
                            <p class="uk-text-small uk-text-left uk-margin-remove">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
                            </p>
                        </div>
                        <div class="uk-width-1-1 uk-clearfix uk-margin-small-top">
                            <a href="#" class="uk-margin-remove uk-align-left uk-text-small">By Sarah Elvis</a>
                        </div>
                    </div>
                    <div id="ipjr" class="uk-width-1-3 uk-padding-remove">
                        <div id="i59ih" class="uk-height-small uk-border-rounded uk-box-shadow-medium uk-margin-small">
                        </div>
                        <div id="i7bxa">
                            <h1 class="uk-text-left uk-margin-remove uk-text-small uk-text-bold">Kerala Chicken Curry</h1>
                            <p class="uk-text-small uk-text-left uk-margin-remove">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                            </p>
                        </div>
                        <div class="uk-width-1-1 uk-clearfix uk-margin-small-top">
                            <a href="#" class="uk-margin-remove uk-align-left uk-text-small">By Sarah Elvis</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	`,
	render: ({ model, className }) => `<div class="${className}__my-wrap"> ${model.get('label')} </div>`,
});