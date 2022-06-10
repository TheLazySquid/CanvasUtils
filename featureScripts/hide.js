chrome.storage.sync.get(['hideOverdue', 'hideEC', 'hideLate', 'hideMissing', 'hideAnnouncements', 'hideLinkBar'], (value) => {
    if(value.hideEC) run();
    if(value.hideOverdue) deleteOverdue()
    if(value.hideMissing){
        let missing = document.querySelectorAll(".submission-missing-pill");
        for(let pill of missing){
            pill.remove();
        }
    }
    if(value.hideLate){
        let late = document.querySelectorAll(".submission-late-pill");
        for(let pill of late){
            pill.remove();
        }
    }
    if(value.hideAnnouncements){
        window.addEventListener("load", () => {
            let announcements = document.querySelectorAll(".announcements");
            for(let announcement of announcements){
                announcement.remove();
            }
        });
    }
    if(value.hideLinkBar){
        window.addEventListener("load", () => {
            let linkBar = document.querySelectorAll(".ic-DashboardCard__action-container");
            linkBar.forEach(link => {
                link.remove();
            });
        });
    }
})

function run(){
    if(!location.href.endsWith("/grades")) return
    let grades = document.querySelectorAll(".student_assignment")
    let removed = false;
    for(let grade of grades){
        let title = grade.querySelector("a")?.innerHTML?.toLowerCase();
        if(title == undefined) continue;
        if(title.startsWith("ec") || title.startsWith("extra credit")){
            grade.remove();
            removed = true;
        }
    }
    if(!removed) window.requestAnimationFrame(run)
}

function deleteOverdue(){
    if(document.querySelectorAll("#assignment_group_overdue").length != 0){
        let overduePannel = document.getElementById("assignment_group_overdue").parentElement;
        overduePannel.parentElement.appendChild(overduePannel.cloneNode(true));
        overduePannel.remove();
    }else window.requestAnimationFrame(deleteOverdue)
}