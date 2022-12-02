declare module '*.graphql' {
  import {DocumentNode} from 'graphql';
  const value: DocumentNode;
  export default value;
  export = value;
}

declare module '*.png' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const value: any;
  export = value;
}
