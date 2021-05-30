function get_url() {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        let tab = tabs[0];
        let url = new URL(tab.url)
        let domain = url.hostname
        chrome.storage.sync.get(["domains"], function(result) {
            let doms = result["domains"] ? result["domains"] : {};

            if (domain in doms) {
                doms[domain] = doms[domain] + 1;
            } else {
                doms[domain] = 1;
            }

            let jsonObj = {};
            jsonObj["domains"] = doms;
            chrome.storage.sync.set(jsonObj, function() {});
            console.log(doms);
        });
    })
}

chrome.storage.sync.set({productive: 15});
chrome.storage.sync.set({unproductive: 1});
chrome.storage.sync.set({unknown: 3});
setInterval(get_url, 10000);