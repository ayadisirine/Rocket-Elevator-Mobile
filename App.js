import * as React from 'react';
import { Button, View, Text, ImageBackground, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
var myBackground = require('./assets/R1.jpg');
var logo = require('./assets/R2.png');

function LoginScreen({ navigation }) {
  return(
  <View style={styles.container} >
    <ImageBackground source={myBackground} style={styles.image}>
      <View style={styles.viewStyle}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.welcome}>Welcome to Rocket Elevators!</Text>
           <Text style={styles.login}>Insert your email to login:</Text>

          <label>
            <p>Email</p>
            <input type="text" />
          </label>

          <Button
            title="Login"
            onPress={() => navigation.navigate('Home')}
          />
      </View>
    </ImageBackground>
  </View >)
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
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
export default App;
