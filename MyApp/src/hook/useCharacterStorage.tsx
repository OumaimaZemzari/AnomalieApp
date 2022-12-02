// import type {ReactNode} from 'react';
// import {createContext, useContext, useState} from 'react';

// type Character = {
//   id: number;
//   name: string;
//   species: string;
//   image: string;
// };

// type CharacterStorageContext = {
//   characters: Character[];
//   addCharacter: (character: Character) => void;
//   removeCharacter: (character: Character) => void;
// };

// const context = createContext<CharacterStorageContext | null>(null);

// export const useCharacterStorage = (): {
//   characters: Character[];
//   loading: boolean;
//   addCharacter: (item: Character) => void;
//   removeCharacter: (item: Character) => void;
// } => {
//   const contextValue = useContext(context);

//   if (!contextValue) {
//     throw new Error(
//       'useCharacterStorage must be used within a CharacterStorageProvider',
//     );
//     };

// export const CharacterStorageProvider = (props: {children: ReactNode}) => {
//   const {children} = props;

//   const [characters, setCharacters] = useState<Character[]>([]);

//   const addCharacter = (character: Character) => {
//     setCharacters(prev => [...prev, character]);
//   };

//   const removeCharacter = (character: Character) => {
//     setCharacters(prev => prev.filter(c => c.id !== character.id));
//   };

//   return {characters, addCharacter, removeCharacter};
// };
