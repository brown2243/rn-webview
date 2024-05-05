import React from 'react';
import {WebView} from 'react-native-webview';
import styled from '@emotion/native';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const StyledWebView = styled(WebView)`
  flex: 1;
`;

const WebViewComponent = ({url}: {url: string}): React.JSX.Element => {
  const handleWebViewLoad = () => {
    console.log('WebView loaded');
  };

  const handleWebViewError = () => {
    console.log('WebView error');
  };

  return (
    <Container>
      <StyledWebView
        source={{uri: url}}
        onLoad={handleWebViewLoad}
        onError={handleWebViewError}
      />
    </Container>
  );
};

export default WebViewComponent;
