import React, {FunctionComponent, useState} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useFavoris} from '../pages/Favoris/useFavoris';

export type Character = {
  id: string;
  name: string;
  image: string;
  species: string;
};

interface Props {
  item: Character;
  isFavoris: boolean;
}

export const ListItem: FunctionComponent<Props> = ({item, isFavoris}) => {
  const {storeData, removeData} = useFavoris();

  const Add = () => {
    if (isFavoris) {
      console.log('favoris');
      removeData(item);
    } else {
      // eslint-disable-next-line no-sparse-arrays
      Alert.alert('Ajout', 'Vous voulez ajouter: ' + item.name, [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
        },
        {text: 'OK', onPress: () => storeData(item)},
      ]);
    }
  };

  // ;

  return (
    <TouchableOpacity style={styles.card} onPress={() => console.log('test')}>
      <Image style={styles.image} source={{uri: item.image}} />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.species}>{item.species}</Text>
        <TouchableOpacity
          style={isFavoris ? styles.RemoveButtonText : styles.followButton}
          onPress={Add}>
          <Text style={styles.followButtonText}>
            {isFavoris ? 'remove' : 'add'}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  cardContent: {
    marginLeft: 20,
    marginTop: 10,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },

  card: {
    shadowColor: '#00000021',

    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
  },

  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: '#008080',
    fontWeight: 'bold',
  },
  species: {
    fontSize: 14,
    flex: 1,
    alignSelf: 'center',
    color: '#696969',
  },

  followButton: {
    marginTop: 10,
    height: 35,
    width: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  followButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  RemoveButtonText: {
    marginTop: 10,
    height: 35,
    width: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#FF3A03',
  },
});
