var WelcomePage = {};
WelcomePage.controller = function() {
  var url = WelcomePage.properties.url
  var layers = WelcomePage.properties.layers
  return {
    url: url,
    layers: layers
  };
}

WelcomePage.view = function(ctrl, attrs) {
  return m.component(NetworkMap, { 
    class: "map",
    layers: ctrl.layers,
    centre: [ 52.0594, 1.1556 ]
  }, []);
};
