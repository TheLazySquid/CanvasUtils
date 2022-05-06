window.addEventListener("load", () => {
    //use regex to check if a string ends with /submissions/ and a 6 digit number
    let url = window.location.href;
    let regex = /\/submissions\/\d{6}/;
    if(!regex.test(url)) return;
    let placeAt = document.querySelector(".submission-details-header__heading");
    let redirectButton = document.createElement("button");
    redirectButton.innerHTML = "Go to page";
    //delete everything before the /submissions/
    let realPage = url.split("/submissions/")[0];
    redirectButton.addEventListener("click", () => {
        window.location.href = realPage;
    });
    redirectButton.id = "gotopage";
    redirectButton.style.backgroundColor = "red";
    redirectButton.style.borderRadius = "5px";
    placeAt.appendChild(redirectButton);
})