import React from 'react';
import {
  SafeAreaView,
  LogBox,
} from 'react-native';
import { color } from './src/constant/theme';
import MainNavigator from "./src/routes/navigation";
import store from "./store";
import { Provider } from "react-redux";
import { MenuProvider } from 'react-native-popup-menu';

LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();

const App = () => {

  return (
    <SafeAreaView style={{ backgroundColor: color.white, flex: 1 }}>
      <MenuProvider>
        <Provider store={store}>
          <MainNavigator />
        </Provider>
      </MenuProvider>
    </SafeAreaView>
  );
};

export default App;
