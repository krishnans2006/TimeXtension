const prods = ["cloudflare.com", "wolframalpha.com", "maps.google.com", "support.google.com", "scholar.google.com", "w3.org", "wordpress.org", "mozilla.org", "linkedin.com", "docs.google.com", "en.wikipedia.org", "adobe.com", "drive.google.com", "bbc.co.uk", "es.wikipedia.org", "github.com", "cnn.com", "pt.wikipedia.org", "fr.wikipedia.org", "bbc.com", "theguardian.com", "nytimes.com", "www.weebly.com", "forbes.com", "dropbox.com", "issuu.com", "creativecommons.org", "news.google.com", "slideshare.net", "mail.google.com", "washingtonpost.com", "usnews.com", "books.google.com", "foxnews.com", "id.wikipedia.org", "latimes.com", "independent.co.uk", "nasa.gov", "businessinsider.com", "cdc.gov", "un.org", "dailymail.co.uk", "huffpost.com", "abcnews.go.com", "usatoday.com", "archive.org", "urbandictionary.com", "forms.gle", "pbs.org", "loc.gov"];
const unprods = ["amazon.com", "facebook.com", "netflix.com", "instagram.com", "twitter.com", "ebay.com", "hulu.com", "hotstar.com", "spotify.com", "whatsapp.com", "playstation.com", "idmb.com", "rottentomatoes.com", "disney.com", "buzzfeed.com", "reddit.com", "tumblr.com", "walmart.com", "twitch.tv", "collegehumor.com", "etsy.com", "craiglist.com", "espn.com", "lifehacker.com", "theverge.com", "nba.com", "blogspot.com", "estream.to", "funnyjunk.com", "gigaom.com", "gizamodo.com", "itunes.apple.com", "minecraft.net", "myspace.com", "pinterest.com", "techvibes.com", "theonion.com", "uptostream.com", "vimeo.com", "primeshare.tv", "runetrack.com", "pbfcomics.com", "newsblur.com", "tiktok.com", "miniclip.com", "mashable.com", "discord.com", "comcast.net", "candystand.com", "blowcomics.com"];

function get_url() {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        let tab = tabs[0];
        let url = new URL(tab.url)
        let domain = url.hostname
        if (prods.indexOf(domain) > -1) {
            chrome.storage.sync.get(null, function (result) {
                result["productive"] = result["productive"] + 1;
                chrome.storage.sync.set(result, function () {
                })
            })
        } else if (unprods.indexOf(domain) > -1) {
            chrome.storage.sync.get(null, function (result) {
                result["unproductive"] = result["unproductive"] + 1;
                chrome.storage.sync.set(result, function () {
                })
            })
        } else {
            chrome.storage.sync.get(null, function (result) {
                result["unknown"] = result["unknown"] + 1;
                chrome.storage.sync.set(result, function () {
                })
            })
        }
    })
}

chrome.alarms.create({ periodInMinutes: 1 });
chrome.alarms.onAlarm.addListener(() => {
    get_url()
});
