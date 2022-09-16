import React from 'react';
import {
  SafeAreaView,
  LogBox,
} from 'react-native';
import { color } from './src/constant/theme';
import MainNavigator from "./src/routes/navigation";
import store from "./store";
import { Provider } from "react-redux";

LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();

const App = () => {

  return (
    <SafeAreaView style={{ backgroundColor: color.white, flex: 1 }}>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
