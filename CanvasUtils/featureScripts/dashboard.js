function changeHref(){
    if(!location.href.endsWith("instructure.com")) return;
    let cards = document.querySelectorAll(".ic-DashboardCard__link");
    for(let card of cards){
        if(card.href.endsWith("/assignments")) continue;
        card.href = card.href + "/assignments";
    }
    window.requestAnimationFrame(changeHref);
}

changeHref()