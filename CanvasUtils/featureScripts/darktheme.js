chrome.storage.sync.get(['dark'], (value) => {
    if(!value.dark) return;
    let path = chrome.runtime.getURL('../darktheme.css');
    let css = document.createElement("link");
    css.rel = "stylesheet";
    css.type = "text/css";
    css.href = path;
    document.head.appendChild(css);
})