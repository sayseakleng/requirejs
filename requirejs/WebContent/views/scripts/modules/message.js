/**
 * Localization plugin to read i18n files from nls/messages.js
 */
define(['i18n!nls/messages'], function(messages) {
	return {
		getMessage: function (code) {
			return messages[code];
		}
	}
});