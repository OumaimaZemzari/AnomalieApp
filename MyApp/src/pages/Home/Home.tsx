import React, {FunctionComponent, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {List} from '../../components/List';
import {Character} from '../../components/ListItem';
import {useHome} from './useHome';

export const Home: FunctionComponent = () => {
  const {data, loading} = useHome();

  if (loading) {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.containerList}>
            <ActivityIndicator />
          </View>
        </View>
      </>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerList}>
          <List data={data?.characters?.results as Character[]} />
        </View>
      </View>
    </>
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
});
