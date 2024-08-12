/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import store from './Src/ReduxExample/Redux/store';
import AppNavigator from './Src/AppNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const AppRedux = () => (
    <GestureHandlerRootView>
        <Provider store={store}>
            <App />
        </Provider>
    </GestureHandlerRootView>
)
AppRegistry.registerComponent(appName, () => AppRedux);
