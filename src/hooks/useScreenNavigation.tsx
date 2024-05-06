import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@react-navigation/core';

const HOME_SCREEN = 'HOME_SCREEN';
const BRAURUS_SCREEN = 'BRAURUS_SCREEN';
const SCREEN_PARAMS_OBJ = {
  [HOME_SCREEN]: undefined,
  [BRAURUS_SCREEN]: undefined,
} as const;
type ScreenParamList = typeof SCREEN_PARAMS_OBJ;

export function useScreenNavigation() {
  return useNavigation<NavigationProp<ScreenParamList>>();
}
