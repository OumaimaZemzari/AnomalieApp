import React, {FunctionComponent} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Character, ListItem} from './ListItem';

interface Props {
  data: Character[];
  isFavoris?: boolean;
}

export const List: FunctionComponent<Props> = ({data, isFavoris = false}) => {
  return (
    <FlatList
      style={styles.list}
      data={data}
      extraData={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => <ListItem isFavoris={isFavoris} item={item} />}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 5,
  },
});
