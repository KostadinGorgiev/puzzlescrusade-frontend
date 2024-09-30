import { SDKProvider } from "@telegram-apps/sdk-react";
import { type FC } from "react";

import { Provider } from "react-redux";
import { store } from "../store";
import App from "../components/App";

const Inner: FC = () => {
  return (
    <SDKProvider acceptCustomStyles debug={true}>
      <Provider store={store}>
        <App />
      </Provider>
    </SDKProvider>
  );
};

export const Root: FC = () => <Inner />;
