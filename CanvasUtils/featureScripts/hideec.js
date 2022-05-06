chrome.storage.sync.get(['hideEC'], (value) => {
    if(value.hideEC){
        run();
    }
})
function run(){
    if(!location.href.endsWith("/grades")) return
    let missing = document.querySelectorAll(".submission-missing-pill");
    for(let pill of missing){
        pill.remove();
    }
    let late = document.querySelectorAll(".submission-late-pill");
    for(let pill of late){
        pill.remove();
    }
    let grades = document.querySelectorAll(".student_assignment")
    for(let grade of grades){
        let title = grade.querySelector("a")?.innerHTML?.toLowerCase();
        if(title == undefined) continue;
        if(title.startsWith("ec") || title.startsWith("extra credit")){
            grade.remove();
        }
    }
    if(missing.length > 0 || late.length > 0 || grades.length > 0) return
    window.requestAnimationFrame(run)
}