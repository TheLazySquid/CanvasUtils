chrome.storage.sync.get(['fakeEmail', 'pfp', 'name'], function(result){
    if(result.fakeEmail){
        document.addEventListener('keydown', (e) => {
            if(e.key == "Escape"){
                if(!location.href.includes("/conversations")) return;
                if(document.querySelectorAll("#bulk_message").length == 0){
                    //this is for replying to a message
                    if(document.getElementsByClassName("message-content").length == 0) return;
                    if(document.getElementsByClassName("conversation_body").length == 0) return;
                    let time = new Date()
                    let message = document.getElementsByClassName("conversation_body")[0].value;
                    var container = document.getElementById("flash_message_holder")
                    container.innerHTML = "<li class=\"ic-flash-success\" aria-hidden=\"true\" style=\"z-index: 2;\"><div class=\"ic-flash__icon\"><i class=\"icon-check\"></i></div>Message sent!<button type=\"button\" class=\"Button Button--icon-action close_link\" aria-label=\"Close\"><i class=\"icon-x\"></i></button></li>"
                    var convoContainer = document.getElementsByClassName("message-content")[0];

                    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                    var timeString = months[time.getMonth()]
                    var extra0 = "";
                    if(time.getMinutes() < 10) extra0 = "0";
                    var am = "am";
                    if(time.getHours() > 12) am = "pm";
                    timeString = timeString +  ` ${time.getDate()}, ${time.getFullYear()} at ${time.getHours() % 12}:${extra0}${time.getMinutes()}${am}`;

                    var usernames = document.querySelectorAll(".username");
                    var sender = usernames[usernames.length-1].innerHTML;
                    var className = document.querySelectorAll(".context")[0].innerHTML;

                    var newMessage = document.createElement("li")
                    newMessage.class = "message-item-view";
                    newMessage.dataset.id = "25864735";
                    newMessage.innerHTML = `<div class=\"message-info\"><div class=\"user-info\"><div id=\"message-item-avatar-wrapper-0rO1WJjFWAkAFX9h2PU9c\" class=\"fs-exclude avatar\"><span name=\"${result.name}\" src=\"${result.pfp}\" color=\"default\" shape=\"circle\" class=\"fOyUs_bGBk fOyUs_cuDs elMgC_bGBk elMgC_ycrn elMgC_cJVF elMgC_ddES elMgC_cHTY\" style=\"background-image: url(&quot;${result.pfp}&quot;);\"><img src=\"${result.pfp}\" class=\"elMgC_MrJH\" aria-hidden=\"true\"></span></div><div class=\"message-author-and-participants\"><b class=\"username\">${result.name}</b>,<span class=\"message-participants-wrapper\"><span class=\"message-participants\" aria-live=\"polite\"> ${sender}</span><div class=\"hidden\"><span class=\"summarized-message-participants\">...</span><span class=\"full-message-participants\"><span> ${sender}</i></span></span></div></span><span class=\"context\">${className}</span></div></div><div class=\"message-metadata clearfix\"><div class=\"date\">${timeString}</div><ul class=\"actions unstyled\"><li><a href=\"#\" class=\"icon-reply-2 reply-btn Button Button--icon-action\" title=\"Reply\" data-tooltip=\"\"><span class=\"screenreader-only\">Reply to conversation ${message}</span></a></li><li><div class=\"inline-block\"><a href=\"#\" data-kyle-menu-options=\"{&quot;appendMenuTo&quot;: &quot;body&quot;}\" role=\"button\" class=\"al-trigger Button Button--icon-action\" title=\"More options\" data-tooltip=\"\"><i class=\"icon-settings\"></i><i class=\"icon-mini-arrow-down\"></i><span class=\"screenreader-only\">Message actions for ${message}</span></a><ul class=\"al-options\"><li><a href=\"#\" class=\"reply-all-btn\">Reply all</a></li><li><a href=\"#\" class=\"forward-btn\">Forward</a></li><li><a href=\"#\" class=\"delete-btn\">Delete</a></li></ul></div></li></ul></div></div><p>${message}</p>`
                    convoContainer.insertBefore(newMessage, convoContainer.firstChild)
                    let removeContainer = setTimeout(() => {
                        container.innerHTML = ""
                    }, 3000);
                }else{
                    //for creating a message
                    var container = document.getElementById("flash_message_holder")
                    container.innerHTML = "<li class=\"ic-flash-success\" aria-hidden=\"true\" style=\"z-index: 2;\"><div class=\"ic-flash__icon\"><i class=\"icon-check\"></i></div>Message sent!<button type=\"button\" class=\"Button Button--icon-action close_link\" aria-label=\"Close\"><i class=\"icon-x\"></i></button></li>"
                    let removeContainer = setTimeout(() => {
                        container.innerHTML = ""
                    }, 3000);
                }
            }
        })
    }
})