import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AddTripScreen from '../screens/AddTripScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import TripExpensesScreen from '../screens/TripExpensesScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { setUser } from '../redux/slices/user';
import { auth } from '../config/firebase';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const [initializing, setInitializing] = useState(true);
  const {user} = useSelector(state => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, (user) => {
      console.log('got user: ', user);
      dispatch(setUser(user));
      if (initializing) setInitializing(false);
    });

    // unsubscribe on unmount
    return subscriber;
  }, [dispatch, initializing]);
  
  if (initializing) {
    return null; // or a loading spinner
  }
  

  if(user){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
          <Stack.Screen options={{headerShown: false}} name="AddTrip" component={AddTripScreen} />
          <Stack.Screen options={{headerShown: false}} name="AddExpense" component={AddExpenseScreen} />
          <Stack.Screen options={{headerShown: false}} name="TripExpenses" component={TripExpensesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen options={{headerShown: false}} name="SignIn" component={SignInScreen} />
          <Stack.Screen options={{headerShown: false}} name="SignUp" component={SignUpScreen} />
          <Stack.Screen options={{headerShown: false}} name="Welcome" component={WelcomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  
}