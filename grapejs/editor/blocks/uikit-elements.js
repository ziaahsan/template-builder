blockManager.add('uikit-accordion', {
		category: categories.uikit,
	attributes: {
		title: 'Insert accordion'
	},
	label:
	`
		<div>
		<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
			width="48" height="48"
			viewBox="0 0 172 172"
			style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g id="original-icon" fill="#ecf0f1"><path d="M50.16667,78.83333h107.5v14.33333h-107.5zM50.16667,35.83333h107.5v14.33333h-107.5zM50.16667,121.83333h107.5v14.33333h-107.5zM21.5,75.25c-5.93706,0 -10.75,4.81294 -10.75,10.75c0,5.93706 4.81294,10.75 10.75,10.75c5.93706,0 10.75,-4.81294 10.75,-10.75c0,-5.93706 -4.81294,-10.75 -10.75,-10.75zM21.5,118.25c-5.93706,0 -10.75,4.81294 -10.75,10.75c0,5.93706 4.81294,10.75 10.75,10.75c5.93706,0 10.75,-4.81294 10.75,-10.75c0,-5.93706 -4.81294,-10.75 -10.75,-10.75zM21.5,32.25c-5.93706,0 -10.75,4.81294 -10.75,10.75c0,5.93706 4.81294,10.75 10.75,10.75c5.93706,0 10.75,-4.81294 10.75,-10.75c0,-5.93706 -4.81294,-10.75 -10.75,-10.75z"></path></g></g></svg>
			<div class="uk-text-normal uk-text-bold">Accordion</div>
		</div>
	`,
	content:
	`
		<ul uk-accordion>
		    <li class="uk-open">
		        <a class="uk-accordion-title" href="#">Item 1</a>
		        <div class="uk-accordion-content">
		            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
		        </div>
		    </li>
		    <li>
		        <a class="uk-accordion-title" href="#">Item 2</a>
		        <div class="uk-accordion-content">
		            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
		        </div>
		    </li>
		    <li>
		        <a class="uk-accordion-title" href="#">Item 3</a>
		        <div class="uk-accordion-content">
		            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
		        </div>
		    </li>
		</ul>
	`,
	render: ({ model, className }) => `<div class="${className}__my-wrap"> ${model.get('label')} </div>`,
});

blockManager.add('uikit-button', {
		category: categories.uikit,
	attributes: {
		title: 'Insert button'
	},
	label:
	`
		<div>
		<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
			width="48" height="48"
			viewBox="0 0 172 172"
			style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ECF0F1"><path d="M14.33333,50.16667c-7.83362,0 -14.33333,6.49972 -14.33333,14.33333v43c0,7.83362 6.49972,14.33333 14.33333,14.33333h143.33333c7.83362,0 14.33333,-6.49972 14.33333,-14.33333v-43c0,-7.83362 -6.49972,-14.33333 -14.33333,-14.33333zM14.33333,64.5h143.33333v43h-143.33333zM50.16667,78.83333v14.33333h14.33333v-14.33333zM78.83333,78.83333v14.33333h14.33333v-14.33333zM107.5,78.83333v14.33333h14.33333v-14.33333z"></path></g></g></svg>
			<div class="uk-text-normal uk-text-bold">Button</div>
		</div>
	`,
	content: `<button class="uk-button uk-button-default">Default</button>`,
	render: ({ model, className }) => `<div class="${className}__my-wrap"> ${model.get('label')} </div>`,
});

blockManager.add('uikit-card', {
		category: categories.uikit,
	attributes: {
		title: 'Insert card'
	},
	label:
	`
		<div>
		<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
			width="48" height="48"
			viewBox="0 0 172 172"
			style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ecf0f1"><path d="M24.08,30.96c-9.46,0 -17.2,7.74 -17.2,17.2v75.68c0,9.46 7.74,17.2 17.2,17.2h123.84c9.46,0 17.2,-7.74 17.2,-17.2v-75.68c0,-9.46 -7.74,-17.2 -17.2,-17.2zM24.08,37.84h123.84c5.73781,0 10.32,4.58219 10.32,10.32v6.88h-144.48v-6.88c0,-5.73781 4.58219,-10.32 10.32,-10.32zM13.76,72.24h144.48v51.6c0,5.73781 -4.58219,10.32 -10.32,10.32h-123.84c-5.73781,0 -10.32,-4.58219 -10.32,-10.32zM30.96,82.56v6.88h55.04v-6.88z"></path></g></g></svg>
			<div class="uk-text-normal uk-text-bold">Card</div>
		</div>
	`,
	content:
	`
		<div class="uk-card uk-card-default uk-card-body uk-width-1-2">
		    <h3 class="uk-card-title">Default</h3>
		    <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
		</div>
	`,
	render: ({ model, className }) => `<div class="${className}__my-wrap"> ${model.get('label')} </div>`,
});

blockManager.add('uikit-column', {
		category: categories.uikit,
	attributes: {
		title: 'Insert column'
	},
	label:
	`
		<div>
		<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
			width="48" height="48"
			viewBox="0 0 172 172"
			style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ECF0F1"><path d="M43,14.33333c-7.83362,0 -14.33333,6.49972 -14.33333,14.33333v114.66667c0,7.83362 6.49972,14.33333 14.33333,14.33333h28.66667c7.83362,0 14.33333,-6.49972 14.33333,-14.33333v-114.66667c0,-7.83362 -6.49972,-14.33333 -14.33333,-14.33333zM100.33333,14.33333v14.33333h28.66667v28.66667h-28.66667v14.33333h28.66667v28.66667h-28.66667v14.33333h28.66667v28.66667h-28.66667v14.33333h28.66667c7.83362,0 14.33333,-6.49972 14.33333,-14.33333v-114.66667c0,-7.83362 -6.49972,-14.33333 -14.33333,-14.33333zM43,28.66667h28.66667v28.66667h-28.66667zM43,71.66667h28.66667v28.66667h-28.66667zM43,114.66667h28.66667v28.66667h-28.66667z"></path></g></g></svg>
			<div class="uk-text-normal uk-text-bold">Column 1-2</div>
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

blockManager.add('uikit-container', {
		category: categories.uikit,
	attributes: {
		title: 'Insert container'
	},
	label:
	`
		<div>
		<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
			width="48" height="48"
			viewBox="0 0 172 172"
			style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ECF0F1"><path d="M48.375,21.5c-14.78109,0 -26.875,12.09391 -26.875,26.875v75.25c0,14.78109 12.09391,26.875 26.875,26.875h75.25c14.78109,0 26.875,-12.09391 26.875,-26.875v-75.25c0,-14.78109 -12.09391,-26.875 -26.875,-26.875zM48.375,32.25h75.25c8.97641,0 16.125,7.14859 16.125,16.125v75.25c0,8.97641 -7.14859,16.125 -16.125,16.125h-75.25c-8.97641,0 -16.125,-7.14859 -16.125,-16.125v-75.25c0,-8.97641 7.14859,-16.125 16.125,-16.125zM69.875,53.75c-8.84221,0 -16.125,7.28279 -16.125,16.125v32.25c0,8.84221 7.28279,16.125 16.125,16.125h32.25c8.84221,0 16.125,-7.28279 16.125,-16.125v-32.25c0,-8.84221 -7.28279,-16.125 -16.125,-16.125zM69.875,64.5h32.25c3.02579,0 5.375,2.34921 5.375,5.375v32.25c0,3.02579 -2.34921,5.375 -5.375,5.375h-32.25c-3.02579,0 -5.375,-2.34921 -5.375,-5.375v-32.25c0,-3.02579 2.34921,-5.375 5.375,-5.375z"></path></g></g></svg>
			<div class="uk-text-normal uk-text-bold">Container</div>
		</div>
	`,
	content:
	`
		<div class="uk-container">
			<p>A simple container</p>
		</div>
	`,
	render: ({ model, className }) => `<div class="${className}__my-wrap"> ${model.get('label')} </div>`,
});

blockManager.add('uikit-grid', {
		category: categories.uikit,
	attributes: {
		title: 'Insert grid'
	},
	label:
	`
		<div>
		<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
			width="48" height="48"
			viewBox="0 0 172 172"
			style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ecf0f1"><path d="M16.125,32.25v107.5h139.75v-107.5zM26.875,43h21.5v21.5h-21.5zM59.125,43h21.5v21.5h-21.5zM91.375,43h21.5v21.5h-21.5zM123.625,43h21.5v21.5h-21.5zM26.875,75.25h21.5v21.5h-21.5zM59.125,75.25h21.5v21.5h-21.5zM91.375,75.25h21.5v21.5h-21.5zM123.625,75.25h21.5v21.5h-21.5zM26.875,107.5h21.5v21.5h-21.5zM59.125,107.5h21.5v21.5h-21.5zM91.375,107.5h21.5v21.5h-21.5zM123.625,107.5h21.5v21.5h-21.5z"></path></g></g></svg>
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

blockManager.add('uikit-heading', {
		category: categories.uikit,
	attributes: {
		title: 'Insert heading'
	},
	label:
	`
		<div>
		<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
			width="48" height="48"
			viewBox="0 0 172 172"
			style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ecf0f1"><path d="M78.83333,28.66667v43h-43v-43h-21.5v114.66667h21.5v-50.16667h43v50.16667h21.5v-114.66667zM155.20133,28.66667l-40.53467,15.1575v18.8125l21.5,-6.84417v87.54083h21.5v-114.66667z"></path></g></g></svg>
			<div class="uk-text-normal uk-text-bold">Heading</div>
		</div>
	`,
	content:
	`
		<h1 class="uk-heading-small">Small</h1>
	`,
	render: ({ model, className }) => `<div class="${className}__my-wrap"> ${model.get('label')} </div>`,
});

blockManager.add('uikit-link', {
		category: categories.uikit,
	attributes: {
		title: 'Insert link'
	},
	label:
	`
		<div>
		<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
			width="48" height="48"
			viewBox="0 0 172 172"
			style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ecf0f1"><path d="M50.16667,78.83333h71.66667v14.33333h-71.66667z"></path><path d="M129,50.16667c-5.10267,0 -23.564,0 -28.66667,0v14.33333c5.53267,0 23.134,0 28.66667,0c11.87517,0 21.5,9.62483 21.5,21.5c0,11.87517 -9.62483,21.5 -21.5,21.5c-5.53267,0 -23.134,0 -28.66667,0v14.33333c5.10267,0 23.564,0 28.66667,0c19.78717,0 35.83333,-16.04617 35.83333,-35.83333c0,-19.78717 -16.04617,-35.83333 -35.83333,-35.83333zM43,121.83333c5.10267,0 23.564,0 28.66667,0v-14.33333c-5.53267,0 -23.134,0 -28.66667,0c-11.87517,0 -21.5,-9.62483 -21.5,-21.5c0,-11.87517 9.62483,-21.5 21.5,-21.5c5.53267,0 23.134,0 28.66667,0v-14.33333c-5.10267,0 -23.564,0 -28.66667,0c-19.78717,0 -35.83333,16.04617 -35.83333,35.83333c0,19.78717 16.04617,35.83333 35.83333,35.83333z"></path></g></g></svg>
			<div class="uk-text-normal uk-text-bold">Link</div>
		</div>
	`,
	content:
	`
		<a class="uk-link-heading" href="#">Heading</a>
	`,
	render: ({ model, className }) => `<div class="${className}__my-wrap"> ${model.get('label')} </div>`,
});

blockManager.add('uikit-nav', {
		category: categories.uikit,
	attributes: {
		title: 'Insert nav'
	},
	label:
	`
		<div>
		<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
			width="48" height="48"
			viewBox="0 0 172 172"
			style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ecf0f1"><path d="M21.5,35.83333c-2.58456,-0.03655 -4.98858,1.32136 -6.29153,3.55376c-1.30295,2.2324 -1.30295,4.99342 0,7.22582c1.30295,2.2324 3.70697,3.59031 6.29153,3.55376h129c2.58456,0.03655 4.98858,-1.32136 6.29153,-3.55376c1.30295,-2.2324 1.30295,-4.99342 0,-7.22582c-1.30295,-2.2324 -3.70697,-3.59031 -6.29153,-3.55376zM21.5,78.83333c-2.58456,-0.03655 -4.98858,1.32136 -6.29153,3.55376c-1.30295,2.2324 -1.30295,4.99342 0,7.22582c1.30295,2.2324 3.70697,3.59031 6.29153,3.55376h129c2.58456,0.03655 4.98858,-1.32136 6.29153,-3.55376c1.30295,-2.2324 1.30295,-4.99342 0,-7.22582c-1.30295,-2.2324 -3.70697,-3.59031 -6.29153,-3.55376zM21.5,121.83333c-2.58456,-0.03655 -4.98858,1.32136 -6.29153,3.55376c-1.30295,2.2324 -1.30295,4.99342 0,7.22582c1.30295,2.2324 3.70697,3.59031 6.29153,3.55376h129c2.58456,0.03655 4.98858,-1.32136 6.29153,-3.55376c1.30295,-2.2324 1.30295,-4.99342 0,-7.22582c-1.30295,-2.2324 -3.70697,-3.59031 -6.29153,-3.55376z"></path></g></g></svg>
			<div class="uk-text-normal uk-text-bold">Nav</div>
		</div>
	`,
	content:
	`
		<nav class="uk-navbar-container" uk-navbar>
		    <div class="uk-navbar-left">

		        <ul class="uk-navbar-nav">
		            <li class="uk-active"><a href="#">Active</a></li>
		            <li>
		                <a href="#">Parent</a>
		                <div class="uk-navbar-dropdown">
		                    <ul class="uk-nav uk-navbar-dropdown-nav">
		                        <li class="uk-active"><a href="#">Active</a></li>
		                        <li><a href="#">Item</a></li>
		                        <li class="uk-nav-header">Header</li>
		                        <li><a href="#">Item</a></li>
		                        <li><a href="#">Item</a></li>
		                        <li class="uk-nav-divider"></li>
		                        <li><a href="#">Item</a></li>
		                    </ul>
		                </div>
		            </li>
		            <li><a href="#">Item</a></li>
		        </ul>

		    </div>
		    <div class="uk-navbar-right">

		        <ul class="uk-navbar-nav">
		            <li>
		                <a href="#">Parent</a>
		                <div class="uk-navbar-dropdown">
		                    <ul class="uk-nav uk-navbar-dropdown-nav">
		                        <li class="uk-active"><a href="#">Active</a></li>
		                        <li><a href="#">Item</a></li>
		                        <li class="uk-nav-header">Header</li>
		                        <li><a href="#">Item</a></li>
		                        <li><a href="#">Item</a></li>
		                        <li class="uk-nav-divider"></li>
		                        <li><a href="#">Item</a></li>
		                    </ul>
		                </div>
		            </li>
		        </ul>
		    </div>
		</nav>
	`,
	render: ({ model, className }) => `<div class="${className}__my-wrap"> ${model.get('label')} </div>`,
});

blockManager.add('uikit-section', {
		category: categories.uikit,
	attributes: {
		title: 'Insert section'
	},
	label:
	`
		<div>
		<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
			width="48" height="48"
			viewBox="0 0 172 172"
			style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ecf0f1"><path d="M77.9375,26.875c-13.29053,0 -24.1875,10.89697 -24.1875,24.1875c0,7.24365 3.29639,13.68945 8.39844,18.14063c-5.01807,3.94727 -8.39844,9.97315 -8.39844,16.79688c0,11.8208 9.6792,21.5 21.5,21.5h18.8125c7.47461,0 13.4375,5.96289 13.4375,13.4375c0,7.47461 -5.96289,13.4375 -13.4375,13.4375h-16.125c-7.47461,0 -13.4375,-5.96289 -13.4375,-13.4375v-2.6875h-10.75v2.6875c0,13.29053 10.89697,24.1875 24.1875,24.1875h16.125c13.29053,0 24.1875,-10.89697 24.1875,-24.1875c0,-7.24365 -3.29639,-13.68945 -8.39844,-18.14062c5.01807,-3.94727 8.39844,-9.97315 8.39844,-16.79687c0,-11.8208 -9.6792,-21.5 -21.5,-21.5h-18.8125c-7.47461,0 -13.4375,-5.96289 -13.4375,-13.4375c0,-7.47461 5.96289,-13.4375 13.4375,-13.4375h16.125c7.47461,0 13.4375,5.96289 13.4375,13.4375v2.6875h10.75v-2.6875c0,-13.29053 -10.89697,-24.1875 -24.1875,-24.1875zM75.25,74.91406c0.90283,0.10498 1.76367,0.33594 2.6875,0.33594h18.8125c6.00489,0 10.75,4.74512 10.75,10.75c0,6.00489 -4.74511,10.75 -10.75,10.75v0.33594c-0.90283,-0.10498 -1.76367,-0.33594 -2.6875,-0.33594h-18.8125c-6.00488,0 -10.75,-4.74511 -10.75,-10.75c0,-6.00488 4.74512,-10.75 10.75,-10.75z"></path></g></g></svg>
			<div class="uk-text-normal uk-text-bold">Section</div>
		</div>
	`,
	content:
	`
		<div class="uk-section uk-section-default">
		    <div class="uk-container">

		        <h3>Section Default</h3>

		        <div class="uk-grid-match uk-child-width-1-3" uk-grid>
		            <div>
		                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
		            </div>
		            <div>
		                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
		            </div>
		            <div>
		                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
		            </div>
		        </div>

		    </div>
		</div>
	`,
	render: ({ model, className }) => `<div class="${className}__my-wrap"> ${model.get('label')} </div>`,
});

blockManager.add('uikit-tile', {
		category: categories.uikit,
	attributes: {
		title: 'Insert tile'
	},
	label:
	`
		<div>
		<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
			width="48" height="48"
			viewBox="0 0 172 172"
			style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ecf0f1"><path d="M17.2,34.4c-3.1648,0 -5.73333,2.56853 -5.73333,5.73333v34.4c0,3.1648 2.56853,5.73333 5.73333,5.73333h34.4c3.1648,0 5.73333,-2.56853 5.73333,-5.73333v-34.4c0,-3.1648 -2.56853,-5.73333 -5.73333,-5.73333zM80.26667,40.13333c-2.06765,-0.02924 -3.99087,1.05709 -5.03322,2.843c-1.04236,1.78592 -1.04236,3.99474 0,5.78066c1.04236,1.78592 2.96558,2.87225 5.03322,2.843h74.53333c2.06765,0.02924 3.99087,-1.05709 5.03322,-2.843c1.04236,-1.78592 1.04236,-3.99474 0,-5.78066c-1.04236,-1.78592 -2.96558,-2.87225 -5.03322,-2.843zM34.4,45.86667c6.33533,0 11.46667,5.13133 11.46667,11.46667c0,6.3296 -5.13133,11.46667 -11.46667,11.46667c-6.33533,0 -11.46667,-5.13707 -11.46667,-11.46667c0,-6.33533 5.13133,-11.46667 11.46667,-11.46667zM80.26667,63.06667c-2.06765,-0.02924 -3.99087,1.05709 -5.03322,2.843c-1.04236,1.78592 -1.04236,3.99474 0,5.78066c1.04236,1.78592 2.96558,2.87225 5.03322,2.843h51.6c2.06765,0.02924 3.99087,-1.05709 5.03322,-2.843c1.04236,-1.78592 1.04236,-3.99474 0,-5.78066c-1.04236,-1.78592 -2.96558,-2.87225 -5.03322,-2.843zM17.2,97.46667c-3.1648,0 -5.73333,2.56853 -5.73333,5.73333v34.4c0,3.1648 2.56853,5.73333 5.73333,5.73333h34.4c3.1648,0 5.73333,-2.56853 5.73333,-5.73333v-34.4c0,-3.1648 -2.56853,-5.73333 -5.73333,-5.73333zM80.26667,103.2c-2.06765,-0.02924 -3.99087,1.05709 -5.03322,2.843c-1.04236,1.78592 -1.04236,3.99474 0,5.78066c1.04236,1.78592 2.96558,2.87225 5.03322,2.843h74.53333c2.06765,0.02924 3.99087,-1.05709 5.03322,-2.843c1.04236,-1.78592 1.04236,-3.99474 0,-5.78066c-1.04236,-1.78592 -2.96558,-2.87225 -5.03322,-2.843zM22.93333,108.93333h22.93333v22.93333h-22.93333zM80.26667,126.13333c-2.06765,-0.02924 -3.99087,1.05709 -5.03322,2.843c-1.04236,1.78592 -1.04236,3.99474 0,5.78066c1.04236,1.78592 2.96558,2.87225 5.03322,2.843h51.6c2.06765,0.02924 3.99087,-1.05709 5.03322,-2.843c1.04236,-1.78592 1.04236,-3.99474 0,-5.78066c-1.04236,-1.78592 -2.96558,-2.87225 -5.03322,-2.843z"></path></g></g></svg>
			<div class="uk-text-normal uk-text-bold">Tile</div>
		</div>
	`,
	content:
	`
		<div class="uk-child-width-1-2 uk-grid-collapse uk-text-center" uk-grid>
		    <div>
		        <div class="uk-tile uk-tile-default">
		            <p class="uk-h4">Default</p>
		        </div>
		    </div>
		    <div>
		        <div class="uk-tile uk-tile-muted">
		            <p class="uk-h4">Muted</p>
		        </div>
		    </div>
		    <div>
		        <div class="uk-tile uk-tile-primary">
		            <p class="uk-h4">Primary</p>
		        </div>
		    </div>
		    <div>
		        <div class="uk-tile uk-tile-secondary">
		            <p class="uk-h4">Secondary</p>
		        </div>
		    </div>
		</div>
	`,
	render: ({ model, className }) => `<div class="${className}__my-wrap"> ${model.get('label')} </div>`,
});

blockManager.add('uikit-width', {
		category: categories.uikit,
	attributes: {
		title: 'Insert width'
	},
	label:
	`
		<div>
		<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
			width="48" height="48"
			viewBox="0 0 172 172"
			style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ecf0f1"><path d="M9.9975,48.0525c-0.14781,0.02688 -0.29562,0.06719 -0.43,0.1075c-1.59906,0.36281 -2.72781,1.80063 -2.6875,3.44v68.8c-0.01344,1.23625 0.63156,2.39188 1.70656,3.02344c1.075,0.61813 2.39187,0.61813 3.46687,0c1.075,-0.63156 1.72,-1.78719 1.70656,-3.02344v-68.8c0.04031,-0.99437 -0.36281,-1.94844 -1.075,-2.62031c-0.72562,-0.68531 -1.70656,-1.02125 -2.6875,-0.92719zM161.3575,48.0525c-0.14781,0.02688 -0.29562,0.06719 -0.43,0.1075c-1.59906,0.36281 -2.72781,1.80063 -2.6875,3.44v68.8c-0.01344,1.23625 0.63156,2.39188 1.70656,3.02344c1.075,0.61813 2.39187,0.61813 3.46687,0c1.075,-0.63156 1.72,-1.78719 1.70656,-3.02344v-68.8c0.04031,-0.99437 -0.36281,-1.94844 -1.075,-2.62031c-0.72562,-0.68531 -1.70656,-1.02125 -2.6875,-0.92719zM24.08,48.16c-1.89469,0 -3.44,1.54531 -3.44,3.44c0,1.89469 1.54531,3.44 3.44,3.44c1.89469,0 3.44,-1.54531 3.44,-3.44c0,-1.89469 -1.54531,-3.44 -3.44,-3.44zM37.84,48.16c-1.89469,0 -3.44,1.54531 -3.44,3.44c0,1.89469 1.54531,3.44 3.44,3.44c1.89469,0 3.44,-1.54531 3.44,-3.44c0,-1.89469 -1.54531,-3.44 -3.44,-3.44zM51.6,48.16c-1.89469,0 -3.44,1.54531 -3.44,3.44c0,1.89469 1.54531,3.44 3.44,3.44c1.89469,0 3.44,-1.54531 3.44,-3.44c0,-1.89469 -1.54531,-3.44 -3.44,-3.44zM65.36,48.16c-1.89469,0 -3.44,1.54531 -3.44,3.44c0,1.89469 1.54531,3.44 3.44,3.44c1.89469,0 3.44,-1.54531 3.44,-3.44c0,-1.89469 -1.54531,-3.44 -3.44,-3.44zM79.12,48.16c-1.89469,0 -3.44,1.54531 -3.44,3.44c0,1.89469 1.54531,3.44 3.44,3.44c1.89469,0 3.44,-1.54531 3.44,-3.44c0,-1.89469 -1.54531,-3.44 -3.44,-3.44zM92.88,48.16c-1.89469,0 -3.44,1.54531 -3.44,3.44c0,1.89469 1.54531,3.44 3.44,3.44c1.89469,0 3.44,-1.54531 3.44,-3.44c0,-1.89469 -1.54531,-3.44 -3.44,-3.44zM106.64,48.16c-1.89469,0 -3.44,1.54531 -3.44,3.44c0,1.89469 1.54531,3.44 3.44,3.44c1.89469,0 3.44,-1.54531 3.44,-3.44c0,-1.89469 -1.54531,-3.44 -3.44,-3.44zM120.4,48.16c-1.89469,0 -3.44,1.54531 -3.44,3.44c0,1.89469 1.54531,3.44 3.44,3.44c1.89469,0 3.44,-1.54531 3.44,-3.44c0,-1.89469 -1.54531,-3.44 -3.44,-3.44zM134.16,48.16c-1.89469,0 -3.44,1.54531 -3.44,3.44c0,1.89469 1.54531,3.44 3.44,3.44c1.89469,0 3.44,-1.54531 3.44,-3.44c0,-1.89469 -1.54531,-3.44 -3.44,-3.44zM147.92,48.16c-1.89469,0 -3.44,1.54531 -3.44,3.44c0,1.89469 1.54531,3.44 3.44,3.44c1.89469,0 3.44,-1.54531 3.44,-3.44c0,-1.89469 -1.54531,-3.44 -3.44,-3.44zM38.8075,68.6925c-0.14781,0.02688 -0.29562,0.06719 -0.43,0.1075c-0.55094,0.09406 -1.06156,0.30906 -1.505,0.645l-18.275,13.76c-0.90031,0.645 -1.43781,1.69313 -1.43781,2.795c0,1.10188 0.5375,2.15 1.43781,2.795l18.275,13.76c1.54531,1.15563 3.73563,0.84656 4.89125,-0.69875c1.15563,-1.54531 0.84656,-3.73562 -0.69875,-4.89125l-9.9975,-7.525h109.865l-9.9975,7.525c-1.54531,1.15563 -1.85437,3.34594 -0.69875,4.89125c1.15563,1.54531 3.34594,1.85438 4.89125,0.69875l18.275,-13.76c0.90031,-0.645 1.43781,-1.69312 1.43781,-2.795c0,-1.10187 -0.5375,-2.15 -1.43781,-2.795l-18.275,-13.76c-0.76594,-0.57781 -1.74687,-0.81969 -2.6875,-0.645c-1.41094,0.18813 -2.55312,1.22281 -2.88906,2.60688c-0.33594,1.37062 0.215,2.82187 1.38406,3.62812l9.9975,7.525h-109.865l9.9975,-7.525c1.38406,-0.84656 1.98875,-2.55312 1.43781,-4.085c-0.5375,-1.53187 -2.08281,-2.4725 -3.69531,-2.2575zM24.08,116.96c-1.89469,0 -3.44,1.54531 -3.44,3.44c0,1.89469 1.54531,3.44 3.44,3.44c1.89469,0 3.44,-1.54531 3.44,-3.44c0,-1.89469 -1.54531,-3.44 -3.44,-3.44zM37.84,116.96c-1.89469,0 -3.44,1.54531 -3.44,3.44c0,1.89469 1.54531,3.44 3.44,3.44c1.89469,0 3.44,-1.54531 3.44,-3.44c0,-1.89469 -1.54531,-3.44 -3.44,-3.44zM51.6,116.96c-1.89469,0 -3.44,1.54531 -3.44,3.44c0,1.89469 1.54531,3.44 3.44,3.44c1.89469,0 3.44,-1.54531 3.44,-3.44c0,-1.89469 -1.54531,-3.44 -3.44,-3.44zM65.36,116.96c-1.89469,0 -3.44,1.54531 -3.44,3.44c0,1.89469 1.54531,3.44 3.44,3.44c1.89469,0 3.44,-1.54531 3.44,-3.44c0,-1.89469 -1.54531,-3.44 -3.44,-3.44zM79.12,116.96c-1.89469,0 -3.44,1.54531 -3.44,3.44c0,1.89469 1.54531,3.44 3.44,3.44c1.89469,0 3.44,-1.54531 3.44,-3.44c0,-1.89469 -1.54531,-3.44 -3.44,-3.44zM92.88,116.96c-1.89469,0 -3.44,1.54531 -3.44,3.44c0,1.89469 1.54531,3.44 3.44,3.44c1.89469,0 3.44,-1.54531 3.44,-3.44c0,-1.89469 -1.54531,-3.44 -3.44,-3.44zM106.64,116.96c-1.89469,0 -3.44,1.54531 -3.44,3.44c0,1.89469 1.54531,3.44 3.44,3.44c1.89469,0 3.44,-1.54531 3.44,-3.44c0,-1.89469 -1.54531,-3.44 -3.44,-3.44zM120.4,116.96c-1.89469,0 -3.44,1.54531 -3.44,3.44c0,1.89469 1.54531,3.44 3.44,3.44c1.89469,0 3.44,-1.54531 3.44,-3.44c0,-1.89469 -1.54531,-3.44 -3.44,-3.44zM134.16,116.96c-1.89469,0 -3.44,1.54531 -3.44,3.44c0,1.89469 1.54531,3.44 3.44,3.44c1.89469,0 3.44,-1.54531 3.44,-3.44c0,-1.89469 -1.54531,-3.44 -3.44,-3.44zM147.92,116.96c-1.89469,0 -3.44,1.54531 -3.44,3.44c0,1.89469 1.54531,3.44 3.44,3.44c1.89469,0 3.44,-1.54531 3.44,-3.44c0,-1.89469 -1.54531,-3.44 -3.44,-3.44z"></path></g></g></svg>
			<div class="uk-text-normal uk-text-bold">Width</div>
		</div>
	`,
	content:
	`
		<div class="uk-child-width-expand uk-grid-small uk-text-center" uk-grid>
		    <div>
		        <div class="uk-card uk-card-default uk-card-body">Expand</div>
		    </div>
		    <div class="uk-width-1-3">
		        <div class="uk-card uk-card-default uk-card-body">1-3</div>
		    </div>
		    <div>
		        <div class="uk-card uk-card-default uk-card-body">Expand</div>
		    </div>
		    <div>
		        <div class="uk-card uk-card-default uk-card-body">Expand</div>
		    </div>
		</div>
	`,
	render: ({ model, className }) => `<div class="${className}__my-wrap"> ${model.get('label')} </div>`,
});