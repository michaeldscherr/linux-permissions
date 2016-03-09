(function(){
	'use strict'; //eslint-disable-line

	var App = {
		app: document.querySelectorAll('[data-role="app"]')[0],
		legend: document.querySelectorAll('[data-role="legend"]')[0],
		renderLegend() {
			console.log(this);
		},
		bindEvents() {
			let appInputs = this.app.querySelectorAll('input');
			[...appInputs].map((input) => {
				input.addEventListener('onchange', this.renderLegend.bind(this));
			});
		},
		init() {
			this.bindEvents();
		}
	};

	App.init();

})();
