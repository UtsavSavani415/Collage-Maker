import React from 'react';
import {Text, Touchable, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';

function DashBoard() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const toPhotoEditing = () => {
    navigation.navigate('photo');
  };

  const toCollageEditing = () => {
    navigation.navigate('collage');
  };
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
        <View style={styles.optionContainer}>
          <Text style={styles.containerTitle}>Create New</Text>
          <View style={styles.box}>
            <TouchableOpacity style={styles.optionBox} onPress={toPhotoEditing}>
              <View style={styles.optionIcon} />
              <Text style={styles.optionTitle}>Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionBox}
              onPress={toCollageEditing}>
              <View style={styles.optionIcon} />
              <Text style={styles.optionTitle}>Collage</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

export default DashBoard;
