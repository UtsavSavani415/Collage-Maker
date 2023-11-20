import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './style';
import {useRoute} from '@react-navigation/native';

function Photo() {
  const insets = useSafeAreaInsets();
  const params = useRoute();

  let imageUri = params?.params.uri;
  console.log(params.params.uri);

  return (
    <>
      <View
        style={[
          styles.container,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}>
        <Text style={styles.text}>Photo Editing</Text>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={{uri: imageUri}} />
        </View>
      </View>
    </>
  );
}

export default Photo;
