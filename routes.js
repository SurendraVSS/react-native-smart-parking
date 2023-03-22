import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context, UserContext } from "./context"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Home from './src/screens/Home';
import Payment from './src/screens/Payment';

const Routes = () => {
    const authscheck = useContext(UserContext);
    const Stack = createNativeStackNavigator();
    //console.log(authscheck.auth);
    return (
        <>

            {authscheck.auth ? <>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{
                        headerShown: false
                    }}>
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen name="Payment" component={Payment} />
                    </Stack.Navigator>
                </NavigationContainer>
            </> : <>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{
                        headerShown: false
                    }}>
                        <Stack.Screen name="Register" component={Register} />
                        <Stack.Screen name="Login" component={Login} />
                    </Stack.Navigator>
                </NavigationContainer>
            </>
            }



        </>

    );
}

const styles = StyleSheet.create({})

export default Routes;
