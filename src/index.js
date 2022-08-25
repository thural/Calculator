//////////////////////////////// NO ENUM FUNCTION means LOTS of CODE ////////////////////////
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

// function to limit length of the array
const limitArr = (arr, max) => {
	while (arr.length > max) {
		arr.shift()
	}
};

// display areas
const disp1 = document.querySelector('#current');
const disp2 = document.querySelector('#temporal');

//function to render content of target display
const render1 = (output) => {
	const { clear, previous } = output;
	//clear disp1 if state is clear
	if (clear) {
		disp1.textContent = '';
		return
	};
	// stop function if no calculation done on previous input
	if (previous == undefined) return;
	let arr;
	// define array value for display output
	if (disp1.textContent) arr = [symbols[previous.operator], ...previous.num2]
	else arr = [...previous.num1, symbols[previous.operator], ...previous.num2];
	// output to the display
	if (previous.num1.length && previous.num2.length) {
		arr = disp1.textContent.split('').concat(arr);
		limitArr(arr, 26), disp1.textContent = arr.join('')
	}
};

//render function for disp2
const render2 = (output) => {
	const { num1, num2, operator } = output;
	// define array value for display output
	let arr = [...num1, symbols[operator], ...num2];
	// output to the display
	limitArr(arr, 13), disp2.textContent = arr.join('')
};

//listener for mouse events
const allBtns = document.querySelector('#buttons');
allBtns.addEventListener('click', (event) => {
	const selectedKey = event.target.id;
	const output = calculator(selectedKey);
	render1(output);
	render2(output)
});

//listener for keyboard events
document.addEventListener('keydown', (event) => {
	const selectedKey = allBtns.querySelector(`div[data-key='${event.key}']`);

	if (!selectedKey) return;
	const input = selectedKey.id;
	const output = calculator(input);
	render1(output);
	render2(output)
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