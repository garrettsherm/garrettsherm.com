import $ from 'jquery';


// Add margin top to when only Logo drawing (name/desc/button no showing)
export default function initialHomeResize(){

	const windowHeight = $(window).height();
	const homeContainerEl = $('#home-container');
	const svgEl = $('#svgAttributes');

	// margin to add 
	const startMargin = (windowHeight - svgEl.height()) / 2;

	// if homeContainer > window then no need to add padding to center
	// default to 30px
	if(homeContainerEl.height() > windowHeight){
		$('#svgAttributes svg').css('margin-top', '70px');
		
		// make sure the background gradient covers entire homeContainer
		minHeightHomeContainer();
	} 
	// if homeContainer <= window then add the margin to top
	else {
		$('#svgAttributes svg').css('margin-top', startMargin);
	}
}

// Function to make sure gradient background covers all content
function minHeightHomeContainer() {
	const homeContainerEl = $('#home-container');
	$('.full-height-width').css('min-height', homeContainerEl.height());
}

