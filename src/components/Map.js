import React,{ useContext } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import MapView,{ Polyline,Circle } from 'react-native-maps';
import {Context as LocationContext} from '../context/LocationContext';

const Map = () =>{

    const {state:{ currentLocation, locations }} = useContext(LocationContext);

    if(!currentLocation){
        return <ActivityIndicator size="large" style={{ marginTop:200 }} />;
    }

    return(
        <MapView 
            style={styles.map}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta:0.01,
                longitudeDelta:0.01
            }}
        >
            <Circle 
                center={currentLocation.coords}
                radius={30}
                strokeColor="rgba(60, 64, 198, 1.0)"
                fillColor="rgba(60, 64, 198, 0.3)"
            />
            <Polyline coordinates={locations.map((loc) => loc.coords)} />
        </MapView>
    );
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize:30,
        fontWeight:"bold",
        textAlign:"center"
    },
    map:{
        height:300,
        margin:10
    }
});

export default Map;