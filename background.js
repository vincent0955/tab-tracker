var arr = [];
var timeArr = [];
function a () {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        let url2 = url.split('/', 3)[2];
        
        // chrome.storage.local.get("key", function(value) {
        //     console.log('Initial Value currently is ' + value.key);
        //     arr = value.key;
        //     chrome.storage.local.get("tkey", function(value) {
        //         console.log('Value currently is ' + value.tkey);
        //         timeArr = value.tkey;
        
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
    
        //     });
        // });
    })
}

chrome.runtime.onInstalled.addListener( () => {
    chrome.alarms.create('hello', { periodInMinutes: 0.0166 });
});

chrome.alarms.onAlarm.addListener(function(alarm) {
    if (alarm.name == 'hello') {
        a();
    }
});