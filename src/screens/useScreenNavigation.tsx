import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@react-navigation/core';
import {ScreenParamList} from 'src/types';

export function useScreenNavigation() {
  return useNavigation<NavigationProp<ScreenParamList>>();
}
