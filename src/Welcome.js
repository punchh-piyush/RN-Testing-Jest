import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const Welcome = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Test App</Text>
      {!changedText && <Text style={styles.subTitle}>Not Changed!</Text>}
      {changedText && <Text style={styles.subTitle}>Changed!</Text>}
      <TouchableOpacity
        testID="change-btn"
        onPress={changeTextHandler}
        title="Change Text"
        style={styles.btn}
        color="#FFF">
        <Text style={{color: 'black'}}>Change Text</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'purple',
    padding: 24,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'yellow',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '400',
    marginVertical: 24,
    color: 'white',
  },

  btn: {
    height: 40,
    width: '70%',
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
