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
    layers: [
      { 
        name: 'terrain', 
        url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      },
      {
        name: 'devices',
        points: [
          { 
            name: '72xx108',
            coords: [ 52.0594, 1.1556 ]
          },
          { 
            name: '72xx109',
            coords: [ 52.0600, 1.1556 ]
          }
        ]
      }
    ],
    nodes: [[ 52.0594, 1.1556 ], [ 52.0596, 1.1556 ]],
    centre: [ 52.0594, 1.1556 ]
  }, []);
};
