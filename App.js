import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image,  StyleSheet, Text, Button ,View } from 'react-native';
 

const Stack = createStackNavigator();

const MyStack = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Rocket Elevators' }}
        />
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
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
  );
};



const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};



const styles = StyleSheet.create({
  logo: {
    width: 305,
    height: 100,
    marginBottom: 20,
  },
});


export default MyStack;