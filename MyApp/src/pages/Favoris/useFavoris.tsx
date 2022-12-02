import AsyncStorage from '@react-native-async-storage/async-storage';
import {Character} from '../../components/ListItem';
import {} from '../../common/generated/graphql';
import {useState} from 'react';

export const useFavoris = (): {
  characters: Character[];
  storeData: (value: Character) => void;
  removeData: () => void;
} => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('key');
      return {msg: 'Removing successful'};
    } catch (error) {
      console.log(error);
      return {error: true, msg: 'Removing failed'};
    }
  };

  const storeData = async (item: Character) => {
    let arr: Character[] = [];
    AsyncStorage.getItem('key', (_err, result) => {
      console.log('aaa', result);

      if (result !== undefined) {
        console.log('bbbb');
        let parsed: Character[];
        if (result !== null) {
          parsed = JSON.parse(result);
          arr = parsed;
          console.log('dddddd');
          console.log('parseeeee1', arr);
        }
        console.log('itemm????', item);

        let test = arr.findIndex(element => element.id === item.id);

        console.log('//////test', test);
        if (test < 0) {
          arr.push(item);
          console.log('confirmé', test);
        }
        console.log('get11111');

        AsyncStorage.setItem('key', JSON.stringify(arr), () => {
          console.log('set22222222', arr);
          AsyncStorage.getItem('key', (_err2, result2) => {
            if (result2 && result2 !== null) {
              let parsed2 = JSON.parse(result2);
              setCharacters(parsed2);
              console.log('get333333333', parsed2);
            }
          });
        });
      }
    });
  };

  return {characters, storeData, removeData};
};
