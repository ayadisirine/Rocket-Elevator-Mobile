import * as React from 'react';
import {  FlatList, View, Text, TextInput, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ListItem, Avatar } from 'react-native-elements'
import { useState } from 'react';
import axios from 'axios';

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
  const [email, setEmail] = useState('');
  return(
  <View style={styles.container} >
    <ImageBackground source={myBackground} style={styles.image}>
      <View style={styles.viewStyle}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.welcome}>Welcome to Rocket Elevators!</Text>
           <Text style={styles.login}>Insert your email to login:</Text>

          <label style={styles.input}>
            
            
          <TextInput
                        style={styles.input}

                        onChangeText={(value) => {
                            setEmail(value)
                        }}
                        value={email}
                    />
          </label>

          <TouchableOpacity
            onPress={() => {
               
              //navigation.navigate('Home');  
              console.log("before calling checkMail : " + email);
              

              var myHeaders = new Headers();
              myHeaders.append("Content-Type", "application/json");
              
              
              var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow',
                mode: 'no-cors',
              };
              var url = "https://sirinerocketelevatorrestapi.azurewebsites.net/api/User/"+email;
              return axios.get(url)
              .then(function (response) {
                  const statusCode = response.status;
                  console.log("status : " + statusCode);
                  if (statusCode == 200) {
                    navigation.navigate('Home')
                  }
              })
              .catch(function (error) {
                  
                  console.log('This is user email is incorrect.');
                  alert('User email incorrect !!!!!!!');
              })
              .then(function () {
               
              });


            }} 
            style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>


      </View>
    </ImageBackground>
  </View >
  )
}






function HomeScreen({ navigation }) {


  const [elevators, setElevators] = useState([])


      axios.get('https://sirinerocketelevatorrestapi.azurewebsites.net/api/elevators/status/intervention')
          .then(response => {
              console.log(response.data)
              setElevators(response.data)
          })
          .catch(err => {
              console.log(err)
          })
  

  const StatusScreen = (id, status) => {
      props.navigation.navigate('Intervention', {
          elevatorID: id,
          elevatorStatus: status
      })
  };

  return (
    <View style={styles.container} >
    <ImageBackground source={myBackground} style={styles.image}>
      <View style={styles.viewStyle}>
      {
        elevators.map((l, i) => (
          <ListItem key={i} bottomDivider onPress={() => StatusScreen(l.id, l.status)}><Text style={styles.textStyle}> Elevator # {l.id} is "{l.status}"</Text>
            <Avatar source={{uri: l.avatar_url}} />
            <ListItem.Content>
              <ListItem.Title>{l.id}</ListItem.Title>
              
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
