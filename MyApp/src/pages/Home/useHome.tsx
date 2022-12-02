import {
  GetCharactersQuery,
  useGetCharactersQuery,
} from '../../common/generated/graphql';

export const useHome = (): {
  data: GetCharactersQuery | undefined;
  loading: boolean;
} => {
  const {data, loading} = useGetCharactersQuery();

  return {data, loading};
};
