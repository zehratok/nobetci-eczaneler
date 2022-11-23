import React, { useState } from 'react'
import { Text, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native'
import { Header } from '../../components'
import { setLatitude, setLongitude } from '../../config/slices/locationSlice';
import { useDispatch, useSelector } from 'react-redux';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import styles from './Map.style'
import { SafeAreaView } from 'react-native-safe-area-context';

const Map = () => {

    const dispatch = useDispatch();
    const lat = useSelector((state) => state.location.latitude); //reducerdan gelen latitude
    const long = useSelector((state) => state.location.longitude); //reducerdan gelen longitude
    const [pharmacies, setPharmacies] = useState([]); //eczaneleri tutacak olan state
    const [region, setRegion] = useState({ //haritadaki konumu tutacak olan state
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
    });

    function handleGetLocation() { //mevcut konumu almak için fonksiyon
        Geolocation.getCurrentPosition( //geolocation ile mevcut konumu al
            (position) => {
                dispatch(setLatitude(position.coords.latitude)); //latitude'i reducer'a gönder
                dispatch(setLongitude(position.coords.longitude)); //longitude'u reducer'a gönder
                setRegion({
                    latitude: position.coords.latitude, //latitude'i region'a gönder
                    longitude: position.coords.longitude, //longitude'u region'a gönder
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.02,
                });
            }
        );
    }

    const handleGetPharmacies = () => { //eczaneleri almak için fonksiyon
        fetch(`https://www.nosyapi.com/apiv2/pharmacy/distance?latitude=${lat}&longitude=${long}`, { //apiye istek at
            method: 'GET', //get metodu ile istek at
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'API_KEY' // nosyapi.com'a kayıt olup alacağınız api key
            }
        })
            .then((response) => response.json()) //json formatına çevir
            .then((json) => {
                setPharmacies(json.data); //json'dan gelen data'yı pharmacies'e gönder
               json.data.map((item) => { //json'dan gelen data'yı map ile dön
                    setRegion({ //region'a gelen data'yı gönder ve haritada odak noktasını güncelle
                        latitude: item.latitude, 
                        longitude: item.longitude,
                        latitudeDelta: 0.02,
                        longitudeDelta: 0.02,
                    });
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
    return (
        <SafeAreaView style={styles.container}>
            <MapView initialRegion={region} region={region} provider={PROVIDER_GOOGLE} showsMyLocationButton={true} showsUserLocation={true} style={styles.map}>
                {pharmacies.map((pharmacy, index) => {
                    return (
                        <Marker key={index} coordinate={{ latitude: pharmacy.latitude, longitude: pharmacy.longitude }} title={pharmacy.name} description={pharmacy.address} >
                            <Image source={require('../../assets/images/marker.png')} style={styles.marker} /> 
                        </Marker>
                    )
                }
                )}
            </MapView>
            <Header text='Nöbetçi Eczaneler' />
            <TouchableOpacity style={styles.locationButton} onPress={handleGetLocation}>
                <Text style={styles.locationButtonText}>Konumumu</Text>
                <Text style={styles.locationButtonText}>Al</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.pharmaciesButton} onPress={handleGetPharmacies}>
                <Text style={styles.pharmaciesButtonText}>Nöbetçi Eczaneleri Göster</Text>
            </TouchableOpacity>
            <SafeAreaView style={styles.pharmaciesContainer}>
                <FlatList data={pharmacies} renderItem={({ item }) => ( // pharmacies state'ini flatlist ile göster
                    <TouchableOpacity style={styles.pharmacyCard}>
                        <Text style={styles.pharmacyName}>{item.EczaneAdi}</Text>
                        <Text style={styles.pharmacyAddress}>{item.Adresi}</Text>
                        <Text style={styles.pharmacyCounty}>{item.Semt}</Text>
                        <Text style={styles.pharmacyAddress2}>{item.YolTarifi}</Text>
                        <Text style={styles.pharmacyPhone}>{item.Telefon}  {item.Telefon2}</Text>
                    </TouchableOpacity>
                )}
                    keyExtractor={item => item.id} // her bir eczanenin id'sini key olarak kullan
                />
            </SafeAreaView>
        </SafeAreaView>
    )
}
export default Map