import AsyncStorage from '@react-native-async-storage/async-storage';
import {Character} from '../../components/ListItem';
import {} from '../../common/generated/graphql';
import {useState} from 'react';

export const useFavoris = (): {
  characters: Character[];
  storeData: (value: Character) => void;
  retrieveData: () => void;
  removeData: (item: Character) => void;
} => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const retrieveData = async () => {
    AsyncStorage.getItem('key', (_err, result) => {
      if (result !== undefined) {
        let parsed: Character[];
        if (result !== null) {
          parsed = JSON.parse(result);
          setCharacters(parsed);
        }
      }
    });
  };

  const storeData = async (item: Character) => {
    let arr: Character[] = [];
    AsyncStorage.getItem('key', (_err, result) => {
      if (result !== undefined) {
        let parsed: Character[];
        if (result !== null) {
          parsed = JSON.parse(result);
          arr = parsed;
        }

        let test = arr.findIndex(element => element.id === item.id);

        if (test < 0) {
          arr.push(item);
        }

        AsyncStorage.setItem('key', JSON.stringify(arr), () => {
          AsyncStorage.getItem('key', (_err2, result2) => {
            if (result2 && result2 !== null) {
              let parsed2 = JSON.parse(result2);
              setCharacters(parsed2);
            }
          });
        });
      }
    });
  };
  const removeData = async (item: Character) => {
    retrieveData().then(() => {
      console.log('remouuve ', characters);
      console.log('remouuve idddddd ', item.id);

      if (characters.length > 0) {
        const result = characters.filter(element => element.id !== item.id);
        AsyncStorage.setItem('key', JSON.stringify(result));
      }
    });
  };
  return {characters, storeData, retrieveData, removeData};
};
