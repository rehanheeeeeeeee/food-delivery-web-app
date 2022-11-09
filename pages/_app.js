import AppLayout from "../Layouts/AppLayout";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import store from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AnimatePresence exitBeforeEnter>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </AnimatePresence>
    </Provider>
  );
}

export default MyApp;
