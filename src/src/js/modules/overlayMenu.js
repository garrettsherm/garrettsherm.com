export default function addOverlayMenuClick(){
	document.querySelector('.menu-icon-item i').addEventListener('click', function(){
		const overlay = document.querySelector('#menu-overlay-container');
		overlay.classList.add('visible');
	});

	document.querySelector('.close-menu-item i').addEventListener('click', function(){
		const overlay = document.querySelector('#menu-overlay-container');
		overlay.classList.remove('visible');
	});
}