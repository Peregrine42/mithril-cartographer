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
            var longitude = parseFloat(point.long);
            var latitude = parseFloat(point.lat);
            var coord = [ latitude, longitude ];
            var marker = L.circleMarker(coord, 
              { draggable: true, 
                fillOpacity: 1, 
                radius: 5, 
                color: 'blue' }
            );
            return marker;
          });
          var layer = L.layerGroup(markers);
          return { name: layer_data.name, layer: layer };
        } else if (layer_data.lines) {
          var lines = layer_data.lines.map(function(line) {
            var coords = line.coords;
            coords = coords.map(function(coord) {
              return coord.map(function(number) { 
                return parseFloat(number);
              });
            });
            var line = L.polyline(coords, 
              {color: 'blue', weight: 2}
            );
            return line;
          });
          var layer = L.layerGroup(lines);
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

      console.log(layers);

      var layersControl = L.control.layers(
        baseMaps, 
        overlayMaps,
        { autoZIndex: true }
      ).addTo(map);
    }
  }
}
