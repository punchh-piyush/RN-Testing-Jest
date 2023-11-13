import {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';

const Async = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
      });
  }, []);

  return (
    <>
      <View>
        {posts.map(post => (
          <Text testID="listitem" key={post.id}>
            {post.title}
          </Text>
        ))}
      </View>
    </>
  );
};

export default Async;
