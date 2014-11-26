console.log('gidget background.js called by ');

chrome.contextMenus.create( {
    type: "normal",
    id: "gidget",
    title: "Gidget"
    } );
chrome.contextMenus.create( {
    type: "normal",
    id: "gidgetOpenGwTab",
    title: "Open gateway in new tab",
    parentId: "gidget"
    } );
chrome.contextMenus.create( {
    type: "normal",
    id: "gidgetAdd",
    title: "Add to my gateway favorites",
    parentId: "gidget"
    } );
chrome.contextMenus.create( {
    type: "normal",
    id: "gidgetShare",
    title: "Share with gateway users",
    parentId: "gidget",
    onclick: function( info, tab ) {
        var shareDialog = chrome.windows.create(
            { url: './dialog.html', type: 'popup', width: 521, height: 322 },
            function(win) {
                console.log('background page: ' + info.pageUrl );
                var conn = chrome.tabs.connect( win.tabs[0].id, { name: 'shareInfo' });
                console.log('background page: connected to ' + win.tabs[0].url);
                conn.postMessage( { url: info.pageUrl } );
                chrome.runtime.onConnect.addListener(function(port) {
                    console.assert(port.name == "shareInfo");
                    port.onMessage.addListener(function(msg) {
                        console.log('message received from ' + port.name);
                    });
                });
            });
    }
});
