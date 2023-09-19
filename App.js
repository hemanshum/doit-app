import "react-native-get-random-values";
import { PaperProvider } from 'react-native-paper';
import { store } from './src/store'
import { Provider } from 'react-redux'
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';

//Initializing the SDK. 
Parse.setAsyncStorage(AsyncStorage);
Parse.initialize('myAppId');
Parse.serverURL = ' https://306f-103-174-141-16.ngrok-free.app/parse';

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

