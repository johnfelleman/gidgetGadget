console.log("gidget background.js");

var gidgetController = function() { console.log( 'gidgetController function' ) };
var popup =
    '<div class="container text-primary">' +
    'pop' +
    '</div>';
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
        alert('nice job clicking in ' + info.pageUrl + '.');
        window.open( '', 'Share', 'model=yes');
        // Window.openDialog( '', 'Share', 'modal=yes');
        },
    } );
