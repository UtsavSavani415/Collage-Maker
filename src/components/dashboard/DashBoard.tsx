import React from 'react';
import {Text, Touchable, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './style';

function DashBoard() {
  const insets = useSafeAreaInsets();
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
            <TouchableOpacity style={styles.optionBox}>
              <View style={styles.optionIcon}></View>
              <Text style={styles.optionTitle}>Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.optionIcon}></View>
              <Text style={styles.optionTitle}>Collage</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

export default DashBoard;
