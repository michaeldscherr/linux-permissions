(function(){
	'use strict'; //eslint-disable-line

	var App = {
		app: document.querySelectorAll('[data-role="app"]')[0],
		legend: document.querySelectorAll('[data-role="legend"]')[0],
		legendColumns: ['owner', 'group', 'world'],
		legendRows: ['read', 'write', 'execute'],
		modValue: [],
		legendValues: new Map(),
		inputs: null,
		getModValue() {
			this.modValue = [...this.inputs].map(input => parseInt(input.value));
			return this.modValue;
		},
		toBinaryfromInt(number) {
			return Number(number).toString(2);
		},
		toIntFromBinary(binary) {
			return parseInt(binary, 2);
		},
		getLegendValues() {
			this.legendValues.clear();
			this.legendColumns.map((column, colIndex) => {
				this.legendValues.set(column, new Map());
				this.legendRows.map((row, rowIndex) => {
					let key = `${this.legendRows[rowIndex]}_${this.legendColumns[colIndex]}`;
					let value = document.getElementsByName(key);
					this.legendValues.get(column).set(key, value);
				});
			});
			return this.legendValues;
		},
		renderLegend() {
			let modValue = this.getModValue();
			this.legendColumns.map((column,index) => {
				let binary = [...this.toBinaryfromInt(modValue[index])];
				while(binary.length < 3){
					binary.unshift('0');
				}
				this.legendRows.map((row,index) => {
					let checkbox = document.getElementsByName(`${row}_${column}`)[0];
					let state = (parseInt(binary[index]) === 1) ? true : false;
					checkbox.checked = state;
				});
			});
		},
		renderInputs(e) {
			this.getLegendValues();
			let clicked = e.target;
			let [row, column] = clicked.name.split('_');
			let hex = [];
			for(let [key, value] of this.legendValues.get(column)){
				let number = (value[0].checked === true) ? 1 : 0;
				hex.push(number);
			}
			let targetInput = [...this.inputs].filter(input => {
				return input.name === column;
			});
			targetInput[0].value = this.toIntFromBinary(hex.join(''));
		},
		bindEvents() {
			[...this.inputs].map(input => {
				input.addEventListener('change', this.renderLegend.bind(this));
			});
			this.getLegendValues();
			for(let value of this.legendValues.values()){
				for(let [key, value] of value.entries()){
					value[0].addEventListener('change', this.renderInputs.bind(this));
				}
			}
		},
		registerVariables() {
			this.inputs = this.app.querySelectorAll('input');
		},
		init() {
			this.registerVariables();
			this.bindEvents();
			this.renderLegend();
		}
	};

	App.init();

})();
