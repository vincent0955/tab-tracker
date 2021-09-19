
function main() {
	chrome.storage.local.get("key", function(value) {
		console.log('Initial Value currently is ' + value.key);
		arr = value.key;
		chrome.storage.local.get("tkey", function(value) {
			console.log('Value currently is ' + value.tkey);
			timeArr = value.tkey;

			console.log(arr);
			console.log(timeArr);

			var HTML = "";

			HTML = "";
			HTML += "<table>";
			for (let i = 0; i < arr.length; i++) {
				HTML += "<tr>";
				HTML += ("<td style=\"text-align:left;\">" + arr[i] + "</td> <td style=\"text-align:right;\">" + ~~(timeArr[i] / 3600) + "h " + ~~((timeArr[i] % 3600) / 60) + "m " + timeArr[i] % 60 + "s </td>");
				HTML += "</tr>";
			}
			HTML += "</table>";
			document.getElementById('urltext').innerHTML = HTML;
			console.log(document.getElementById('urltext').innerHTML);

		});
	});
}

window.onload = function () {
	main();
}

chrome.storage.onChanged.addListener( ( changes, namespace ) => {
	main();
});


