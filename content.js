chrome.runtime.onMessage.addListener(
    function(request){
        var index = 0;
        var videoUrls = [];
        var video = document.getElementById("video"+index);
        while(video){
            console.log(video.innerHTML);
            videoUrls.push(video.innerHTML);
            index++;
            video = document.getElementById("video"+index);
        }

        var res;
        for(var i = 0; i < videoUrls.length; i++){
            const xhr = new XMLHttpRequest();
            xhr.open("GET", videoUrls[i]);
            xhr.onload = function(){
                console.log("Downloading");
                res = xhr.response;
            };
            xhr.send();
            if(xhr.status == 200){
                break;
            }
        }

        const filename = "video.mp4";
        var blob = new Blob([res], {type: "video/mp4"});
        const blobUrl = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.setAttribute("href", blobUrl);
        a.setAttribute("download", filename);
        a.click();
    }
)

