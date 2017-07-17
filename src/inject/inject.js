
function clearLikes() {
	var elementsCleared = $("li.stream-item[data-suggestion-json*=ActivityTweet]").remove();
	if (elementsCleared.length > 0){
		console.log("Cleared " + elementsCleared.length);
	}
}

chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		// This part of the script triggers when page is done loading
		clearLikes();
		setInterval(clearLikes, 2000);

	}
	}, 10);
});