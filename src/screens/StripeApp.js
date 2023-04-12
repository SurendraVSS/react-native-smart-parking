import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert, Image, ScrollView } from "react-native";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
import { COLORS, SIZES, icons, images } from "../constants";

//ADD localhost address of your server
const API_URL = "http://43.207.189.44:3009";

const StripeApp = props => {
    const [email, setEmail] = useState();
    const [cardDetails, setCardDetails] = useState();
    const { confirmPayment, loading } = useConfirmPayment();

    const fetchPaymentIntentClientSecret = async () => {
        const response = await fetch(`${API_URL}/create-payment-intent`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const { clientSecret, error } = await response.json();
        return { clientSecret, error };
    };

    const handlePayPress = async () => {
        //1.Gather the customer's billing information (e.g., email)
        if (!cardDetails?.complete || !email) {
            Alert.alert("Please enter Complete card details and Email");
            return;
        }
        const billingDetails = {
            email: email,
        };
        //2.Fetch the intent client secret from the backend
        try {
            const { clientSecret, error } = await fetchPaymentIntentClientSecret();
            //2. confirm the payment
            if (error) {
                console.log("Unable to process payment");
            } else {
                const { paymentIntent, error } = await confirmPayment(clientSecret, {
                    type: "Card",
                    billingDetails: billingDetails,
                });
                if (error) {
                    alert(`Payment Confirmation Error ${error.message}`);
                } else if (paymentIntent) {
                    alert("Payment Successful");
                    console.log("Payment successful ", paymentIntent);
                }
            }
        } catch (e) {
            console.log(e);
        }
        //3.Confirm the payment with the card details
    };

    return (
        <ScrollView>

       
        <View style={styles.container}>
        <View>
                    <Text style={{ fontSize: 20, textAlign: 'center', margin: 20 }}>Parking spot for per Day is only Rs 80/-</Text>
        </View>

            <View>
                <Text style={{fontSize:20,textAlign:'center',margin:20}}>Pay Via scanner</Text>
            </View>

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
}}>
                <Image
                    source={images.payment}
                    style={{
                        width: "80%",
justifyContent:'center',
alignItems: 'center',
                        resizeMode: 'contain',
                        borderRadius: 10,
                        marginBottom:30
                    }}
                />
            </View>
                <View><Text style={{ fontSize: 20, textAlign: 'center', margin: 20 }}>Pay Via Card</Text></View>
            <TextInput
                autoCapitalize="none"
                placeholder="E-mail"
                keyboardType="email-address"
                onChange={value => setEmail(value.nativeEvent.text)}
                style={styles.input}
            />
            <CardField
                postalCodeEnabled={true}
                placeholder={{
                    number: "4242 4242 4242 4242",
                }}
                cardStyle={styles.card}
                style={styles.cardContainer}
                onCardChange={cardDetails => {
                    setCardDetails(cardDetails);
                }}
            />
            <Button onPress={handlePayPress} title="Pay" disabled={loading} />
        </View>
        </ScrollView>
    );
};
export default StripeApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:50,
        margin: 20,
    },
    input: {
        backgroundColor: "#efefefef",

        borderRadius: 8,
        fontSize: 20,
        height: 50,
        padding: 10,
    },
    card: {
        backgroundColor: "#efefefef",
    },
    cardContainer: {
        height: 50,
        marginVertical: 30,
    },
}); 