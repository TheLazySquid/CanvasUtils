if(location.href.includes("instructure.com/profile/settings")){
    let imgUrl = document.querySelector(".profile_pic_link").style.backgroundImage;
    imgUrl = imgUrl.substring(5,imgUrl.length-2);

    let displayName = document.querySelector("#short_name").innerHTML;

    chrome.storage.sync.set({pfp: imgUrl, name: displayName})
    var container = document.getElementById("flash_message_holder")
    container.innerHTML = "<li class=\"ic-flash-success\" aria-hidden=\"true\" style=\"z-index: 2;\"><div class=\"ic-flash__icon\"><i class=\"icon-check\"></i></div>Canvas Utils succcessfully saved user settings!<button type=\"button\" class=\"Button Button--icon-action close_link\" aria-label=\"Close\"><i class=\"icon-x\"></i></button></li>"
    let removeContainer = setTimeout(() => {
        container.innerHTML = ""
    }, 5000);
}