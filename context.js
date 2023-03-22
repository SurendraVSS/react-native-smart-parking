import React, { useState, createContext, useContext, useEffect } from 'react';
import {View, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserContext = createContext();

const Context = (props) => {
    const [auth, setAuth] = useState(false);
    useEffect(() => {
        islogin()
        //AsyncStorage.clear();
    }, []);

    async function islogin() {
        const dta = await AsyncStorage.getItem('isAuth')
        let dtas = JSON.parse(dta)
        if (dtas) {
            setAuth(dtas)
        }
    }
   

    return (
        <UserContext.Provider value={{auth, setAuth}}>
           {props.children}
        </UserContext.Provider>
    );
}

const styles = StyleSheet.create({})

export { Context, UserContext};
