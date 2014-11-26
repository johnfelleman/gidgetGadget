angular.module('gidget', []).controller('gidgetController', function($scope) {

    $scope.url = '';
    $scope.title = '';
    var shareConnection = chrome.runtime.connect( { name: 'shareInfo' });

    chrome.runtime.onConnect.addListener(function(port) {
        console.assert(port.name == "shareInfo");
        port.onMessage.addListener(function(msg) {
            console.log('message "' + msg.url + '" received from ' + port.name);
            $scope.$apply(function() {
                $scope.url = msg.url;
            });
        });
    });
});
