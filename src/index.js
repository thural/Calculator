//////////////////////////////////NO FRAMEWORK AND NO ENUM FUNCTION means LOTS of CODE ////////////////////////
import './style.css';
import calculator from './calculator';
import githubPng from './images/github_icon.png';
import linkedinPng from './images/linkedin_icon.png';
import twitterPng from './images/twitter_icon.png';

const symbols = {
	'add': '+',
	'subtract': '-',
	'multiply': '*',
	'divide': '/',
	'modulus': '%'
};

// display areas
const disp1 = document.querySelector('#current');
const disp2 = document.querySelector('#temporal');

//function to update content of selected display
const render = (input, maxDigits, target) => {
	const { num1, num2, operator, clear, previous } = input;
	if (target == disp1 && clear) {
		target.textContent = '';
		return
	};
	if (target == disp1 && previous == undefined) return;
	let arr;

	// define array value for display output
	if (target == disp1) {
		if (target.textContent) arr = [symbols[previous.operator], ...previous.num2]
		else arr = [...previous.num1, symbols[previous.operator], ...previous.num2]
	} else arr = [...num1, symbols[operator], ...num2];

	const limitArr = () => {
		while (arr.length > maxDigits) {
			arr.shift()
		}
	};

	// output to the display
	if (target == disp2) limitArr(), target.textContent = arr.join('')
	else if (previous.num1.length && previous.num2.length) {
		arr = target.textContent.split('').concat(arr);
		limitArr(), target.textContent = arr.join('')
	}
};

//listener for mouse events
const allBtns = document.querySelector('#buttons');
allBtns.addEventListener('click', (event) => {
	const selectedKey = event.target.id;
	const output = calculator(selectedKey);
	render(output, 26, disp1);
	render(output, 15, disp2)
});

//listener for keyboard events
document.addEventListener('keydown', (event) => {
	const selectedKey = allBtns.querySelector(`div[data-key='${event.key}']`);

	if (!selectedKey) return;
	const input = selectedKey.id;
	const output = calculator(input);
	render(output, 26, disp1);
	render(output, 15, disp2)
});

//attaching icons
const github = document.querySelector('#github');
const githubIcon = githubPng;
github.src = githubIcon;
const linkedin = document.querySelector('#linkedin');
const linkedinIcon = linkedinPng;
linkedin.src = linkedinIcon;
const twitter = document.querySelector('#twitter');
const twitterIcon = twitterPng;
twitter.src = twitterIcon;