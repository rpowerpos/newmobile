var iabRef = null;

var app = {
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        iabRef = cordova.InAppBrowser.open('https://www.rpowerpos.com/Merchant/Home/Index', '_blank', 'hidden=no,location=no,zoom=no,hardwareback=no');
        iabRef.addEventListener('loadstart', iabLoadStart);
        iabRef.addEventListener('loadstop', iabLoadStop);
        iabRef.removeEventListener('loaderror', iabLoadError);
        iabRef.addEventListener('exit', iabClose);
        
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
		window.alert(parentElement);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        
    },
};

function iabLoadStart(event) {
   iabRef.show();
}

function iabLoadStop(event) {
   //iabRef.show();
}
