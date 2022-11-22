import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { Header } from '../../components'
import { red } from '../../style/colors'
import SelectDropdown from 'react-native-select-dropdown'
import cities from '../../utils/cities'
import styles from './Home.style'

const Home = () => {
  const [selectedCity, setSelectedCity] = useState(''); // şehir seçilince index değeri buraya yazılacak
  const [town, setTown] = useState('Konum Seçiniz');  // header'da gösterilecek ve api isteği için kullanılacak
  const [district, setDistrict] = useState(''); // header'da gösterilecek ve api isteği için kullanılacak
  const [pharmacies, setPharmacies] = useState([]); // api'den gelen eczane data'sı buraya yazılacak
  const apiUrl = 'https://www.nosyapi.com/apiv2/pharmacy';

  useEffect(() => {
    if (town !== 'Konum Seçiniz' && district === '') { // şehir seçilmişse 
      handleGetPharmaciesByCity(); // seçilen şehre göre eczaneleri getir
    }
    else if (town !== 'Konum Seçiniz' && district !== '') { // ilçe seçilmişse
      handleGetPharmaciesByCounty(); // seçilen ilçeye göre eczaneleri getir
    }
    else { // şehir seçilmemişse
      handleGetPharmacies(); // tüm eczaneleri getir
    }
  }, [town]); // component mount olduğunda ve town değiştiğinde çalıştır

  useEffect(() => {
    handleGetPharmaciesByCounty(); // seçilen ilçede eczaneleri getir
  }, [district]) // ilçe seçildiğinde çağır

  handleGetPharmacies = () => { // tüm eczaneleri getirme fonksiyonu
    fetch(apiUrl + '/getAll', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'API_KEY' // noseyapi.com'dan alınacak tokenı API_KEY yerine yazın
      }
    })
      .then((response) => response.json()) // json'a çevir
      .then((json) => {
        setPharmacies(json.data); // pharmacies state'ini güncelle
      }
      )
      .catch((error) => {
        console.error(error);
      }
      );
  }
  handleGetPharmaciesByCity = () => { // şehre göre eczaneleri getirme fonksiyonu
    fetch(apiUrl + `?city=${town.toLowerCase()}`, {  //api küçük harfli değerleri istediği için küçük harfe çevir
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'API_KEY' // noseyapi.com'dan alınacak tokenı API_KEY yerine yazın
      }
    })
      .then((response) => response.json())
      .then((json) => {
        setPharmacies(json.data);
      }
      )
      .catch((error) => {
        console.error(error);
      }
      );
  }
  handleGetPharmaciesByCounty = () => { // ilçeye göre eczaneleri getirme fonksiyonu
    fetch(apiUrl + `?city=${town.toLowerCase()}&county=${district.toLowerCase()}`, { //api küçük harfli değerleri istediği için küçük harfe çevir
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'API_KEY' //noisyapi.com'dan alınacak tokenı API_KEY yerine yazın
      }
    })
      .then((response) => response.json())
      .then((json) => {
        setPharmacies(json.data);
      }
      )
      .catch((error) => {
        console.error(error);
      }
      );
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={red} />
      <View style={styles.headerContainer}>
        <Header text='Nöbetçi Eczaneler' />
        <Text style={styles.headerDistrict}> {district} </Text>
        <Text style={styles.headerTown}> {town} </Text>
      </View>
      <View style={styles.selectContainer}>
        <SelectDropdown
          data={city = cities.map((city) => (city.name).toUpperCase())} //şehirleri, kendim oluşturduğum cities.js dosyasından çek ve büyük harfe çevir
          defaultButtonText='Şehir Seçiniz'
          onSelect={(selectedItem, index) => { // şehir seçildiğinde
            setSelectedCity(index) // şehir index değerini selectedCity state'ine yaz
            setTown(selectedItem) // şehir state'ini seçilen item olarak güncelle
          }}
          buttonStyle={styles.selectButton}
          buttonTextStyle={styles.selectButtonText}
          renderDropdownIcon={() => {
            return (
              <View style={styles.selectIconContainer}>
                <Text style={styles.selectIcon}>▼</Text>
              </View>
            )
          }}
          dropdownStyle={styles.selectDropdown}
          rowStyle={styles.selectRow}
          rowTextStyle={styles.selectRowText}
        />
      </View>
      <View style={styles.selectContainer2}>
        {
          selectedCity !== '' ? ( // şehir seçilmişse ilçeleri göster
            <SelectDropdown
              data={county = (cities[selectedCity].counties).map((county) => (county).toUpperCase())} // seçilen şehrin ilçelerini, kendim oluşturduğum cities.js dosyasından çek ve büyük harfe çevir
              defaultButtonText='İlçe Seçiniz'
              onSelect={(selectedItem, index) => {
                setDistrict(selectedItem)
              }}
              buttonStyle={styles.selectButton}
              buttonTextStyle={styles.selectButtonText}
              renderDropdownIcon={() => {
                return (
                  <View style={styles.selectIconContainer}>
                    <Text style={styles.selectIcon}>▼</Text>
                  </View>
                )
              }}
              dropdownStyle={styles.selectDropdown}
              rowStyle={styles.selectRow}
              rowTextStyle={styles.selectRowText}
            />
          ) : (
            <SelectDropdown
              data={county = ['Lütfen önce şehir seçiniz']} // şehir seçilmemişse ilçe seçimini engelle
              defaultButtonText='İlçe Seçiniz'
              disabled={true} // seçim yapılmasını engelle çünkü şehir seçilmemiş
              buttonStyle={styles.selectButton}
              buttonTextStyle={styles.selectButtonText}
              renderDropdownIcon={() => {
                return (
                  <View style={styles.selectIconContainer}>
                    <Text style={styles.selectIcon}>▼</Text>
                  </View>
                )
              }}
              dropdownStyle={styles.selectDropdown}
              rowStyle={styles.selectRow}
              rowTextStyle={styles.selectRowText}
            />
          )
        }
      </View>
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
  )
}
export default Home