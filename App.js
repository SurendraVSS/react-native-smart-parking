import React, { useState, useEffect, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Home from './src/screens/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Payment from './src/screens/Payment';
import { Context, UserContext } from "./context"
import Routes from './routes';


export default function App() {
  const islogged = async () => {
   
  }

  
  const authscheck = useContext(UserContext);
  return (
    <Context>
      <Routes />
    </Context>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
