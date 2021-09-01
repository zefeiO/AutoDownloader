document.addEventListener("DOMContentLoaded", function () {
    
    document.querySelector("#video").addEventListener("click", downloadVideo, false)
    document.querySelector("#audio").addEventListener("click", downloadAudio, false)
    
    function downloadVideo(){
        chrome.tabs.query(
            {
                currentWindow: true, 
                active: true
            },
            function(tabs){
                chrome.tabs.sendMessage(tabs[0].id, "I love Tina")
            } 
        )
    }

    function downloadAudio(){
        chrome.tabs.query(
            {
                currentWindow: true,
                active: true
            },
            function(tabs){
                chrome.tabs.sendMessage(tabs[0].id, "Tina loves me")
            }
        )
    }
}, false)