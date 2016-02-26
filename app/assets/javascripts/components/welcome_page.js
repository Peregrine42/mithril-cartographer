var WelcomePage = {};
WelcomePage.controller = function() {
  var url = WelcomePage.properties.url
  return {
    url: url
  };
}

WelcomePage.view = function(ctrl, attrs) {
  return m.component(NetworkMap, { 
    class: "map",
    nodes: [[ 52.0594, 1.1556 ]],
    centre: [ 52.0594, 1.1556 ]
  }, []);
};
