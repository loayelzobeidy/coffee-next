import React from 'react';
import ReduxProvider from "@/store/storeProvider";
import wrapper from '../store/store'; 

function MyApp({ Component, pageProps }) {
  console.log('inside MyApp component');
  
  return (
    <ReduxProvider> 
      <Component {...pageProps} />
    </ReduxProvider>
  );
}

export default wrapper.withRedux(MyApp);