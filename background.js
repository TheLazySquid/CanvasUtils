chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.get(['blockedUsers', 'hideOverdue', 'fakeEmail', 'pfp', 'name', 'dark', 'closeModules', 'autoAssignment', 'announceInbox', 'hideEC'], (value) => {
        chrome.storage.sync.set({
            blockedUsers: value.blockedUsers ?? "", 
            hideOverdue: value.hideOverdue ?? true, 
            fakeEmail: value.fakeEmail ?? false, 
            pfp: value.pfp ?? "https://brookline.instructure.com/images/thumbnails/63134194/AVB2Cdj3r05saDIEU4317rt6oUisJOeF1ML2BuUv", 
            name: value.name ?? "No verified name",
            dark: value.dark ?? false,
            closeModules: value.closeModules ?? true,
            autoAssignment: value.autoAssignment ?? false,
            announceInbox: value.announceInbox ?? false,
            hideEC: value.hideEC ?? false
        })
    })
});