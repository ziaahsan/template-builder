blockManager.add('linkpreview-navbar', {
	category: categories.mylinkpreview,
	attributes: {
		title: 'Insert navbar'
	},
	label:
	`
		<div>
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
									<a href="https://mylinkpreview.com/home">
										<span>MyLinkPreview</span>
									</a>
								</li>
								<li>
									<a href="https://mylinkpreview.com/#demo-preview" class="uk-text-capitalize">Demo</a>
								</li>
								<li>
									<a href="https://mylinkpreview.com/auth/register" class="uk-text-capitalize">Get API Key</a>
								</li>
								<li>
									<a href="https://mylinkpreview.com/documentation/api" class="uk-text-capitalize">Documentaion</a>
								</li>
								<li>
									<a href="https://mylinkpreview.com/#pricing-table" class="uk-text-capitalize">Pricing</a>
								</li>
							</ul>
						</div>
						<div class="nav-overlay uk-navbar-right">
							<ul class="uk-navbar-nav">
								<li class="uk-text-small">
									<a class="uk-text-capitalize" href="https://mylinkpreview.com/auth/login">My Dashboard <span uk-icon="icon: arrow-right; ratio: 0.72" class="uk-icon"></span></a>
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

blockManager.add('linkpreview-middle-banner', {
		category: categories.mylinkpreview,
	attributes: {
		title: 'Insert middle banner'
	},
	label:
	`
		<div>
			<div class="uk-text-normal uk-text-bold">Middle Banner</div>
		</div>
	`,
	content:
	`
	    <div class="uk-width-1-1">
	        <div class="uk-height-auto">
	            <div>
	                <div class="uk-width-xlarge uk-width-auto uk-padding-large uk-align-center uk-text-center">
	                    <h1>API for link previews</h1>
	                    <h5 class="uk-width-xlarge uk-align-center">Preview links with our REST API. We provide both raw JSON data, along with full embedding link preview capability.</h5>
	                    <div class="uk-margin">
	                        <a class="uk-button uk-button-default uk-visible" href="https://mylinkpreview.com/documentation/api">Documentation</a>
	                        <a class="uk-button uk-button-primary" href="https://mylinkpreview.com/auth/register">Get API Key</a>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>
	`,
	render: ({ model, className }) => `<div class="${className}__my-wrap"> ${model.get('label')} </div>`,
});

blockManager.add('linkpreview-col-1-2', {
		category: categories.mylinkpreview,
	attributes: {
		title: 'Insert columns 1-2'
	},
	label:
	`
		<div>
			<div class="uk-text-normal uk-text-bold">Column 1-2</div>
		</div>
	`,
	content:
	`
		<div class="uk-height-auto uk-padding-large">
		    <div class="uk-child-width-expand uk-flex uk-flex-middle uk-grid">
		        <div class="uk-text-left uk-first-column">
		            <h3 class="uk-margin-small-top">Request an API key</h3>
		            <p>
		                Simply click "Get API Key" to make requests to our api. To read more, see our <a href="https://mylinkpreview.com/documentation/api">Documentation</a> for use of the api key.
		            </p>
		        </div>
		        <div>
		            <div class="uk-card uk-card-default uk-scrollspy-inview uk-animation-fade" style="border: 1px solid rgb(229, 229, 229);">
		                <div class="uk-container uk-padding-remove">
		                    <div>
		                        <nav class="uk-navbar-container uk-navbar" uk-navbar="">
		                            <div class="uk-navbar-left">
		                                <ul class="uk-navbar-nav">
		                                    <li>
		                                        <a>
		                                            <span>MyLinkPreview</span>
		                                        </a>
		                                    </li>
		                                    <li>
		                                        <a class="uk-text-small" href="https://mylinkpreview.com/#">Demo</a>
		                                    </li>
		                                    <li class="uk-active">
		                                        <a class="uk-text-small" href="https://mylinkpreview.com/auth/register">Get API Key</a>
		                                    </li>
		                                    <li>
		                                        <a>
		                                            <span uk-icon="more" class="uk-icon"></span>
		                                        </a>
		                                    </li>
		                                </ul>
		                            </div>
		                        </nav>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
	`,
	render: ({ model, className }) => `<div class="${className}__my-wrap"> ${model.get('label')} </div>`,
});

blockManager.add('linkpreview-features', {
		category: categories.mylinkpreview,
	attributes: {
		title: 'Insert features'
	},
	label:
	`
		<div>
			<div class="uk-text-normal uk-text-bold">Features</div>
		</div>
	`,
	content:
	`
	    <div class="uk-padding-large uk-box-shadow-small">
		    <div class="uk-text-center uk-width-xlarge uk-align-center">
		        <p>Major features we provide with our service.</p>
		    </div>
		    <div class="uk-grid-divider uk-padding-small uk-text-center uk-grid-small uk-grid-match uk-child-width-1-3 uk-grid">
		        <div class="uk-first-column uk-scrollspy-inview uk-animation-fade" style="">
		            <h4 class="uk-margin-remove">Image</h4>
		            <span>Thumbnail image from the url</span>
		        </div>
		        <div class="uk-scrollspy-inview uk-animation-fade" style="">
		            <h4 class="uk-margin-remove">Favicon</h4>
		            <span>Website's favicon</span>
		        </div>
		        <div class="uk-scrollspy-inview uk-animation-fade" style="">
		            <h4 class="uk-margin-remove">Embedding</h4>
		            <span>Responsive link preview on your wesbsite</span>
		        </div>
		    </div>
		    <hr>
		    <div class="uk-grid-divider uk-padding-small uk-text-center uk-grid-small uk-grid-match uk-child-width-1-3 uk-grid" uk-grid="">
		        <div class="uk-first-column uk-scrollspy-inview uk-animation-fade" style="">
		            <h4 class="uk-margin-remove">Title</h4>
		            <span>Obtain page title</span>
		        </div>
		        <div class="uk-scrollspy-inview uk-animation-fade" style="">
		            <h4 class="uk-margin-remove">Description</h4>
		            <span>Obtain page description</span>
		        </div>
		        <div class="uk-scrollspy-inview uk-animation-fade" style="">
		            <h4 class="uk-margin-remove">Is Safe <span class="uk-label">Beta</span></h4>
		            <span>URL risk checker</span>
		        </div>
		    </div>
		</div>
	`,
	render: ({ model, className }) => `<div class="${className}__my-wrap"> ${model.get('label')} </div>`,
});