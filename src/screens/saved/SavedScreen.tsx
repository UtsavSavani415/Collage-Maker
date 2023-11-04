import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function SavedScreen() {
  const insets = useSafeAreaInsets();

  return (
    <>
      <View
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}>
        <Text>Saved</Text>
      </View>
    </>
  );
}
export default SavedScreen;
