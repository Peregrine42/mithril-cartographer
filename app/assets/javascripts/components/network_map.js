var NetworkMap = {};
NetworkMap.view = function(ctrl, attrs) {
  attrs.config = NetworkMap.config(attrs);
  return m("div", attrs)
}

NetworkMap.config = function(attrs) {
  return function(element, isInitialized) {
    if(!isInitialized) {
      var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      var terrain = L.tileLayer(osmUrl, { maxZoom: 18 })

      var markers = attrs.nodes.map(function(coord) {
        return L.marker(coord);
      });
      var devices = L.layerGroup(markers);

      var baseMaps = {
      };
      var overlayMaps = {
        "terrain": terrain,
        "devices": devices
      };

      var map = L.map(element, {
        center: attrs.centre,
        zoom: 12,
        layers: [ terrain, devices ]
      });

      var layersControl = L.control.layers(
          baseMaps, 
          overlayMaps,
          { autoZIndex: true }).addTo(map);
    }
  }
}

