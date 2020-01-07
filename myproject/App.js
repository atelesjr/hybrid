import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [ count, setCount ] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, paddingBottom: 10 }}>Contador</Text>
      <Text style={{ fontSize: 35, fontWeight: 'bold', paddingBottom: 10 }}>{count}</Text>
      <Button title="Increment" onPress={()=> setCount(count+1)} />
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
