import React from 'react';
import { ImageBackground, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import logo from '../assets/R1.jpg';
var myBackground = require('../assets/R2.png');

const HomePage = (props) => {

    return (
        <View style={styles.container} >
            <ImageBackground source={myBackground} style={styles.image}>
            <View style={styles.viewStyle}>
                <Image source={logo} style={styles.logo} />
                <Text>Welcome!</Text>
                <Text> To change the status of an elevator: </Text>
                <Text> Choose the list and select the elevator </Text>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('ActiveElevators')}
                    style={styles.button1}>
                    <Text style={styles.buttonText}>ACTIVE ELEVATORS</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => props.navigation.navigate('InactiveElevators')}
                    style={styles.button2}>
                    <Text style={styles.buttonText}>INACTIVE ELEVATORS</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => props.navigation.replace('Login')}
                    style={styles.button3}>
                    <Text style={styles.buttonText}>LOG OUT</Text>
                </TouchableOpacity>
                
            </View>
            </ImageBackground>
        </View >
    )
}

const styles = {
    container: {
        flex: 1,
        //marginTop: Platform.OS === "android" ? 24 : 0
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    viewStyle: {
        flex: 1,
        marginTop: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 305,
        height: 159,
        resizeMode: "contain",
        marginBottom: 30,
    },
    button1: {
        backgroundColor: "#0000ff",
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 7,
        paddingBottom: 7,
        borderRadius: 100,
        marginTop: 20,
    },
    button2: {
        backgroundColor: "#ff0000",
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 7,
        paddingBottom: 7,
        borderRadius: 100,
        marginTop: 20,
    },
    button3: {
        backgroundColor: "#01579b",
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 7,
        paddingBottom: 7,
        borderRadius: 100,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 20
    }
}
export default HomePage;