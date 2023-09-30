import "react-native-get-random-values";
import { PaperProvider } from 'react-native-paper';
import { store } from './src/store'
import { Provider } from 'react-redux'
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';

//Initializing the SDK. 
Parse.setAsyncStorage(AsyncStorage);
Parse.initialize('myAppId');
Parse.serverURL = 'https://e0f0-103-141-116-182.ngrok-free.app/parse';

import MainNavigation from './src/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <MainNavigation />
      </PaperProvider>
    </Provider>
  );
}

