import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './style';
import SelectImage from '../../utils/selectImage/SelectImage';
import {useRoute} from '@react-navigation/native';

function Photo() {
  const insets = useSafeAreaInsets();
  const params = useRoute();

  console.log(params);

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

        <SelectImage />
      </View>
    </>
  );
}

export default Photo;
