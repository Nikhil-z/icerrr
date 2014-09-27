/*
* 
* by REJH Gadellaa
*  MIT license
*
*/

(function() {
		  
	console.log("Load plugin: MediaStreamer");
		  
    /* This increases plugin compatibility */
    // var cordovaRef = window.PhoneGap || window.Cordova || window.cordova; // old to new fallbacks
	cordovaRef = window.cordova;

    /**
    * The Java to JavaScript Gateway 'magic' class 
    */
    function MediaStreamer() { }

    /**
    * Start player
    */
    MediaStreamer.prototype.play = function(stream_url, isAlarm, win, fail) {
		console.log("MediaStreamer.prototype.play()");
        cordova.exec(win, fail, "MediaStreamer", "play", [stream_url,isAlarm]);
    };

    /**
    * Stop player
    */
    MediaStreamer.prototype.stop = function(win, fail) {
		console.log("MediaStreamer.prototype.stop()");
        cordova.exec(win, fail, "MediaStreamer", "stop", []);
    };
	
    /**
    * Set Volume
	* Args: level (int) between 0 and 10
    */
    MediaStreamer.prototype.setVolume = function(level, win, fail) {
		console.log("MediaStreamer.prototype.setVolume(): "+level);
        cordova.exec(win, fail, "MediaStreamer", "setVolume", [level]);
    };
	
    /**
    * Incr Volume
	* Increase volume by 1 (from 0 to 10)
    */
    MediaStreamer.prototype.incrVolume = function(win, fail) {
		console.log("MediaStreamer.prototype.incrVolume()");
        cordova.exec(win, fail, "MediaStreamer", "incrVolume", []);
    };
	
    /**
    * Decrease Volume
	* Decrease volume by 1 (from 0 to 10)
    */
    MediaStreamer.prototype.decrVolume = function(win, fail) {
		console.log("MediaStreamer.prototype.decrVolume()");
        cordova.exec(win, fail, "MediaStreamer", "decrVolume", []);
    };

    /**
    * GetStatus
	* Media.MEDIA_NONE // 0?
	* Media.MEDIA_STARTING // 1
	* Media.MEDIA_RUNNING // 2
	* Media.MEDIA_PAUSED // 3
	* Media.MEDIA_STOPPED // 4
    */
    MediaStreamer.prototype.getStatus = function(win, fail) {
		// console.log("MediaStreamer.prototype.getStatus()");
        cordova.exec(win, fail, "MediaStreamer", "getStatus", []);
    };
	
    /**
    * Is Service Running
    */
    MediaStreamer.prototype.isServiceRunning = function(win, fail) {
		console.log("MediaStreamer.prototype.isServiceRunning()");
        cordova.exec(win, fail, "MediaStreamer", "isServiceRunning", []);
    };
	
	/**
	* Register the plugin
	*/
	try {
		window.mediaStreamer = new MediaStreamer();
	} catch(e) { console.error("MediaStreamer could not be loaded"); console.error(e); }

})(); 