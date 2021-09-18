var arr = [];
var timeArr = [];

chrome.storage.local.get("key", function(value) {
	console.log('Initial Value currently is ' + value.key);
	arr = value.key;
});
chrome.storage.local.get("tkey", function(value) {
	console.log('Value currently is ' + value.tkey);
	timeArr = value.tkey;
});

console.log(arr);
console.log(timeArr);

function a () {
	chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
		let url = tabs[0].url;
		let url2 = url.split('/', 3).join('/');
		
		
		if (arr.includes(url2)) {
			timeArr[arr.indexOf(url2)] += 5;
		}
		else {
			arr.unshift(url2);
			timeArr.unshift(5);
		}

		document.getElementById('urltext').innerHTML += (url2 + timeArr[arr.indexOf(url2)] + "<br><br>") ;

		chrome.storage.local.set({"key": arr}, function() {
			console.log('Value is set to ' + arr);
		});
		chrome.storage.local.set({"tkey": timeArr}, function() {
			console.log('Value is set to ' + timeArr);
		});

	});

	setTimeout(a, 5000);
}
a();