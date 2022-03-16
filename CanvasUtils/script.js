document.getElementById("fakeEmail").addEventListener("change", () => {
  chrome.storage.sync.set({fakeEmail: document.getElementById("fakeEmail").checked})
})
document.getElementById("hideOverdue").addEventListener("change", () => {
  chrome.storage.sync.set({hideOverdue: document.getElementById("hideOverdue").checked})
})
document.getElementById("blockedUsers").addEventListener("change", () => {
  chrome.storage.sync.set({blockedUsers: document.getElementById("blockedUsers").value})
})
document.getElementById("darkTheme").addEventListener("change", () => {
  chrome.storage.sync.set({dark: document.getElementById("darkTheme").checked})
})
document.getElementById("closeModules").addEventListener("change", () => {
  chrome.storage.sync.set({closeModules: document.getElementById("closeModules").checked})
})
chrome.storage.sync.get(['fakeEmail', 'hideOverdue', 'blockedUsers', 'dark', 'closeModules'], (value) => {
  document.getElementById("fakeEmail").checked = value.fakeEmail;
  document.getElementById("hideOverdue").checked = value.hideOverdue;
  document.getElementById("blockedUsers").value = value.blockedUsers;
  document.getElementById("darkTheme").checked = value.dark;
  document.getElementById("closeModules").checked = value.closeModules;
})

document.getElementById("profile").addEventListener("click", () => {
  chrome.storage.sync.get(['pfp', 'name'], (value) => {
    if(value.name == "No verified name") return document.getElementById("name").innerHTML = "No account details found! Go to your account settings to connect account details";
    document.getElementById("pfp").src = value.pfp;
    document.getElementById("name").innerHTML = "Name: " + value.name;
  })
  let hide = document.getElementById("hider");
  if(hide.style.display != "none") hide.style.display = "none";
  else hide.style.display = "block";
})