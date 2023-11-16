import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const MyButton = ({onPress, testID}) => {
  return (
    <TouchableOpacity
      testID={'btn-primary'}
      onPress={onPress}
      title="Change Text"
      style={styles.btn}
      color="#FFF">
      <Text style={{color: 'black'}}>Change Text</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  btn: {
    height: 40,
    width: '70%',
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
