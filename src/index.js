import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';
import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#3c3c3d" />
      <Routes />
    </>
  );
}
