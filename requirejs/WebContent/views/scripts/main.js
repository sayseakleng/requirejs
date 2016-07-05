/**
 * Configuration
 */
requirejs.config({
	
	//baseUrl : "scripts/",
	
	/**
	 * configure for no browser caching
	 */
	//urlArgs : "bust=" + (new Date()).getTime(), 
	
	/**
	 * Configure for CDN
	 */
	paths: {
        jquery: "https://code.jquery.com/jquery-3.0.0.min"
    },

    /**
     * Package to store common libraries
     */
	"packages": [
	    {
	    	name: "common",
	    	location: "libs",
	    	main: "libsLoader"
	    }
	],
	 
	 /**
	  * Configure i18n
	  */
	 config: {
	        i18n: {
	            locale: "km_kh"
	        }
	 } 	  
});



/**
 * Calling requirejs
 */
requirejs(["jquery", "common",  "modules/message", "modules/domReady!"], function(jquery, common, messages) {
	
	/*
	 * Get message by code
	 */
	$("#lblHello").text(messages.getMessage("welcome") + sprintf(" %s", common.config.userName) );
});