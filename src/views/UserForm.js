import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet, Button} from 'react-native';

export default ({route, navigation}) => {
  const [user, setUser] = useState(route.params ? route.params : {});

  return (
    <View style={styles.form}>
      <Text style={styles.text}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Informe o Nome"
        onChangeText={name => setUser({...user, name})}
        value={user.name}></TextInput>
      <Text style={styles.text}>E-Mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Informe o E-Mail"
        onChangeText={email => setUser({...user, email})}
        value={user.email}></TextInput>
      <Text style={styles.text}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Informe a URL do avatar"
        onChangeText={avatar => setUser({...user, avatar})}
        value={user.avatar}></TextInput>
      <Button
        title="Salvar"
        color={'#61dafb'}
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    backgroundColor: '#282c34',
    padding: 20,
  },

  text: {
    color: 'white',
    marginBottom: 5,
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    borderColor: '#61dafb',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});
