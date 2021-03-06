import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import '../styles/header.css';

import { useEffect } from 'react';
import AOS from 'aos';

// import aos styles
import 'aos/dist/aos.css';






function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 100,
    });
  }, []);


  return <Component {...pageProps} />
}

export default MyApp
