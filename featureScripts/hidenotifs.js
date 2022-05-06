chrome.storage.sync.get(['announcements', 'hiddenMessages'], (value) => {
    window.addEventListener('load', () => {
        let addedMessages = 0;
        for(let i = 0; i < value.announcements.length; i++){
            addedMessages += value.announcements[i].amount;
        }
        if(addedMessages == 0 && value.hiddenMessages == 0) return;
        let messages = document.querySelector("#global_nav_conversations_link").querySelector(".menu-item__badge")
        if(messages.firstChild){
            let currentAmount = messages.children[1].innerHTML;
            messages.children[1].innerHTML = (+currentAmount + addedMessages - +value.hiddenMessages);
        }
        else{
            messages.innerHTML = `<span aria-hidden="true">${addedMessages - +value.hiddenMessages}</span>`
        }
        if(messages?.children?.[1]?.innerHTML == 0) messages.remove();
    })
})