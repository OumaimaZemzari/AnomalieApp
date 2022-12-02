import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import {List} from '../../components/List';
import {useFavoris} from './useFavoris';

export const Favoris: FunctionComponent = () => {
  const {characters} = useFavoris();
  console.log('PageFavoris', characters);
  return (
    <View style={styles.container}>
      <View style={styles.containerList}>
        {characters?.length > 0 ? (
          <List isFavoris={true} data={characters} />
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerList: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    top: 100,
    fontSize: 20,
    paddingRight: 5,
  },
});
