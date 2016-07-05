/**
 * Load all common libraries
 */
define([
	"helper/config", 
	"libs/moment-with-locales.min",
	"libs/sprintf.min"
	], 
	
	function(config, moment, sprintf) {
		return {
			"config": config,
			"moment": moment,
			"sprintf": sprintf
		}
	}
);

