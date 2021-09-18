function a (){
	chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
		let url = tabs[0].url;
		console.log(url);
		let url2 = url.split('/', 3).join('/');
		console.log(url2);
		document.getElementById('url').href = url2;
		document.getElementById('urltext').innerHTML = url2;
		// use `url` here inside the callback because it's asynchronous!
	});
	setTimeout(a, 5000);
}
a();