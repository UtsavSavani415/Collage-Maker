import React, {useState} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import SelectImage from '../../utils/selectImage/SelectImage';

function SelectOptions() {
  const [modalvisible, setModalvisible] = useState(false);

  const navigation = useNavigation();

  // const toPhotoEditing = () => {
  //   navigation.navigate('photo');
  // };

  const toCollageEditing = () => {
    navigation.navigate('collage');
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.box}>
          <TouchableOpacity
            style={styles.optionBox}
            onPress={() => {
              setModalvisible(true);
            }}>
            <View style={styles.optionIcon} />
            <Text style={styles.text}>Photos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBox} onPress={toCollageEditing}>
            <View style={styles.optionIcon} />
            <Text style={styles.text}>Collage</Text>
          </TouchableOpacity>
        </View>
        <Modal transparent={true} visible={modalvisible} animationType="fade">
          <View style={styles.modal}>
            <View style={styles.modalContainer}>
              <Text style={styles.text}>modal</Text>
              <SelectImage
                setVisibility={modalVisibility =>
                  setModalvisible(modalVisibility)
                }
              />
              <TouchableOpacity
                style={styles.btnBox}
                onPress={() => {
                  setModalvisible(false);
                }}>
                <Text style={styles.text}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}

export default SelectOptions;
