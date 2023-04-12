import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Animated, { FadeIn, FadeOutUp } from 'react-native-reanimated';

const PopUP = ({err}) => {
    return (
        <View style={{
            justifyContent:'center',
            alignItems:'center',
        }}>
            <Animated.View
                entering={FadeIn}
                exiting={FadeOutUp}
                style={{
                    top: 70,
                    backgroundColor: "#20639B",
                    width: '90%',
                    borderRadius: 5,
                    padding: 20,
                    position: 'absolute',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    shadowColor: "#003049",
                    shadowOpacity: 0.4,
                    shadowRadius: 2,
                    shadowOffset: { width: 0, height: 1 },
                    elevation: 2
                }}
            >
                <Icons name="info" size={30} color="#F6F4F4" />
                <View>
                    <Text
                        style={{
                            color: "#F6F4F4",
                            fontWeight: 'bold',
                            marginLeft: 10,
                            fontSize: 16
                        }}

                    >Info</Text>
                    <Text
                        style={{
                            color: "#F6F4F4",
                            fontWeight: '500',
                            marginLeft: 10,
                            fontSize: 14
                        }}
                    >{err}</Text>
                </View>
            </Animated.View>
        </View>
       
    );
}

const styles = StyleSheet.create({})

export default PopUP;
