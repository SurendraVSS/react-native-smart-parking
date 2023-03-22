import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Button } from 'react-native';
import { db } from '../../firebaseConfig';
import {
    ref,
    onValue,
    push,
    update,
    remove
} from 'firebase/database';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from "../components/Card"
const Home = ({navigation}) => {
    const [ledData, setLedData] = useState();
    useEffect(() => {
        return onValue(ref(db), querySnapShot => {
            let data = querySnapShot.val() || {};
           
            setLedData(data);
        });
    }, []);
    return (
        <SafeAreaView>
            <ScrollView>
            <View style={styles.container}>          
                <Card style={styles.card}>
                    <Text style={styles.sectionTitle}>Parking Slot 1</Text>
                        {ledData?.value == 0 ? <View style={{ backgroundColor: 'blue', marginTop: 30, borderRadius: 20 }}>
                            <Button style={styles.sectionTitleBtn} title="Book Paking Slot" color="#fff" onPress={() => navigation.navigate('Payment')}></Button>
                        </View> : <Text style={styles.sectionTitle}>Slot Booked</Text>}
                </Card>

                <Card style={styles.card}>
                        <Text style={styles.sectionTitle}>Parking Slot 2</Text>
                  

                        {ledData?.value2 == 0 ? <View style={{ backgroundColor: 'blue', marginTop: 30, borderRadius: 20 }}>
                            <Button style={styles.sectionTitleBtn} title="Book Paking Slot" color="#fff"></Button>
                        </View> : <Text style={styles.sectionTitleSlot}>Slot Booked</Text>}
                </Card>

                <Card style={styles.card}>
                        <Text style={styles.sectionTitle}>Parking Slot 3</Text>

                        {ledData?.value3 == 0 ? <View style={{ backgroundColor: 'blue', marginTop: 30, borderRadius: 20 }}>
                            <Button style={styles.sectionTitleBtn} title="Book Paking Slot" color="#fff"></Button>
                        </View> : <Text style={styles.sectionTitle}>Slot Booked</Text>}
                </Card>

                <Card style={styles.card}>
                        <Text style={styles.sectionTitle}>Parking Slot 4</Text>

                        {ledData?.value4 == 0 ? <View style={{ backgroundColor: 'blue', marginTop: 30, borderRadius: 20 }}>
                            <Button style={styles.sectionTitleBtn} title="Book Paking Slot" color="#fff"></Button>
                        </View> : <Text style={styles.sectionTitle}>Slot Booked</Text>}
                </Card>

                <Card style={styles.card}>
                        <Text style={styles.sectionTitle}>Parking Slot 5</Text>
                   
                        {ledData?.value5 == 0 ? <View style={{ backgroundColor: 'blue', marginTop: 30, borderRadius: 20 }}>
                            <Button style={styles.sectionTitleBtn} title="Book Paking Slot" color="#fff"></Button>
                        </View> : <Text style={styles.sectionTitle}>Slot Booked</Text>}
                </Card>
                    <Card style={styles.card}>
                        <Text style={styles.sectionTitle}>Parking Slot 6</Text>
                        {ledData?.value6 == 0 ? <View style={{backgroundColor:'blue',marginTop:30,borderRadius:20}}>
                            <Button style={styles.sectionTitleBtn} title="Book Paking Slot" color="#fff"></Button> 
                        </View>: <Text style={styles.sectionTitle}>Slot Booked</Text>}
                        
                    </Card>

            </View>
        </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        
        margin: 16,
        alignItems: 'center', // Centered horizontally
        justifyContent:'center',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#fff',
    },
    card: {
        height: 200,
        width: '80%',
        backgroundColor: '#f18484',
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
       margin:20
    },
    sectionTitleBtn:{
        fontSize: 24,
        fontWeight: '600',
        backgroundColor:'red'
    },
    sectionTitleSlot:{
        fontSize: 24,
        fontWeight: '600',
        color: '#fff',
        marginTop:20
    }
})

export default Home;
