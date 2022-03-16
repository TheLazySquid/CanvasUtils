chrome.storage.sync.get(['closeModules'], (value) => {
    if(!value.closeModules) return;
    if(location.href.includes("/modules")){
        let modules = document.querySelectorAll(".content");
        for(let module of modules){
            module.style.display = "none";
        }
    }
})