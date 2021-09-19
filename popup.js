
function main() {
	chrome.storage.local.get("key", function(value) {
		console.log('Initial Value currently is ' + value.key);
		arr = value.key;
		chrome.storage.local.get("tkey", function(value) {
			console.log('Value currently is ' + value.tkey);
			timeArr = value.tkey;

			console.log(arr);
			console.log(timeArr);
		
			document.getElementById('urltext').innerHTML = "";
			for (let i = 0; i < arr.length; i++) {
				document.getElementById('urltext').innerHTML += (arr[i] + " " + ~~(timeArr[i] / 3600) + "h " + ~~((timeArr[i] % 3600) / 60) + "m " + timeArr[i] % 60 + "s <br>") ;
			}
		});
	});
}

window.onload = function () {
	main();
}

chrome.storage.onChanged.addListener( ( changes, namespace ) => {
	main();
});


