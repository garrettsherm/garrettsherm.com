import addOverlayMenuClick from '../modules/overlayMenu';
import lazyLoadImages from '../modules/lazyLoadingImg';
import smoothscroll from 'smoothscroll-polyfill';

// projects page css
import '../../scss/modules/reset.scss';
import '../../scss/modules/general.scss';
import '../../scss/modules/buttons.scss';
import '../../scss/modules/social-icons.scss';
import '../../scss/modules/overlay-menu.scss';
import '../../scss/pages/projects/projects.scss';


addOverlayMenuClick();
lazyLoadImages();
smoothscroll.polyfill();

document.getElementById('button-projects-work').addEventListener('click', function(){
	document.querySelector('#work-projects-container').scrollIntoView({
		behavior: 'smooth'
	});
});

document.getElementById('button-projects-personal').addEventListener('click', function(){
	document.querySelector('#personal-projects-container').scrollIntoView({
		behavior: 'smooth'
	});
});