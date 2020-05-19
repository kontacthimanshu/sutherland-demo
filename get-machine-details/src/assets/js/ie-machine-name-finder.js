var mac$ = (function(){
    return {
        getMachineName: function(){
            try {
       var ax = new ActiveXObject("WScript.Network");
       return {userName:ax.UserName, machineName:ax.ComputerName}
     }
     catch (e) {
       console.error("Permission to access computer name is denied.");
     } 
    }
    };
}());
