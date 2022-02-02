import '../styles/globals.scss'
import '../styles/navbar.scss'
import '../styles/card.scss'
import '../styles/footer.scss'
import '../styles/modal.scss'
import '../styles/staking.scss'
import '../styles/tiersystem.scss'
import '../styles/tiers.scss'
import '../styles/snow.scss'
import '../styles/tokenpage.scss'
import '../styles/slideTokenpage.scss'

import { ChakraProvider} from "@chakra-ui/react"
import { StoreProvider } from 'easy-peasy';
import store from '../store/store';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <StoreProvider store={store}>
    <Component {...pageProps} />
    </StoreProvider>
    </>
    );
}

export default MyApp
