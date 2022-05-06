chrome.storage.sync.get(['announceInbox'], (value) => {
    if(!value.announceInbox) return;
    let announcements = []

    function checkInbox(){
        if(!location.href.endsWith("instructure.com/")) return;
        let unreads = document.querySelectorAll(".unread_count");
        for(let unread of unreads){
            let href = unread.parentElement.parentElement.parentElement.href;
            let container = unread.parentElement.parentElement.parentElement.parentElement.parentElement;
            let className = container.querySelector(".ic-DashboardCard__header-title").firstChild.innerHTML;
            announcements.push({link: href, amount: +unread.innerHTML, className})
            unread.parentElement.remove()
        }
        chrome.storage.sync.set({announcements});
        if(announcements.length == 0){
            setTimeout(checkInbox, 1000);
        }
    }
    checkInbox();

    function addMessages(){
        if(!location.href.includes("/conversations")) return;
        chrome.storage.sync.get(['announcements'], (value) => {
            window.requestAnimationFrame(addMessages)
            let container = document.querySelector(".messages");
            if(container?.firstChild?.dataset?.announcement != undefined) return;
            for(let announcement of value.announcements){
                let message = document.createElement('li');
                message.innerHTML = `<div class="message-left-column">
                <div class="select-checkbox" id="conversation-checkbox-5146532"><div class="epRMX_bGBk"><input id="u6O7yPaYeagV" type="checkbox" class="epRMX_cwos" value=""><label for="u6O7yPaYeagV" class="epRMX_bOnW"><span class="yyQPt_bGBk yyQPt_ycrn"><span class="yyQPt_cSXm" aria-hidden="true"></span><span class="yyQPt_blJt"><span class="ergWt_bGBk">Announcement</span></span></span></label></div></div>
                <input href="${announcement.link}" class="read-state read" type="checkbox" aria-checked="true" title="Mark as unread">
                    <span class="screenreader-only">
                    Unread
                    </span>
                </div>
                
                <div class="message-middle-column">
                <div class="date"><time data-html-tooltip-title="Announcement" datetime="2022-03-21T13:06:31.000Z" undefined="">
                <span aria-hidden="true">Announcement</span>
                <span class="screenreader-only">Announcement</span>
                </time></div>
                <h2 class="author">${announcement.className}</h2>
                <h3 class="subject">
                    Announcement 
                </h3>
                <div class="summary">${announcement.amount} unread announcements</div>
                </div>
                
                <div class="message-right-column">
                <span class="message-count label">
                    ${announcement.amount}
                    <span class="screenreader-only">Total messages</span>
                </span>
                
                
                <span class="StarButton-LabelContainer" id="star_button_5146532" style="display: none;">
                    
                    
                        Not starred "current event", Click to star.
                    
                    
                </span>
                <a href="${announcement.link}" class="star-btn " title="Star conversation" aria-checked="false" aria-labelledby="star_button_5146532" role="checkbox"></a>
                
                </div>
                
                <a href="${announcement.link}" class="open-message" role="button">
                Open Message
                </a>`
                message.dataset.announcement = true;
                message.onclick = () => {location.href = announcement.link}
                if(container.firstChild) container.insertBefore(message, container.firstChild);
                else container.appendChild(message);
            }
        })
    }

    addMessages()
})