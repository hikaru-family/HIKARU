const API_KEY = "MASUKKAN_API_KEY";
const CHANNEL_ID = "MASUKKAN_CHANNEL_ID";

fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`)
.then(res => res.json())
.then(data => {

let stats = data.items[0].statistics;

document.getElementById("subs").innerText = stats.subscriberCount;
document.getElementById("views").innerText = stats.viewCount;

});
