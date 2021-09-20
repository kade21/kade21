$(document).ready(function () {});

document.addEventListener('DOMContentLoaded', () => {
	let btn = document.querySelector('.btn');
	let box = document.querySelector('.box');
	function addToBox() {
		let i = +box.innerHTML;
		box.innerHTML = i += 1;
	}
	btn.addEventListener('click', addToBox);
	function calc() {
		let screen = document.querySelector('.inner-screen');
		let clearBtn = document.querySelector('.clear');
		let calc = document.querySelector('.equals');
		let mathButtons =
			document.querySelectorAll('.math button');
		let numButtons = [];

		for (let i = 1; i < 11; i++) {
			let btn = document.getElementById(i);
			numButtons.push(btn);
		}

		numButtons.forEach((btn) => {
			btn.addEventListener('click', () => {
				if (screen.innerHTML.length < 15) {
					screen.innerHTML += btn.value;
				}
				return;
			});
		});

		mathButtons.forEach((btn) => {
			btn.addEventListener('click', () => {
				let length = screen.innerHTML.length;
				let last = screen.innerHTML[length - 2];

				if (
					length < 15 &&
					length > 0 &&
					last !== btn.value
				) {
					screen.innerHTML += ' ' + btn.value + ' ';
				}
				return;
			});
		});

		clearBtn.addEventListener('click', () => {
			screen.innerHTML = '';
		});

		const runCalculation = (n1, n2, op) => {
			switch (op) {
				case '+':
					return add(n1, n2);
				case '-':
					return subtract(n1, n2);
				case '*':
					return multiply(n1, n2);
				case '/':
					return divide(n1, n2);
				default:
					return 'oops';
			}
		};

		calc.addEventListener(
			'click',
			() => {
				let equation = screen.innerHTML.split(' ');
				let parsed = equation.reduce((a, b, c, d) => {
					if (!+b && +b !== 0) {
						return runCalculation(+a, +d[c + 1], b);
					}
					return a;
				});
				screen.innerHTML = parsed;
			},
			0,
		);
	}
});
