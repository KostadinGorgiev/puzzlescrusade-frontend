import { SDKProvider, useLaunchParams } from '@telegram-apps/sdk-react';
import { type FC, useEffect } from 'react';

import { Provider } from 'react-redux';
import { store } from '../store';
import App from '../components/App';

const Inner: FC = () => {
    const debug = useLaunchParams().startParam === 'debug';

    // Enable debug mode to see all the methods sent and events received.
    useEffect(() => {
        if (debug) {
            import('eruda').then((lib) => lib.default.init());
        }
    }, [debug]);

    return (
        <SDKProvider acceptCustomStyles debug={true}>
            <Provider store={store}>
                <App />
            </Provider>
        </SDKProvider>
    );
};

export const Root: FC = () => (
    <Inner />
);
