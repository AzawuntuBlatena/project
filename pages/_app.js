
import '@/styles/globals.css';

import "@fontsource/poppins";
import "@fontsource/montez";
import "@fontsource/righteous";




export default function App({ Component,
  pageProps: { session, ...pageProps },
}) {
  return (
   
    
  
    <Component {...pageProps}  />
  
   

    
  );
}
