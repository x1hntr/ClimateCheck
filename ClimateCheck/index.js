import {AppRegistry} from 'react-native';
import React from 'react'
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './src/reducers/loginReducer'

const store = createStore(reducer);

const Appcontainer = () =>
<Provider store={store}>
    <App/>
</Provider>

AppRegistry.registerComponent(appName, () => Appcontainer);