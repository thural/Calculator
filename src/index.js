//////////////////////////////////NO FRAMEWORK AND NO ENUM FUNCTION means LOTS of CODE ////////////////////////
import './style.css';
import calculator from './calculator';
import githubPng from './images/github_icon.png';
import linkedinPng from './images/linkedin_icon.png';
import twitterPng from './images/twitter_icon.png';

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
function render(input, maxDigits, target) {
  let  arr = [...input[0], symbols[input[1]], ...input[2]];
  if ( target == disp1 && !target.textContent) arr = [symbols[input[1]], ...input[2]];

	while (arr.length > maxDigits) {
		arr.shift()
	};

	if (target == disp2) target.textContent = arr.join('')
  else target.textContent += arr.join('')
};

//listener for mouse events
const allBtns = document.querySelector('#buttons');
allBtns.addEventListener('click', (event) => {
	selectedKey = event.target.id;
	calculator(selectedKey);
	render(disp2, 13)
});

//listener for keyboard events
document.addEventListener('keydown', (event) => {
	const selectedKey = allBtns.querySelector(`div[data-key='${event.key}']`);
	if (!selectedKey) return;
	let output = calculator(selectedKey);
	render(output, 26, disp1);
	render(output, 13, disp2)
});