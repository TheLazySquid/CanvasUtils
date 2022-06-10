document.querySelector('#hiders').addEventListener('click', function(e) {
  let pages = document.querySelectorAll('.page');
  //hide the pages
  for (let i = 0; i < pages.length; i++) {
    pages[i].classList.remove('active');
  }
  document.querySelector('#hideToggles').classList.add('active');
});
document.querySelector('.back').addEventListener('click', function(e) {
  let pages = document.querySelectorAll('.page');
  //hide the pages
  for (let i = 0; i < pages.length; i++) {
    pages[i].classList.remove('active');
  }
  document.querySelector('#mainPage').classList.add('active');
});

//don't touch this, it's a mess
const toggles = [
  {value: 'fakeEmail', text: 'Toggle client-side messages being sent when escape is hit on a message', tab: 'mainPage'},
  {value: 'hideOverdue', text: 'Moves overdue assignments to the bottom of the list', tab: 'hideToggles'},
  {value: 'closeModules', text: 'Collapses modules by default upon the page load', tab: 'mainPage'},
  {value: 'dark', text: 'Adds a very dark theme to canvas, reload for changes to apply.', tab: 'mainPage'},
  {value: 'autoAssignment', text: 'Dashboard links go directly to that course\'s assignment tab', tab: 'mainPage'},
  {value: 'announceInbox', text: 'Announcements appear in your inbox rather than on courses, may be buggy', tab: 'mainPage'},
  {value: 'hideEC', text: 'Hides extra credit assignments from the grades page', tab: 'hideToggles'},
  {value: 'hideLate', text: 'Hides the late tag from assignments on the grades page', tab: 'hideToggles'},
  {value: 'hideMissing', text: 'Hides the missing tag from the grades page', tab: 'hideToggles'},
  {value: 'hideAnnouncements', text: 'Hide announcements on courses and dashboard', tab: 'hideToggles'},
  {value: 'hideLinkBar', text: 'Hides all the things below a class on the dashboard', tab: 'hideToggles'}
]

chrome.storage.sync.get(toggles.map(toggle => toggle.value), (value) => {
  for(let toggle of toggles){
    let row = document.createElement("div")
    row.innerHTML = `
    <label class="switch">
      <input type="checkbox" id="${toggle.value}">
      <span class="slider round"></span>
    </label>
    <span class="description">${toggle.text}</span>
    <hr>`
    row.querySelector(`#${toggle.value}`).checked = value[toggle.value];
    row.querySelector(`#${toggle.value}`).addEventListener("change", () => {
      let activate = row.querySelector(`#${toggle.value}`).checked;
      chrome.storage.sync.set({[toggle.value]: activate})
    })
    document.getElementById(toggle.tab).querySelector(".toggles").appendChild(row);
  }
})

chrome.storage.sync.get(['blockedUsers'], (value) => {
  document.getElementById("blockedUsers").value = value.blockedUsers;
})
document.getElementById("blockedUsers").addEventListener("change", () => {
  chrome.storage.sync.set({blockedUsers: document.getElementById("blockedUsers").value})
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