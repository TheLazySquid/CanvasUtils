function deleteOverdue(){
    if(document.querySelectorAll("#assignment_group_overdue").length != 0){
        let overduePannel = document.getElementById("assignment_group_overdue").parentElement;
        overduePannel.parentElement.appendChild(overduePannel.cloneNode(true));
        overduePannel.remove();
    }else window.requestAnimationFrame(deleteOverdue)
}

chrome.storage.sync.get(['hideOverdue'], (value) => {
    if(value.hideOverdue) deleteOverdue()
})