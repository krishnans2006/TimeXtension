chrome.storage.sync.get(["domains"], function(result) {
    let array = result["domains"] ? result["domains"] : [];
    for (let i = 0; i < array.length; i++) {
        document.getElementById("list").innerHTML += array[i] + "\n"
    }
})

async function getLocalStorageValue(key) {
    return new Promise((resolve, reject) => {
        try {
            chrome.storage.sync.get(key, function (value) {
                resolve(value);
            })
        }
        catch (ex) {
            reject(ex);
        }
    });
}

let p, unp, unk;
getLocalStorageValue("productive").then(function(x) {
    p = x["productive"];
    getLocalStorageValue("unproductive").then(function(y) {
        unp = y["unproductive"];
        getLocalStorageValue("unknown").then(function(z) {
            unk = z["unknown"];
            console.log(p, unp, unk);
            let colors = ['#28a745', '#6c757d', '#dc3545'];

            let chopts = {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                },
                title: {
                    display: true,
                    text: 'Your Online Browsing'
                }
            };

            let chdata = {
                labels: ['Productive', 'Unknown', 'Unproductive'],
                datasets: [
                    {
                        backgroundColor: colors.slice(0,3),
                        borderWidth: 0,
                        data: [p, unk, unp],
                        hoverOffset: 4
                    }
                ]
            };

            let chrt = document.getElementById("chrt").getContext("2d");
            let myPie = new Chart(chrt, {
                type: 'pie',
                data: chdata,
                options: chopts
            });
        })
    })
})