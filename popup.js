function a (){
	var d = new Date();
	var n2 = d.getTime();
	console.log(n);
	chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
		let url = tabs[0].url;
		console.log(url);
		let url2 = url.split('/', 3).join('/');
		console.log(url2);
		// use `url` here inside the callback because it's asynchronous!
	});
	setTimeout(a, 5000);
}
a();