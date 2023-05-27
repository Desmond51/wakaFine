import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import {Button, ButtonType} from '../../components';
import config from '../../../config';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import getDistance from 'geolib/es/getDistance';
import styles from './home.styles';

type Props = {
  navigation: any;
};

const Home: React.FC<Props> = ({navigation}) => {
  const distance = getDistance(
    {latitude: 51.5103, longitude: 7.49347},
    {latitude: "51° 31' N", longitude: "7° 28' E"},
  );

  console.log('distance: ', distance);
  return (
    // <View>
    //   <Text>Home</Text>
    //   <GooglePlacesAutocomplete
    //     placeholder="Where To?"
    //     styles={{
    //       container: {
    //         flex: 0,
    //         width: '95%',
    //         alignContent: 'center',
    //         alignSelf: 'center',
    //         margin: 10,
    //       },
    //       textInput: {
    //         fontSize: 18,
    //       },
    //     }}
    //     onPress={(data, details = null) => {
    //       console.log(data);
    //     }}
    //     fetchDetails={true}
    //     nearbyPlacesAPI="GooglePlacesSearch"
    //     minLength={2}
    //     enablePoweredByContainer={false}
    //     query={{
    //       key: 'AIzaSyBLvVhTbRK5jQWq7DzzV-FYwMabv85bO-g',
    //       language: 'en',
    //     }}
    //   />
    //   {/* <Button
    //     btnText={'Next'}
    //     btnType={ButtonType.PRIMARY}
    //     onPress={() => navigation.navigate('Onboarding')}
    //   /> */}
    // </View>
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/logo.png')} style={styles.logo}/>
      </View>
      <ImageBackground
        source={require('../../assets/home.png')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.main}>
          <Text style={styles.question}>Want to travel?</Text>
          <GooglePlacesAutocomplete
            placeholder="Search location"
            styles={{
              container: styles.searchContainer,
              textInput: styles.textInput,
            }}
            onPress={(data, details = null) => {
              console.log(data);
            }}
            fetchDetails={true}
            nearbyPlacesAPI="GooglePlacesSearch"
            minLength={2}
            enablePoweredByContainer={false}
            query={{
              key: 'AIzaSyBLvVhTbRK5jQWq7DzzV-FYwMabv85bO-g',
              language: 'en',
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;
