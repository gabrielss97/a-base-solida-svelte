import viewportAction from './useViewportAction';

export default function lazyimage(element) {
	const viewportActionMethods = viewportAction(element);
	element.addEventListener('enterViewport', enterViewport);
	
	function enterViewport() {
		element.src = element.dataset.src;
		element.removeEventListener('enterViewport', enterViewport);
	}
	
	return {
		destroy() {
			viewportActionMethods.destroy();
			element.removeEventListener('enterViewport', enterViewport);
		}
	}
}