import React, { useEffect } from 'react';
// import ol from 'ol';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
// import ImageLayer from 'ol/layer/Image';
import { Vector as VectorLayer } from 'ol/layer';
import { OSM, TileWMS as TileWMSSource, Vector as VectorSource } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import GeoJSON from 'ol/format/GeoJSON';
import { bbox as bboxStrategy } from 'ol/loadingstrategy';
import { defaults as defaultControls, ScaleLine } from 'ol/control';
import map1 from './Components/ver1.geojson'

function App() {
  useEffect(() => {
    // Initialize OpenLayers map
    const map = new Map({
      target: 'map',
      controls: defaultControls().extend([new ScaleLine()]),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        // Example of adding a WMS layer
        new TileLayer({
          source: new TileWMSSource({
            url: 'https://ahocevar.com/geoserver/wms',
            // params: { 'LAYERS': 'ne:ne' },
          }),
        }),
      ],
      view: new View({
        center: [9839938.898348449, 2578958.4419331397],
        zoom: 13,
      }),
    });

    // Add GeoJSON layer
    const EUCountriesGeoJSON = new VectorLayer({
      source: new VectorSource({
        url: map1,
        format: new GeoJSON(),
        strategy: bboxStrategy,
      }),
      visible: true,
      title: 'EUCountriesGeoJSON',
    });

    EUCountriesGeoJSON.getSource().on('change', function (event) {
      if (EUCountriesGeoJSON.getSource().getState() === 'error') {
        const error = EUCountriesGeoJSON.getSource().getLoadError();
        console.error('Error loading GeoJSON:', error);
      }
    });

    map.addLayer(EUCountriesGeoJSON);
    // const exampleLayer = new VectorLayer({
    //   source: new VectorSource({
    //     url: './Components/ver1.geojson',
    //     format: new GeoJSON(),
    //     strategy: bboxStrategy,
    //   }),
    //   visible: true,
    //   title: 'Example Polygons'
      
    // })

    // map.addLayer(exampleLayer);

    // Click event handler
    map.on('click', function (event) {
      const clickedCoordinate = event.coordinate;
      console.log('Clicked Coordinate:', clickedCoordinate);

      // If you want to convert the coordinate to LonLat format:
      const lonLatCoordinate = fromLonLat(clickedCoordinate);
      console.log('Clicked LonLat Coordinate:', lonLatCoordinate);
    });

    // Clean up when the component is unmounted
    return () => {
      map.on('click');
    };
  }, []);

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
}

export default App;

