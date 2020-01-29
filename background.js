
chrome.runtime.onInstalled.addListener(function() {
	    
	/*
	chrome.cookies.getAll({ domain: '.stronium.com' },function(cookies){
console.log(cookies);
	});
	*/

	copyText = function(text){
		
		var el = document.createElement("textarea");
		el.value = text;
		el.setAttribute("readonly", "");
		el.style = {
			position: "absolute",
			left: "-9999px"
		};
		document.body.appendChild(el);
		el.select();
		document.execCommand("copy");
		document.body.removeChild(el);

	};
	
	encodeSelectedKeyword = function(word){
		var encodedUri = encodeURIComponent(word.selectionText);
		copyText(encodedUri);
		 
	};

	decodeSelectedKeyword = function(word){
		var decodedUri = decodeURIComponent(word.selectionText);
		copyText(decodedUri);
	};

	chrome.contextMenus.create({
		title: 'Graphite URI Encode/Decode',
		id: 'main-parent',
		contexts: ['selection']
	});
	
	chrome.contextMenus.create({
		title: 'Copy and Encode',
		parentId: 'main-parent',
		contexts: ['selection'],
		onclick: encodeSelectedKeyword
	});
	  
	chrome.contextMenus.create({
		title: 'Copy and Decode',
		parentId: 'main-parent',
		contexts: ['selection'],
		onclick: decodeSelectedKeyword
	});
});
