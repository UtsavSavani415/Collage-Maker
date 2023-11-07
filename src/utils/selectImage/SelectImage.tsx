import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import ImagePicker, {
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import Permissions from 'react-native-permissions';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';

function SelectImage() {
  const [selectedImage, setSelectedImage] = useState(
    'https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/03/placeholder.png',
  );

  const navigation = useNavigation();
  let options = {
    storageOptions: {
      path: 'image',
    },
  };
  const chooseImage = () => {
    launchImageLibrary(options, response => {
      if (response) {
        setSelectedImage(response.assets[0].uri);
        navigation.navigate('photo', {
          uri: selectedImage,
        });
      }
      console.log(selectImage);
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
