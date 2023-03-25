import React, { useState } from 'react';
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
import { COLORS, SIZES, icons, images } from "../constants";
import axios from "axios"
const Register = ({navigation}) => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleLogin() {
        
        axios.post('http://54.199.251.177:3009/api/register', {
            "name": name,
            "address": address,
            "email": email,
            "password": password
        })
            .then(function (response) {
                if (response.status === 201) {
                    navigation.navigate('Login')    
                }
            })
            .catch(function (error) {
                Alert.alert("Please try again registration failed")
            }).then(()=>{
                setName("")
                setAddress("")
                setEmail("")
                setPassword("")
            })
    }
    const [showPassword, setShowPassword] = useState(false);
    function renderHeader() {
        return (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: SIZES.padding * 6,
                    paddingHorizontal: SIZES.padding * 3
                }}
                onPress={() => navigation.navigate("HmnReg")}
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
                    style={{ marginLeft: SIZES.padding, color: COLORS.white,fontSize:20 }}
                >Create Account</Text>
            </TouchableOpacity>
        )
    }

    function renderLogo() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 3,
                    height: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: SIZES.padding * 3
                }}
            >
                <Image
                    source={images.wallieLogo2}
                    style={{
                        width: "80%",
                        resizeMode: 'contain',

                    }}
                />
            </View>
        )
    }

    function renderForm() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 5,
                    marginHorizontal: SIZES.padding * 3
                }}
            >


                <View
                    style={{ marginTop: SIZES.padding }}
                >
                    <Text
                        style={{ color: COLORS.lightGreen }}
                    >Full Name</Text>
                    <TextInput
                        style={{
                            marginVertical: SIZES.padding,
                            borderBottomColor: COLORS.white,
                            borderBottomWidth: 1,
                            height: 40,
                            color: COLORS.white
                        }}
                        onChangeText={(e) => setName(e)}
                        value={name}
                        placeholder="Enter Full Name"
                        placeholderTextColor={COLORS.white}
                        selectionColor={COLORS.white}
                    />
                </View>
                <View
                    style={{ marginTop: SIZES.padding }}
                >
                    <Text
                        style={{ color: COLORS.lightGreen}}
                    >Address</Text>
                    <TextInput
                        style={{
                            marginVertical: SIZES.padding,
                            borderBottomColor: COLORS.white,
                            borderBottomWidth: 1,
                            height: 40,
                            color: COLORS.white,
                          
                        }}
                        placeholder="Enter Full Address"
                        placeholderTextColor={COLORS.white}
                        selectionColor={COLORS.white}
                        onChangeText={(e) => setAddress(e)}
                        value={address}
                    />
                </View>

                <View
                    style={{ marginTop: SIZES.padding }}
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
                            color: COLORS.white
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
                            color: COLORS.white
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
                    <Text style={{ color: COLORS.white}}>Continue</Text>
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
                <ScrollView>
                    {renderLogo()}
                    {renderForm()}
                    {renderButton()}
                </ScrollView>
              

            </LinearGradient>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({})

export default Register;
