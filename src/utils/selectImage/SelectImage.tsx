import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';

function SelectImage({setVisibility}) {
  const [selectedImage, setSelectedImage] = useState('');

  let placeHolderImage =
    'https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/03/placeholder.png';
  // useEffect(() => {
  //   setModalvisible(false);
  // }, []);
  const navigation = useNavigation();
  let options = {
    storageOptions: {
      path: 'image',
    },
  };
  const chooseImage = () => {
    launchImageLibrary(options, response => {
      let imgURI = response.assets[0].uri;
      if (response) {
        setSelectedImage(imgURI);
        navigation.navigate('photo', {
          uri: imgURI,
        });
        setVisibility(false);
      }
      console.log('in library', response.assets[0]);
    });
  };
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={chooseImage} style={styles.btn}>
          <Text style={styles.btntext}>Select Image</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default SelectImage;
