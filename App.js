import React, {useState} from 'react';
import { LogBox } from "react-native"
import Starter from './starter';

function App() {
  LogBox.ignoreAllLogs(true)
  return (
      Starter()
  );
};

export default App;
