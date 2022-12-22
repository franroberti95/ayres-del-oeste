import React from 'react';
import styled from "styled-components";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';

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
const BuildingMap = ({b}: {b: BuildingI}) => {
    const ref = React.useRef<HTMLDivElement>(null);
    //const [map, setMap] = React.useState<google.maps.Map>();
    const [markers, setMarkers] = React.useState<google.maps.Marker>();
    const router = useRouter();

    React.useEffect(() => {
        if (window?.google?.maps) {
            return onLoad()
        }

        setTimeout( () => {
            return onLoad()
        }, 5500)
    }, []);

    const onLoad = () => {
        
        let map: google.maps.Map | null = null;
        
        if (ref.current) {
            map = new window.google.maps.Map(ref.current, {
                zoom:8,
                center: { lat: -34.6662424704835, lng: -58.706930534364645 }
            });
        }


        const marker = new window.google.maps.Marker({
            icon: {
                path: 'M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z',
                fillColor: "#00ff93e0",
                fillOpacity: 0.8,
                strokeWeight: 0.5,
                rotation: 0,
                scale: 1,
                anchor: new google.maps.Point(0, 0),
            },
            clickable: true,
            position: {lat: b?.location?.latitude || -34.6662424704835, lng: b?.location?.longitude || -58.706930534364645}});
        marker.setMap(map);
        setMarkers(marker)
        return () => {
            marker.setMap(null);
        }
    }

    return <BuildingMapContainer>
        <Wrapper apiKey={"AIzaSyC_78TT-bbs_yk_AnpgEjyCRv7TX_IVxHk"} render={render}>
            <div ref={ref} style={{height: '100%', width: '100%'}}/>
        </Wrapper>
    </BuildingMapContainer>
}

const BuildingMapContainer = styled.div`
    height: 100%;
    width: 100%;
`;

export default BuildingMap;
