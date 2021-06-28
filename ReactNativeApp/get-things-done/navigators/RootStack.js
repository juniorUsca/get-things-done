import React from 'react';

//colors
import { Colors } from './../components/styles';
const { darkLight, brand, primary, tertiary, secondary } = Colors;

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Welcome from './../screens/Welcome';
import Inbox from './../screens/Inbox';

const Stack = createStackNavigator();

// credentials context
import { CredentialsContext } from './../components/CredentialsContext';

const RootStack = () => {
  return (
    <CredentialsContext.Consumer>
      {({ storedCredentials }) => (
        <NavigationContainer style={{ backgroundColor: 'red' }}>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: brand,
              }, headerTitleAlign:'center'
            }}
          >
             {storedCredentials ? (
              <>
              <Stack.Screen
                options={{
                  headerTintColor: primary,
                }}
                name="Welcome"
                component={Welcome}
              />
              <Stack.Screen
                options={{
                  headerTitle:"Inbox",
                  headerTintColor: 'black',
                  headerTitleStyle:{
                      fontWeight:'bold'
                  },
                  headerPressColorAndroid: brand,
                }}
                name="Inbox"
                component={Inbox}
              />
              </>
              
            ) : (
              <>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                
              </>
               )}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </CredentialsContext.Consumer>
  );
};

export default RootStack;
