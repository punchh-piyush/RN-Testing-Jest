import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import MyButton from './MyButton';

const Welcome = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Text style={styles.title}>Test App</Text>
      {!changedText && <Text style={styles.subTitle}>Not Changed!</Text>}
      {changedText && <Text style={styles.subTitle}>Changed!</Text>}
      <MyButton testID="btn-primary" onPress={changeTextHandler} />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 24,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
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
});
