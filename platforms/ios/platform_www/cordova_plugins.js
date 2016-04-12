cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-facebook4/www/facebook-native.js",
        "id": "cordova-plugin-facebook4.FacebookConnectPlugin",
        "pluginId": "cordova-plugin-facebook4",
        "clobbers": [
            "facebookConnectPlugin"
        ]
    },
    {
        "file": "plugins/es6-promise-plugin/www/promise.js",
        "id": "es6-promise-plugin.Promise",
        "pluginId": "es6-promise-plugin",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-gigya/www/gigyaClient.js",
        "id": "cordova-plugin-gigya.gigyaClient",
        "pluginId": "cordova-plugin-gigya",
        "clobbers": [
            "gigyaClient"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.1",
    "cordova-plugin-facebook4": "1.6.2",
    "es6-promise-plugin": "3.0.2",
    "cordova-plugin-gigya": "1.0.0"
}
// BOTTOM OF METADATA
});