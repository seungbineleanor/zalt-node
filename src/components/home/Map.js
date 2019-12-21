import React, { useState } from 'react';
import ReactMapGL , {Marker} from 'react-map-gl';
import { Icon } from 'semantic-ui-react';

const Map = (props) => {
  const [state, setState] = React.useState({
    viewport: {
      width: 400,
      height: 400,
      latitude: props.lat,
      longitude: props.lng,
      zoom: 10
    }
  });

  return (
    <ReactMapGL
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      {...state.viewport}
      //when user drags or zooms, update the new viewport state
      onViewportChange={(viewport) => setState({viewport})}>
      <Marker longitude={props.lng} latitude={props.lat}>
        <i className="red star icon"></i>
      </Marker>
    </ReactMapGL>
  );
};

export default Map;
