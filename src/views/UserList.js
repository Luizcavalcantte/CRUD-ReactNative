import React, {useContext} from 'react';
import {Alert, FlatList, View} from 'react-native';
import {ListItem, Icon, Avatar, Text} from 'react-native-elements';
import UserContext from '../context/UsersContext';

export default props => {
  const {state, dispatch} = useContext(UserContext);

  function confirmDeletion(user) {
    Alert.alert('Excluir Usuario', 'Deseja Excluir  ' + user.name + '?', [
      {
        text: 'Sim',
        onPress() {
          dispatch({type: 'deleteUser', payload: user});
        },
      },
      {text: 'Não'},
    ]);
  }
  function getUserItem({item: user}) {
    return (
      <ListItem
        key={user.id}
        bottomDivider
        onPress={() => props.navigation.navigate('UserForm')}>
        <Avatar
          source={{
            uri: user.avatar,
          }}
        />
        <ListItem.Content>
          <ListItem.Title>
            <Text>{user.name}</Text>
          </ListItem.Title>
          <ListItem.Subtitle>
            <Text>{user.email}</Text>
          </ListItem.Subtitle>
        </ListItem.Content>
        <Icon
          name="edit"
          size={30}
          color={'#20232a'}
          onPress={() => props.navigation.navigate('UserForm', user)}
        />
        <Icon
          name="delete"
          size={30}
          color={'#20232a'}
          onPress={() => {
            confirmDeletion(user);
          }}
        />
      </ListItem>
    );
  }

  return (
    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={state.Users}
        renderItem={getUserItem}
      />
    </View>
  );
};
