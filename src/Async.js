import {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

const Async = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
      });
  }, []);

  if (posts.length == 0) {
    return (
      <Text style={{textAlign: 'center', marginVertical: 24}}>Loading...</Text>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {posts.map(post => (
        <View style={styles.listitem} key={post.id}>
          <Text testID="listitem" style={styles.listitemText}>
            {post.title}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Async;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  listitem: {
    marginVertical: 3,
    backgroundColor: 'purple',
  },
  listitemText: {
    fontSize: 20,
    fontWeight: '400',
    padding: 24,
    color: 'yellow',
  },
});
