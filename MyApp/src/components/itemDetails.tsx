import React, {FunctionComponent} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useFavoris} from '../pages/Favoris/useFavoris';
import {useHome} from '../pages/Home/useHome';
import {Character} from './ListItem';

interface Props {
  item: Character;
}

export const List: FunctionComponent<Props> = ({item}) => {
  const {storeData} = useFavoris();
  const Add = () => {
    storeData(item);
  };
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{uri: item.image}} />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.species}>{item.species}</Text>
        <TouchableOpacity style={styles.followButton} onPress={Add}>
          <Text style={styles.followButtonText}>add</Text>
        </TouchableOpacity>
      </View>
    </View>
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
});
