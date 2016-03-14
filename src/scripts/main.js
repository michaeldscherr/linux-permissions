import { transforms } from './transforms';

(function(){

	document.onreadystatechange = () => {
		if (document.readyState === 'complete') {
			'use strict'; //eslint-disable-line

			var App = {
				app: document.querySelectorAll('[data-role="app"]')[0],
				legend: document.querySelectorAll('[data-role="legend"]')[0],
				legendColumns: ['owner', 'group', 'world'],
				legendRows: ['read', 'write', 'execute'],
				modValue: [],
				legendValues: new Map(),
				inputs: [],
				getModValue() {
					this.modValue = [...this.inputs].map(input => parseInt(input.value));
					return this.modValue;
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
					this.legendColumns.map((column, indexCol) => {
						let binary = [...transforms(modValue[indexCol]).toBinaryFromInt()];
						while (binary.length < 3){
							binary.unshift('0');
						}
						this.legendRows.map((row, indexRow) => {
							let checkbox = document.getElementsByName(`${row}_${column}`)[0];
							let state = (parseInt(binary[indexRow]) === 1) ? true : false;
							checkbox.checked = state;
						});
					});
				},
				renderInputs(e) {
					let legendValues = this.getLegendValues();
					let clicked = e.target;
					let column = clicked.name.split('_')[1];
					let hex = [];
					for (let [, value] of legendValues.get(column)){
						let number = (value[0].checked === true) ? 1 : 0;
						hex.push(number);
					}
					let targetInput = [...this.inputs].filter(input => {
						return input.name === column;
					});
					targetInput[0].value = transforms(hex.join('')).toIntFromBinary();
				},
				bindEvents() {
					[...this.inputs].map(input => {
						input.addEventListener('change', this.renderLegend.bind(this));
					});
					this.getLegendValues();
					for (let value of this.legendValues.values()){
						for (let [, radioButton] of value.entries()){
							radioButton[0].addEventListener('change', this.renderInputs.bind(this));
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
		}
	};

})();
