var playInfo = window.__playinfo__;
const videos = playInfo["dash"]["video"];
var videoUrls = [];
for(var i = 0; i < videos.length; i++){
    videoUrls.push(videos[i]["baseUrl"])
}
console.log(videoUrls);
var node = document.getElementsByTagName("body")[0];

for(var i = 0; i < videoUrls.length; i++){
    var elem = document.createElement("div");
    elem.setAttribute("id", "video" + i);
    elem.innerHTML = videoUrls[i];
    node.appendChild(elem);
}
