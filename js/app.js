let navblock = document.querySelector('.nav-block');
let closi = document.querySelector('.close');
let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
	navblock.style.display = 'flex';
	closi.style.display = 'flex';
	hamburger.style.display = 'none';

	closi.addEventListener('click', () => {
		navblock.style.display = 'none';
		hamburger.style.display = 'flex';
		closi.style.display = 'none';
	})
})

window.addEventListener('resize', () => {
	// alert('Хватит играться с окном, мудила!')
	if (window.innerWidth > 850) {
		navblock.style.display = '';
	} 
})