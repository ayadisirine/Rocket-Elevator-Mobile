import React, { useState } from 'react';
import { ImageBackground, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import logo from '../assets/R1.jpg';
import axios from 'axios';
var myBackground = require('../assets/R2.png');

const Login = (props) => {


    const [email, getEmail] = useState('');


    const verifyEmail = () => {
        let employee_email = email;
        return axios.get(`https://localhost/api/User/${employee_email}`)
            .then(function (response) {
                const statusCode = response.status;
                if (statusCode == 200) {
                    props.navigation.replace('Home');
                }
            })
            .catch(function (error) {
                
                console.log(`This ${employee_email} is incorrect.`);
                alert(`${employee_email} is unavailable, please insert a valide email. Thank you!`);
            })
            .then(function () {
             
            });
    }

    return (
        <View style={styles.container} >
            <ImageBackground source={myBackground} style={styles.image}>
                <View style={styles.viewStyle}>
                    <Image source={logo} style={styles.logo} />
                    <Text style={styles.welcome}>Welcome to Rocket Elevators!</Text>
                    <Text style={styles.login}>Insert your email to login:</Text>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        placeholder='use: admin@example.com(for testing)'
                        required
                        onChangeText={(e) => getEmail(e.target.value)}
                        onChangeText={(value) => {
                            getEmail(value)
                        }}
                        value={email}
                    />
                    <TouchableOpacity
                        onPress={() => verifyEmail()}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Enter</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View >
    )
}

const styles = {
    container: {
        flex: 1,
       // marginTop: Platform.OS === "android" ? 24 : 0
    },
    instructions: {
        color: '#333333',
        marginBottom: 5,
        textAlign: 'center',
      },
      welcome: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        color: 'Red',
      },
    viewStyle: {
        flex: 1,
        marginTop: 0,
        alignItems: 'center',
        
    },
    login: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    input: {
        borderWidth: 2,
        borderColor: '#b71c1c',
        padding: 8,
        margin: 10,
        width: 200,
        marginBottom: 30,
        color: 'white'
    },
    logo: {
        width: 305,
        height: 159,
        resizeMode: "contain",
        marginBottom: 30,
    },
    button: {
        backgroundColor: "#01579b",
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 7,
        paddingBottom: 7,
        borderRadius: 100,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    onchange: {
        color: "red",
    },
    testtest: {
        color: "white",
    }
}
export default Login;