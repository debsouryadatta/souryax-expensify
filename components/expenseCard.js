import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {categoryBG, colors} from '../theme';
import {expensesRef} from '../config/firebase';
import {deleteDoc, doc} from 'firebase/firestore';
import {TrashIcon} from 'react-native-heroicons/outline';

export default function ExpenseCard({item, fetchExpenses}) {
  const deleteExpense = async id => {
    await deleteDoc(doc(expensesRef, id));
    fetchExpenses();
  };

  return (
    <View>
      <View
        style={{backgroundColor: categoryBG[item.category]}}
        className="flex-row justify-between items-center p-3 px-5 mb-3 rounded-2xl">
        <View>
          <Text className={`text-black font-bold`}>{item.title}</Text>
          <Text className={`text-black text-xs`}>{item.category}</Text>
        </View>
        <View className="flex-row items-center">
          <View>
            <Text className="text-black">${item.amount}</Text>
          </View>
          <TouchableOpacity
            onPress={() => deleteExpense(item.id)}
            className="ml-2">
            <TrashIcon size="20" color={colors.button} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
