import React, { useState } from 'react';
// // import ol from 'ol';
// import Map from 'ol/Map';
// import View from 'ol/View';
// import TileLayer from 'ol/layer/Tile';
// // import ImageLayer from 'ol/layer/Image';
// import { Vector as VectorLayer } from 'ol/layer';
// import { OSM, TileWMS as TileWMSSource, Vector as VectorSource } from 'ol/source';
// import { fromLonLat } from 'ol/proj';
// import GeoJSON from 'ol/format/GeoJSON';
// import { bbox as bboxStrategy } from 'ol/loadingstrategy';
// import { defaults as defaultControls, ScaleLine } from 'ol/control';
// import map1 from './Components/ver1.geojson'
// import { Routes, Route } from 'react-router-dom';
import Auth from './Components/AuthPage/Auth.js'
import Map from './Components/Map.js'
function App(){
  const [state,setstate] = useState(0);//0 corresponds to the auth page ,1 corresponds to main mapping page
  if(state==0) {//now inside the authentication page
    return (
      <Auth setstate={setstate}/>
    )
  }
  else{//now inside the mapping page
    return(
      <Map/>
    )
  }
}

export default App;

