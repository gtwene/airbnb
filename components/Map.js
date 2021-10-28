import { useState } from 'react';
import ReactMapGl from 'react-map-gl';
import getCenter from 'geolib/es/getCenter'

function Map({ searchResults }) {

    // Transform the search into an Object
    //{latitude: 52.516272, longitude: 13.377722}
    const coordinate = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat,
    }));

    // The longitude and latitude center
    const center = getCenter(coordinate)

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    });

    return (
        <ReactMapGl
            mapStyle='mapbox://styles/gkwame/ckvbi9rogchzd14s7c4fd6y0q'
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
        ></ReactMapGl>
    )
}

export default Map
