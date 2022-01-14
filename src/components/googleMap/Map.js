import React from 'react'
import {
	GoogleMap,
	LoadScript,
	Marker,
  InfoBox
} from "@react-google-maps/api";
import apiData from '../../assets/data/apiData';


function Map() {


    const mapContainerStyle={
        width:"100%",
        height:"450px",
        float:"top",
        margin:"5px",
    }
    
    
    const center={
        lat:-38.037150,
        lng:145.203140
    }
    
    return (
        <LoadScript 
        googleMapsApiKey={apiData.GOOGLEMAP_APIKEY}>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={10}>
                <Marker position={center}/>


            </GoogleMap>

        </LoadScript>
    )
}

export default Map
