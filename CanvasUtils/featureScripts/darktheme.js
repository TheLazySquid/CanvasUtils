let path = chrome.runtime.getURL('../darktheme.css');
let css = document.createElement("link");
css.rel = "stylesheet";
css.type = "text/css";
css.href = path;

chrome.storage.sync.get(['dark'], (value) => {
    if(!value.dark) return;
    document.head.appendChild(css.cloneNode(true));
    window.addEventListener('load', applyToIframes);
})

function applyToIframes(){
    document.querySelectorAll('iframe').forEach(iframe => {
        iframe?.contentDocument?.head?.appendChild(css?.cloneNode(true));
    })
    setTimeout(applyToIframes, 1000);
}