import React from 'react';
import {Grid, Typography} from "@mui/material";
import styled from "styled-components";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useRouter } from 'next/router';

interface BuildingI {
    images: string[];
    characteristics: {type: string, value: string}[];
    title: string;
    description: string;
    location: {latitude: string, longitude: string};
    floorPlan: string[];
    id: string;
}
const render = (status: Status) => {
    return <h1>{status}</h1>;
};
const BuildingMap = ({buildings}: {buildings: BuildingI[]}) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const [map, setMap] = React.useState<google.maps.Map>();
    const [markers, setMarkers] = React.useState<google.maps.Marker[]>();
    const router = useRouter();

    React.useEffect(() => {
        setMarkers(buildings.map( b => {
            const marker = new google.maps.Marker({

                clickable: true,
                position: {lat: b?.location?.latitude || -34.6662424704835, lng: b?.location?.longitude || -58.706930534364645}})

            marker.addListener("click", () => {
                /*map.setZoom(8);
                map.setCenter(marker.getPosition() as google.maps.LatLng);*/
                router.push(`/${b.id}`)
            });

            marker.setMap(map);
            return marker;
        }))
        return () => {
            markers?.forEach( m => m.setMap(null));
        }

    }, [map]);


    React.useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {
                zoom:12,
                center: { lat: -34.6662424704835, lng: -58.706930534364645 }
            }));
        }
    }, [ref, map]);

    return <BuildingMapContainer>
        <Wrapper apiKey={"AIzaSyC_78TT-bbs_yk_AnpgEjyCRv7TX_IVxHk"} render={render}>
            <div ref={ref} style={{height: '60vh', width: '100%'}}/>
        </Wrapper>
    </BuildingMapContainer>
}

const BuildingMapContainer = styled.div`
`;

export default BuildingMap;