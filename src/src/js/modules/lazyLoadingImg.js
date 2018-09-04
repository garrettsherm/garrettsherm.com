// David Walsh lazy loading technique with noscript fallback
// https://davidwalsh.name/lazyload-image-fade
export default function lazyLoadImages(){
	[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
		img.setAttribute('src', img.getAttribute('data-src'));
		img.onload = function() {
			img.removeAttribute('data-src');
		};
	});
}