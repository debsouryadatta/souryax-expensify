import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/screenWrapper';
import { colors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function HomeScreen() {

  const navigation = useNavigation();
  const handleLogout = async ()=> {
    await signOut(auth);
    navigation.navigate('Welcome');
  }

  return (
    <ScreenWrapper className="flex-1">
      <View className="flex-row justify-between items-center p-4">
        <Text className={`text-black font-bold text-3xl shadow-sm`}>
          Expensify
        </Text>
        <TouchableOpacity
          onPress={handleLogout}
          className="p-2 px-3 bg-white border border-gray-200 rounded-full">
          <Text className="text-black">Logout</Text>
        </TouchableOpacity>
      </View>

      <View className="mt-[55%] mx-[5%]">
      <TouchableOpacity
            onPress={() => navigation.navigate('DayHome')}
            className="shadow p-5 rounded-md mb-5"
            style={{backgroundColor: colors.button}}>
            <Text className="text-center text-white text-lg font-bold">
              Day Wise Track
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('TripHome')}
            className="shadow p-5 rounded-md mb-5"
            style={{backgroundColor: colors.button}}>
            <Text className="text-center text-white text-lg font-bold">
              Trip Wise Track
            </Text>
          </TouchableOpacity>
      </View>
      <Text></Text>
    </ScreenWrapper>
  );
}
