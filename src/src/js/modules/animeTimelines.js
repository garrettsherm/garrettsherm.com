// Credit to http://tobiasahlin.com/moving-letters/ for the animations
// Used effect 15 for title animation and effect 11 for description animation

// Node Modules
import $ from 'jquery';
import anime from 'animejs';

// Resize margin top function
import resizeMarginTopLogo from './onResizeHome.js';


// Default function called to start the animation chain
export default function callLogoTimeline(){

	// Ensure that name, description, and button are not visible
	$('#name-animate').css('opacity', '0');
	$('#desc-animate').css('opacity', '0');
	$('.button-pulse').css('opacity', '0');

	// credit to Tobias Ahlin (http://tobiasahlin.com/moving-letters/) effect 11
	// Used to wrap each letter in description in span for typing effect
	$('#desc-animate .letters').each(function(){
		$(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, '<span class="letter">$&</span>'));
	});

	// Remove the overlay from the page
	removeOverlay();

	// animejs timeline for logo svg drawing, scaling, & rotating
	const logoTimeline = anime.timeline();

	logoTimeline
		// Draw rectangle 1
		.add({
			targets: '#svgAttributes #colored-rect-1',
			width: 500,
			height: 100,
			easing: 'easeInOutSine',
			direction: 'alternate',
			duration: 500,
			delay: 1200
		})
		// Draw rectangle 2
		.add({
			targets: '#svgAttributes #colored-rect-2',
			width: 100,
			height: 500,
			easing: 'easeInOutSine',
			duration: 500
		})
		// Draw rectangle 3
		.add({
			targets: '#svgAttributes #colored-rect-3',
			width: 500,
			height: 100,
			easing: 'easeInOutSine',
			duration: 500
		})
		// Draw rectangle 4
		.add({
			targets: '#svgAttributes #colored-rect-4',
			width: 100,
			height: 300,
			easing: 'easeInOutSine',
			duration: 500
		})
		// Draw rectangle 5
		.add({
			targets: '#svgAttributes #colored-rect-5',
			width: 300,
			height: 100,
			easing: 'easeInOutSine',
			duration: 500
		})
		// fadein rectangle gradients
		.add({
			targets: '#svgAttributes .grad-svg-rect',
			opacity: 0.1,
			easing: 'easeInOutSine',
			duration: 200,
		})
		// fadein the shadow polygons
		.add({
			targets: '#svgAttributes .shadow-poly',
			opacity: 0.2,
			easing: 'easeInOutSine',
			duration: 500		
		})
		// scale and rotate svg
		.add({
			targets: '#svgAttributes svg',
			delay: 300,
			scale: {
				value: 0.5,
				duration: 1000,
				easing: 'easeInOutQuart',
			},
			rotate: {
				value: 315,
				duration: 1000,
				delay: 1000,
				easing: 'easeInOutSine'
			},
			//once finished call movoLogo to center scaled logo
			complete: moveLogo
		});
}

// Function to remove the overlay once css & js assets loaded
function removeOverlay(){

	// animejs timeline for slide up animation
	const overlayTimeline = anime.timeline();

	overlayTimeline
		// slide up
		.add({
			targets: '#spinner-overlay',
			translateY: [0, '-100%'],
			easing: 'easeInOutSine',
			duration: 1000
		});
}

// Function to center the content properly
function moveLogo(){

	// get the margin-top to be added to svg
	const newMarginTop = resizeMarginTopLogo();

	// animejs timeline for centering of content
	const moveLogoTimeline = anime.timeline();

	moveLogoTimeline
		// center logo svg with content
		.add({
			targets: '#svgAttributes svg',
			marginTop: newMarginTop,
			duration: 1000,
			easing: 'easeInOutSine',
			// once finished start name animation
			complete: animateName
		});
}

function animateName(){

	// revert opacity back to default
	$('#name-animate').css('opacity', '');

	// timeline to animate name
	const nameTimeline = anime.timeline();
	
	nameTimeline
		.add({
			// scale out then in
			targets: '#name-animate .word',
			scale: [0, 1],
			opacity: [0, 1],
			easing: 'easeOutCirc',
			duration: 800,
			delay: function(e, i){
				return 800 * i;
			},
			// once finished start the description animation
			complete: animateDescription
		});
}

//
function animateDescription(){

	// revert opacity back to default
	$('#desc-animate').css('opacity', '');

	// timeline to animate description
	const descriptionTimeline = anime.timeline();

	descriptionTimeline
		// start line for typing effect
		.add({
			targets: '#desc-animate .line',
			scaleY: [0,1],
			opacity: [0.5,1],
			easing: 'easeOutExpo',
			duration: 700
		})
		// move line to right for effect
		.add({
			targets: '#desc-animate .line',
			translateX: [0,$('#desc-animate .letters').width()],
			easing: 'easeOutExpo',
			duration: 700,
			delay: 100
		})
		// type in letters effect
		.add({
			targets: '#desc-animate .letter',
			opacity: [0,1],
			easing: 'easeOutExpo',
			duration: 600,
			offset: '-=775',
			delay: function(el, i) {
				return 34 * (i+1);
			},
			// once finished continue to loop line and animate button
			complete: loopLineAnimateButton
		});
}

// Function to start loop typing line and start button animation
function loopLineAnimateButton(){
	loopLine();
	animateButton();
}


// Function to loop typing line
function loopLine(){

	// timeline to animate typing line (infinite)
	const loopTimeline = anime.timeline({ loop: true});

	loopTimeline
		// blink out
		.add({
			targets: '#desc-animate .line',
			opacity: [1,0],
			easing: 'easeOutExpo',
			duration: 800
		})
		// blink in
		.add({
			targets: '#desc-animate .line',
			opacity: [0,1],
			easing: 'easeOutExpo',
			duration: 800
		});
}

// Function to start button animation
function animateButton(){
	
	// revert button to default opacity
	$('.button-pulse').css('opacity', '1');

	// timeline to animate button
	const buttonTimeline = anime.timeline();

	buttonTimeline
		// fade button in
		.add({
			targets: '.button-pulse',
			opacity: [0,1],
			easing: 'easeOutExpo',
			duration: 2000,
			complete: revertDescription
		});
} 

// Function to remove spans from description (for seo/responsive display)
function revertDescription() {
	$('#desc-animate .letters').replaceWith('<span class="letters">Full Stack Developer</span>');
	infiniteRotate();
}

// Function to rotate svg logo (infinite)
function infiniteRotate() {

	// timeline to rotate logo
	const rotateTimeline = anime.timeline({ loop: true});
	
	rotateTimeline
		// rotate to to G
		.add({
			targets: '#svgAttributes svg',
			scale: [0.5, 0.5],
			rotate: {
				value: 0,
				duration: 1500,
				easing: 'easeInOutQuint',
				delay: 8000
			}
		})
		// rotate to diagonal G
		.add({
			targets: '#svgAttributes svg',
			scale: [0.5, 0.5],
			rotate: {
				value: 315,
				duration: 1500,
				easing: 'easeInOutQuart',
				delay: 1000
			}
		});
} 
