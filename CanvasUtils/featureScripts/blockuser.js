chrome.storage.sync.get(['blockedUsers'], (result) => {
    if(result.blockedUsers.length == 0) return;
    var blockedUsers = result.blockedUsers.replaceAll(", ", ",")
    blockedUsers = blockedUsers.split(",");
    
    function deleteBlocked(){
        if(document.querySelectorAll(".messages").length == 0) return;
        window.requestAnimationFrame(deleteBlocked);
        var container = document.querySelector(".messages");
        let messages = container.childNodes;
        
        for(let message of messages){
            if(message.nodeName != "LI") continue;
            let author = message.querySelector(".author").innerHTML.toLowerCase();
            let blocked = false;
            for(let blockedUser of blockedUsers){
                if(author.includes(blockedUser)) blocked = true;
            }
            if(blocked) message.remove()
        }
    }
    
    deleteBlocked()
})