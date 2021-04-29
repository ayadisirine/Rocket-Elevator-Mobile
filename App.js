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



///////////////////////////////////////////
//// - HOME - /////////////////////////////

function HomeScreen({ navigation }) {
  //usestate to fill the list of elevators
  const [elevators, setElevators] = useState([])
  //axios to call rest api to get the list of elevators which status is intervention 
  axios.get('https://sirinerocketelevatorrestapi.azurewebsites.net/api/elevators/status/intervention')
    .then(response => {
      console.log(response.data)
      setElevators(response.data)
    })
    .catch(err => {
      console.log(err)
    })
  //Prepare html to show 
  return (
    <View style={styles.container} >
      <ImageBackground source={myBackground} style={styles.image}>
        <View style={styles.viewStyle}>
        {
        elevators.map((l, i) =>  (
            <ListItem key={i} bottomDivider onPress={() => {
              navigation.navigate(
                'Status',{id: l.id,status: l.status});
            }}>
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
      

/////////////////////////////////////////////////////////////////////////


function StatusScreen  ({ route, navigation }) {
  const { id, status } = route.params;
  //for change status 
  return (

    <View style={styles.container} >
      <ImageBackground source={myBackground} style={styles.image}>
        <View style={styles.viewStyle}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.textStyle}>
              ELEVATOR # {id}
          </Text>
          <Text style={styles.currently}>
              IS AN INTERVENTION STATUS
          </Text>
          <TouchableOpacity style={(status=="intervention") ? styles.greenButton : styles.redButton} onPress={() => changeStatus(id, status)}>
          <Text style={styles.instruction}>
              Press the button to change to "active "
            </Text>
          
          
          
          </TouchableOpacity>



            </View>
        </ImageBackground>
    </View >
    )
  }


function changeStatus ( id, status) { 
  console.log("change status ") ;
    const url = "https://sirinerocketelevatorrestapi.azurewebsites.net/api/elevators/" + id ;
    return axios
      .put(url , { status: 'active' })
      .then(function (response) {
        if (response.status == 200) {
          console.log("Server response : " + response);
          let msg = "Elevator" + id + "has successufuly changed to active :) ";
          alert(msg);
          setStatus(true);
        }
      })
      .catch(function (error) {
        console.log("Erreur : " + error);
      });
    }
  


  



/////////////////////////////////////////////////////////////////////////////////////////////////////////
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Status" component={StatusScreen} />
        
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
      color: 'black'
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
      color: "blue",
  }
}
export default App;
