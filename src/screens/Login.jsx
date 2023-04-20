import React, { useState, useContext  } from 'react';
import {
    View, StyleSheet, Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    TextInput,
    Modal,
    FlatList,
    KeyboardAvoidingView,
    ScrollView,
    SafeAreaView,
    Alert
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SIZES, icons, images } from "../constants"
import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from "../../context"
import PopUP from '../components/PopUP';

const Login = ({navigation}) => {
    const authscheck = useContext(UserContext);
    const [showAnimation, setShowAnimation] = useState(false);
    const [showAnimationSus, setShowAnimationSus] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleLogin() {
        axios.post('https://smartpaarkingbackendiot.onrender.com/api/login', {
            "email": email,
            "password": password
        })
            .then(async function (response) {
                if (response.status == 200) {
                    await AsyncStorage.setItem('user', JSON.stringify(response.data))
                    await AsyncStorage.setItem('isAuth', JSON.stringify(true))
                    await authscheck.setAuth(true)
                    setShowAnimationSus(true)
                }
                if (response.status == 200) {
                    navigation.navigate('Home')
                }
            })
            .catch(function (error) {
                //Alert.alert("Please try again registration failed")
                setShowAnimation(true)
            }).then((response) => {
               
                setEmail("")
                setPassword("")
                setTimeout(() => {
                    setShowAnimation(false)
                    setShowAnimationSus(false)
                }, 5000);
               
            })
    }
    function renderHeader() {
        return (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: SIZES.padding * 6,
                    paddingHorizontal: SIZES.padding *3
                }}
                onPress={() => navigation.navigate('HmnReg')}
            >
            
          
                <Image
                    source={icons.back}
                    resizeMode="contain"
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.white
                    }}
                />
                <Text
                    style={{ marginLeft: SIZES.padding * 3, color: COLORS.white,
                        fontSize: 20 
                     }}
                >Welcome Back</Text>
            </TouchableOpacity>
        )
    }

    function renderLogo() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 6,
                    height: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: SIZES.padding * 3
                }}
            >
                <Image
                    source={images.wallieLogo}
                    style={{
                        width: "80%",
                       
                        resizeMode: 'contain',
                        borderRadius:10
                    }}
                />
            </View>
        )
    }

    function renderForm() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 3,
                    marginHorizontal: SIZES.padding * 3
                }}
            >

                <View
                    style={{ marginTop: SIZES.padding * 3 }}
                >
                    <Text
                        style={{ color: COLORS.lightGreen }}
                    >Email ID</Text>
                    <TextInput
                        style={{
                            marginVertical: SIZES.padding,
                            borderBottomColor: COLORS.white,
                            borderBottomWidth: 1,
                            height: 40,
                            color: COLORS.white,
                           
                        }}
                        placeholder="Enter Email ID"
                        placeholderTextColor={COLORS.white}
                        selectionColor={COLORS.white}
                        onChangeText={(e) => setEmail(e)}
                        value={email}
                    />
                </View>

              

                {/* Password */}

                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{ color: COLORS.lightGreen }}>Password</Text>

                    <TextInput
                        style={{
                            color: COLORS.white,
                            marginVertical: SIZES.padding,
                            borderBottomColor: COLORS.white,
                            borderBottomWidth: 1,
                            height: 40,
                            color: COLORS.white,
                            
                        }}
                        placeholder="Enter Password"
                        placeholderTextColor={COLORS.white}
                        selectionColor={COLORS.white}
                        secureTextEntry={!showPassword}
                        onChangeText={(e) => setPassword(e)}
                        value={password}
                    />
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            right: 0,
                            bottom: 10,
                            height: 30,
                            width: 30
                        }}

                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <Image
                            source={showPassword ? icons.disable_eye : icons.eye}
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: COLORS.white
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderButton() {
        return (
            <View style={{ margin: SIZES.padding * 3 }}>
                <TouchableOpacity
                    style={{
                        height: 60,
                        backgroundColor: COLORS.black,
                        borderRadius: SIZES.radius / 1.5,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => handleLogin()}
                >
                    <Text style={{ color: COLORS.white }}>Continue</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? "padding" : null}
            style={{ flex: 1 }}>
            <LinearGradient
                colors={[COLORS.lime, COLORS.emerald]}
                style={{ flex: 1 }}
            >

                {renderHeader()}
                {renderLogo()}
                {renderForm()}
                {renderButton()}
                {showAnimation ? <PopUP style={styles.popup} err="Please try again Login failed" /> : <></>}

                {showAnimationSus ? <PopUP style={styles.popup} err="Login Success" /> : <></>}
            </LinearGradient>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    popup:{
        justifyContent:'center',
        alignItems: 'center',
        flex:1,
        marginLeft:20   
    }
})

export default Login;
