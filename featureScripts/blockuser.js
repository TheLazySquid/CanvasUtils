chrome.storage.sync.get(['blockedUsers', 'hiddenMessages'], (result) => {
    if(result.blockedUsers.length == 0){
        chrome.storage.sync.set({hiddenMessages: 0})
        return;
    }
    var blockedUsers = result.blockedUsers.replaceAll(", ", ",")
    blockedUsers = blockedUsers.split(",");
    let currentHidden = Object.assign(result).hiddenMessages;
    let hidden = 0;
    
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
            let read = message.querySelector(".read-state");
            if(read.classList[1] == undefined && blocked) hidden++;
            if(blocked) message.remove()
        }

        if(hidden != currentHidden){
            chrome.storage.sync.set({hiddenMessages: hidden})
            currentHidden = hidden;
        }
    }
    
    deleteBlocked()
})