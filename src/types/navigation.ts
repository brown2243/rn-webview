import {ScreenName} from 'src/constant';

export type RootStackParamList = {
  [ScreenName.Home]: undefined;
  [ScreenName.Braurus]: undefined;
  [ScreenName.NotFound]: {error: string};
};

// https://reactnavigation.org/docs/typescript/#organizing-types
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
