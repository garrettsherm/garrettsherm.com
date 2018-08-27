import $ from 'jquery';


// resize margintop on svg to center content
export default function resizeMarginTopLogo(){

	const windowHeight = $(window).height();

	const svgAttrMarginTop = parseInt($('#svgAttributes svg').css('margin-top'));

	// get home container height without margin top
	const homeContainerHeight = $('#home-container').height() - svgAttrMarginTop;

	// get svgAttr height without margin top
	const svgAttrHeight = $('#svgAttributes').height() - svgAttrMarginTop;

	// calculate height of 0.5 scaled & diagonal svg 
	const svgHeight = Math.sqrt(Math.pow((svgAttrHeight / 2), 2) * 2);

	// Get visual padding on the top of svg logo
	const svgPadding = (svgAttrHeight - svgHeight) / 2;

	// if the homeContainer < window then need padding to center
	if(homeContainerHeight < windowHeight){

		// calculate space below homeContainer content
		const belowContainerHeight = windowHeight - homeContainerHeight;

		// if space below < space above logo then no need for margin centering
		if(belowContainerHeight < svgPadding) return 0;

		// Know that leftover >= 0
		const leftover = belowContainerHeight - svgPadding;

		// cut leftover in half = amount to add to margin
		const amountToMarginTop = leftover / 2;

		return amountToMarginTop;
	} 
	// if the homeContainer >= window no need for margin-top 
	else {
		return 0;
	}
	
}