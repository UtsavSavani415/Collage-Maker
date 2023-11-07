import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './style';

function Collage() {
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
        <Text>collage</Text>
      </View>
    </>
  );
}

export default Collage;
