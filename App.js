import * as React from 'react';
import { Button, View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ListItem, Avatar } from 'react-native-elements'

const list = [
  {
    name: 'Elevator 1',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Brand 1'
  },
  {
    name: 'Elevator 2',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Brand 2'
  }

]

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

          <label style={styles.input}>
            
            
            <input type="text" />
          </label>




          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>


      </View>
    </ImageBackground>
  </View >)
}

function DetailsScreen({ navigation }) {
  return (

    
    <View style={styles.container} >
    <ImageBackground source={myBackground} style={styles.image}>
      <View style={styles.viewStyle}>

      <Text>Details Screen</Text>
 
    </View>
    </ImageBackground>
  </View >
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container} >
    <ImageBackground source={myBackground} style={styles.image}>
      <View style={styles.viewStyle}>
      {
        list.map((l, i) => (
          <ListItem key={i} bottomDivider onPress={() => navigation.navigate('Details')}>
            <Avatar source={{uri: l.avatar_url}} />
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))
      }
    </View>
    </ImageBackground>
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
        <Stack.Screen name="Details" component={DetailsScreen} />
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
