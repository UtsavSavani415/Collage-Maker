import React, {useState} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import SelectOptions from '../selectOptions/SelectOptions';

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
          <SelectOptions />
        </View>
      </View>
    </>
  );
}

export default DashBoard;
