var WelcomePage = {};
WelcomePage.controller = function() {
  var url = WelcomePage.properties.url
  return { url: url };
}

WelcomePage.view = function(ctrl, attrs) {
  return m("div", { 
    id: "map", 
    class: "map",
    config: NetworkMap.config(ctrl.url, "map") 
  }, []);
};

var NetworkMap = {};
NetworkMap.config = function(url, targetClass) {
  return function(element, isInitialized) {
    if(!isInitialized) {
      var map = L.map(targetClass).setView([ 52.0594, 1.1556 ], 13);

      var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      L.tileLayer(osmUrl, { maxZoom: 18 })
        .addTo(map);
    }
  }
}
