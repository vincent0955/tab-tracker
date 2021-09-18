const arr = [];
const timeArr = [];
function a (){
	chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
		let url = tabs[0].url;
		console.log(url);
		let url2 = url.split('/', 3).join('/');
		console.log(url2);
		document.getElementById('url').href = url2;
		document.getElementById('urltext').innerHTML = url2;
		
		console.log(arr.indexOf(url2));
		if (arr.includes(url2)){
			timeArr[arr.indexOf(url2)] += 5000;
		}
		else{
			arr.unshift(url2);
			timeArr.unshift(5000);
		}
		
		
		//timeArr[0] += 5000;
		
		// use `url` here inside the callback because it's asynchronous!
	});
	console.log(arr);
	console.log(timeArr);
	setTimeout(a, 5000);
}
a();