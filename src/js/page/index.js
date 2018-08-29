
// Node Modules
import $ from 'jquery';

// Individual lodash functions
import debounce from 'lodash.debounce';

// Animation functions for homepage
import callLogoTimeline from '../modules/animeTimelines.js';
import initialHomeResize from '../modules/initialHomeResize.js';
import resizeMarginTopLogo from '../modules/onResizeHome.js';

// Index page css
import '../../scss/modules/reset.scss';
import '../../scss/modules/general.scss';
import '../../scss/modules/buttons.scss';
import '../../scss/modules/gradient-bg.scss';
import '../../scss/modules/social-icons.scss';
import '../../scss/modules/spinner-overlay.scss';
import '../../scss/pages/index/index.scss';

// Run on js load
$(function(){

	// Initial center of logo svg
	initialHomeResize();

	// Start animation of logo/title/description/button
	callLogoTimeline();
});

// On page resize add proper margin-top to center content
// lodash debounce is used to prevent resize function from firing too often
// set to only fire 500ms after last call to resize finished
$(window).on('resize', debounce(function(){

	// get the new margin-top needed to center content, 0 if screen too small to center
	const newMarginTop = resizeMarginTopLogo();
	
	// add new margin-top to svg
	$('#svgAttributes svg').css('margin-top', newMarginTop);
		
	// Calculate the actual height of the homecontainer without margin-top
	const homeContainerHeight = $('#home-container').height() - newMarginTop;

	// ensure that the full-height-width background covers the entire homeContainer
	$('.full-height-width').css('min-height', homeContainerHeight);

}, 500));
