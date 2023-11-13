import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';

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
      <Button
        onPress={changeTextHandler}
        title="Change Text!"
        style={styles.btn}
        // color="#FFF"
      />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 24,
    color: 'yellow',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '400',
    marginVertical: 24,
    color: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'purple',
  },
  btn: {
    height: 40,
    width: '100%',
    color: 'purple',
    backgroundColor: 'yellow',
  },
});
