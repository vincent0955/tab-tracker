var arr = [];
var timeArr = [];
//chrome.storage.local.clear();
// chrome.tabs.onActivated.addListener( function(info) {
//     //var t = //
//     var tab = chrome.tabs.get(info.tabId, function(tab) {
//     let url = tab.url
//     let url2 = url.split('/', 3)[2];
        
//     chrome.storage.local.get("key", function(value) {
// 		console.log('Initial Value currently is ' + value.key);
// 		arr = value.key;
// 	});
// 	chrome.storage.local.get("tkey", function(value) {
// 		console.log('Value currently is ' + value.tkey);
// 		timeArr = value.tkey;
// 	});

//         if (arr.includes(url2)) {
//             timeArr[arr.indexOf(url2)] += 1;
//         }
//         else {
//             arr.unshift(url2);
//             timeArr.unshift(1);
//         }

//         chrome.storage.local.set({"key": arr}, function() {
//             console.log('Value is set to ' + arr);
//         });
//         chrome.storage.local.set({"tkey": timeArr}, function() {
//             console.log('Value is set to ' + timeArr);
//         });
//     });
// });



function a () {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        let url2 = url.split('/', 3)[2];
        
        if (arr.includes(url2)) {
            timeArr[arr.indexOf(url2)] += 1;
        }
        else {
            arr.unshift(url2);
            timeArr.unshift(1);
        }

        chrome.storage.local.set({"key": arr}, function() {
            console.log('Value is set to ' + arr);
        });
        chrome.storage.local.set({"tkey": timeArr}, function() {
            console.log('Value is set to ' + timeArr);
        });

    })
    setTimeout(a, 1000);
    // self.onactivate = e => {
    //     e.waitUntil(new Promise(resolve => setTimeout(resolve, 1e3)));
    //   };
}
a();
