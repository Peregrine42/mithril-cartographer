var NetworkMap = {};
NetworkMap.view = function(ctrl, attrs) {
  attrs.config = NetworkMap.config(attrs);
  return m("div", attrs)
}

NetworkMap.config = function(attrs) {
  return function(element, isInitialized) {
    if(!isInitialized) {
      var layer_hashs = attrs.layers.map(function(layer_data) {
        if (layer_data.url) {
          var url = layer_data.url;
          var layer = L.tileLayer(url, { maxZoom: 18 });
          return { name: layer_data.name, layer: layer };
        } else if (layer_data.points) {
          var markers = layer_data.points.map(function(point) {
            var coord = [point.long, point.lat];
            var marker = L.marker(coord, { draggable: true });
            return marker;
          });
          var layer = L.layerGroup(markers);
          return { name: layer_data.name, layer: layer };
        }
      });

      var layers = layer_hashs.map(function(hash) { return hash.layer });

      var baseMaps = {};
      var overlayMaps = {};
      layer_hashs.forEach(function(hash) {
        overlayMaps[hash.name] = hash.layer;
      });

      var map = L.map(element, {
        center: attrs.centre,
        zoom: 12,
        layers: layers
      });

      var layersControl = L.control.layers(
        baseMaps, 
        overlayMaps,
        { autoZIndex: true }
      ).addTo(map);
    }
  }
}
