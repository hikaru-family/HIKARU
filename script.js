const API_KEY = "AIzaSyBMzeKUnFr-SsDu9NUY-Bd2xStqrpaIva0";
const CHANNEL_ID = "UC4-lIHcs5WDuZ4P-6Bjm7KQ";

fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`)
.then(res => res.json())
.then(data => {

let stats = data.items[0].statistics;

document.getElementById("subs").innerText = stats.subscriberCount;
document.getElementById("views").innerText = stats.viewCount;

});
