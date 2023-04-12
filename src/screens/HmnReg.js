import React from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity, Image } from 'react-native';
import { COLORS, SIZES, icons, images } from "../constants"
import { LinearGradient } from 'expo-linear-gradient';

const HmnReg = ({navigation}) => {
    return (
        <View>
            <View style={{ height: 500, borderRadius :10}}>
                <LinearGradient
                    colors={[COLORS.lime, COLORS.emerald]}
                    style={{ flex: 1 }}
                >
                <View style={{justifyContent: 'center',alignItems: 'center'}}>
                        <View style={{}}>
                          
                            <View
                                style={{
                                    marginTop: 200,
                                    height: 100,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: SIZES.padding * 3
                                }}
                            >
                            <Image source={images.loc} style={{
                                resizeMode: 'contain',
                                width:'70%'
                            }} />
                            </View>
                            <Text style={{ fontSize: 30,marginTop:90,color:'#fff' }}>Smart Parking System</Text>
                </View>
                      
                </View>
                   
                </LinearGradient>
            </View>

            <View style={{justifyContent:'center',alignItems: 'center', marginTop:80}}>
                {/* <Button title="Register" color="#841584"></Button>
                <Button title='Login' color="#841584"></Button> */}

                <TouchableOpacity style={{ backgroundColor: 'black', width: 250, height: 60, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate('Register')}>
                    <Text style={{ color: 'white', fontSize: 20 }}>Register</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ backgroundColor: 'black', width: 250, height: 60, borderRadius: 20,justifyContent:'center',alignItems:'center',marginTop:20 }}>
                    <Text style={{ color: 'white', fontSize: 20 }}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default HmnReg;
