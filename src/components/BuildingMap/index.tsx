import React from "react"
import styled from "styled-components";


function BuildingMap({data}:any) {
    const mapRef = React.useRef(null);
    React.useEffect(() => {
        if(!window.google) return

        let google = window?.google;
        let map = mapRef.current;
        let lat = data?.location?.latitude || "-34.6662424704835";
        let lng = data?.location?.longitude || "-58.706930534364645";
        const myLatlng = new google.maps.LatLng(lat, lng);
        const mapOptions = {
            zoom: 15,
            center: myLatlng,
            scrollwheel: false,
            zoomControl: false,
        };

        map = new google.maps.Map(map, mapOptions);

        const marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            animation: google.maps.Animation.DROP,
            title: data?.title,
            clickable: true,
            position: {lat: data?.location?.latitude || -34.6662424704835, lng: data?.location?.longitude || -58.706930534364645}
        });

        const contentString =
            `<h4>${data?.title}</h4>`;

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
        });

        google.maps.event.addListener(marker, "click", function () {
            infowindow.open(map, marker);
        });
    });
    return (
        <>
            <MapWrapper>
                <Map ref={mapRef} />
            </MapWrapper>
        </>
    );
}

const MapWrapper = styled.div`
  width: 100vw;
  height: 70vh;
`;

const Map = styled.div`
  width: 100%;
  height: 100%;
`;

export default BuildingMap
