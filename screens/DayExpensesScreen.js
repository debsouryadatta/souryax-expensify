import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import ScreenWrapper from '../components/screenWrapper';
import {colors} from '../theme';
import randomImage from '../assets/images/randomImage';
import EmptyList from '../components/EmptyList';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import BackButton from '../components/BackButton';
import ExpenseCard from '../components/expenseCard';
import {getDocs, query, where} from 'firebase/firestore';
import {expensesRef} from '../config/firebase';
import { month } from '../constants';
const items = [
  {
    id: 1,
    title: 'ate sandwitch',
    amount: 4,
    category: 'food',
  },
  {
    id: 2,
    title: 'bought a jacket',
    amount: 50,
    category: 'shopping',
  },
  {
    id: 3,
    title: 'watched a movie',
    amount: 100,
    category: 'entertainment',
  },
];

export default function DayExpensesScreen(props) {
  const params = props.route.params;
  console.log(params);
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const q = query(expensesRef, where('dayId', '==', params.id));
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach(doc => {
      // console.log('documement: ',doc.data());
      data.push({...doc.data(), id: doc.id});
    });
    setExpenses(data);
  };

  useEffect(() => {
    if (isFocused) fetchExpenses();
  }, [isFocused]);

  return (
    <ScreenWrapper className="flex-1">
      <View className="px-4">
        <View className="relative mt-5">
          <View className="absolute top-2 left-0 z-10">
            <BackButton />
          </View>
          <View>
            <Text className={`text-black text-xl font-bold text-center`}>
              Day {params.day}
            </Text>
            <Text className={`text-black text-xs text-center`}>
              {month[params.month-1]}
            </Text>
          </View>
        </View>
        <View className="flex-row justify-center items-center rounded-xl mb-4">
          <Image
            source={require('../assets/images/7.png')}
            className="w-80 h-80"
          />
        </View>
        <View className=" space-y-3">
          <View className="flex-row justify-between items-center">
            <Text className={`text-black font-bold text-xl`}>
              Expenses
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('AddExpense', {dayId: params.id})
              }
              className="p-2 px-3 bg-white border border-gray-200 rounded-full">
              <Text className="text-black">Add Expense</Text>
            </TouchableOpacity>
          </View>
          <View style={{height: 430}}>
            <FlatList
              data={expenses}
              ListEmptyComponent={
                <EmptyList message={"You haven't recorded any expenses yet"} />
              }
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              className="mx-1"
              scrollEnabled={false}
              renderItem={({item}) => {
                return <ExpenseCard item={item} fetchExpenses={fetchExpenses}/>;
              }}
            />
          </View>
        </View>
      </View>
      <Text></Text>
    </ScreenWrapper>
  );
}
