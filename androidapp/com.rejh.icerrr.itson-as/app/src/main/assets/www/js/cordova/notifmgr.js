(function(){console.log("Load plugin: NotifMgr");cordovaRef=window.cordova;function NotifMgr(){}
NotifMgr.prototype.make=function(win,fail,opts){console.log("NotifMgr.prototype.make()");cordova.exec(win,fail,"NotifMgr","make",[opts]);};NotifMgr.prototype.cancel=function(win,fail,opts){console.log("NotifMgr.prototype.cancel()");cordova.exec(win,fail,"NotifMgr","cancel",[opts]);};NotifMgr.prototype.cancelAll=function(win,fail){console.log("NotifMgr.prototype.cancelAll()");cordova.exec(win,fail,"NotifMgr","cancelAll",[]);};try{window.notifMgr=new NotifMgr();}catch(e){console.error("NotifMgr could not be loaded");console.error(e);}})();