import React, { useState, useEffect } from 'react';
import ReactMapGL , { Marker, Popup } from 'react-map-gl';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Map = (props) => {
  const [state, setState] = useState({
    viewport: {
      width: "100%",
      height: 400,
      latitude: props.lat,
      longitude: props.lng,
      zoom: 15
    }
  });

  const [selectedBusiness, setSelectedBusiness] = useState(null);

  const onIconClick = (event, business) => {
    event.preventDefault();
    setSelectedBusiness(business); //when marker is clicked, it will be for this particular business
  }

  const onPopupClick = (event, business) => {
    console.log("here");
    //react router redirect programmatically
    this.props.history.push(`/b/${business._id}`);
  }

  useEffect(() => {
    const listener = e => {
      if(e.key === " "){
        setSelectedBusiness(null);
      }
    };
    window.addEventListener("keydown", listener);
  }, []);

  return (
    <ReactMapGL
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      {...state.viewport}
      //when user drags or zooms, update the new viewport state
      onViewportChange={(viewport) => setState({viewport})}>
      {props.businesses.map((business) => (
        <Marker
          key = {business._id}
          longitude={business.lng}
          latitude={business.lat}
        >
          {business._id === props.business_id
          ? <i className="red star icon" onClick={(e) => onIconClick(e, business)}></i>
          : <i className="yellow star icon" onClick={(e) => onIconClick(e, business)}></i>}
        </Marker>
      ))}

      {selectedBusiness ? (
        <Popup
          latitude={selectedBusiness.lat}
          longitude={selectedBusiness.lng}
          anchor="top"
          closeOnClick={false}
          onClose={() => {
            //update set selcted business back to null
            setSelectedBusiness(null);
          }}
          >
          <div>
            <div>
              {selectedBusiness.name} |{' '}
              <Link to = {`/b/${selectedBusiness._id}`}>Go To Form</Link>
            </div>
            <img width={240} src={selectedBusiness.image_url}/>
          </div>
        </Popup>
      ) : null}
    </ReactMapGL>
  );
};

export default Map;
