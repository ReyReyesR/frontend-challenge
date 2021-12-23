import Layout from "../components/layout/layout";
import "../styles/global.css";
import { ToastProvider } from "react-toast-notifications";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ToastProvider
        autoDismissTimeout={2000}
        autoDismiss={true}
        placement="bottom-center"
      >
        <Component {...pageProps} />
      </ToastProvider>
    </Layout>
  );
}

export default MyApp;
