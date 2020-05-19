var ip$ = (function(){
    var count = 1;
    
    return {
        fetchIps: function(){
            var myPeerConnection = window.RTCPeerConnection || window.webkitRTCPeerConnection;
    var pc = new myPeerConnection({
        iceServers: []
    });
        var noop = function () { };
        var localIPs = {};
        var ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;
        var key;

    function iterateIP(ip) {
        var cookieName = "IP"+ count.toString();
        document.cookie = cookieName+"="+ ip;
        count++;
        localIPs[ip] = true;
    }

    //create a bogus data channel
    pc.createDataChannel("");

    // create offer and set local description
    pc.createOffer(pc.setLocalDescription.bind(pc), noop);

    //listen for candidate events
    pc.onicecandidate = function (ice) {
        //console.log(ice.candidate);
        if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
        ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
    };
        }
    };
}());