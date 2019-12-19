cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-firebase.FirebasePlugin",
    "file": "plugins/cordova-plugin-firebase/www/firebase.js",
    "pluginId": "cordova-plugin-firebase",
    "clobbers": [
      "FirebasePlugin"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.Coordinates",
    "file": "plugins/cordova-plugin-geolocation/www/Coordinates.js",
    "pluginId": "cordova-plugin-geolocation",
    "clobbers": [
      "Coordinates"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.PositionError",
    "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
    "pluginId": "cordova-plugin-geolocation",
    "clobbers": [
      "PositionError"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.Position",
    "file": "plugins/cordova-plugin-geolocation/www/Position.js",
    "pluginId": "cordova-plugin-geolocation",
    "clobbers": [
      "Position"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.geolocation",
    "file": "plugins/cordova-plugin-geolocation/www/geolocation.js",
    "pluginId": "cordova-plugin-geolocation",
    "clobbers": [
      "navigator.geolocation"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-firebase": "2.0.5",
  "cordova-plugin-geolocation": "4.0.2"
};
// BOTTOM OF METADATA
});