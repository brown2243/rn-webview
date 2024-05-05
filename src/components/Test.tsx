import styled from '@emotion/native';
import React from 'react';
import {Text} from 'react-native';

const StyledText = styled(Text)`
  color: red;
  font-size: 16px;
  font-weight: 700;
`;

function Test() {
  return <StyledText>Test App!!!!!</StyledText>;
}

export default Test;
