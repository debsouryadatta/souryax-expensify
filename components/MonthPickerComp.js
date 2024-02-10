import { View, Text, TouchableOpacity } from 'react-native'
import React, { useCallback, useState } from 'react'
import MonthPicker from 'react-native-month-year-picker';
import { colors } from '../theme';
import { month } from '../constants';

export default function MonthPickerComp({date, setDate}) {
  // For month picker package
    const [show, setShow] = useState(false);

    const showPicker = useCallback(value => setShow(value), []);
  
    const onValueChange = useCallback(
      (event, newDate) => {
        const selectedDate = newDate || date;
  
        showPicker(false);
        setDate(selectedDate);
      },
      [date, showPicker],
    );
  // For month picker package

    const mon = month[date.getMonth()]; // January/ February/ March ...
    const year = date.getFullYear(); // 2022/ 2023/ 2024 ...

  return (
    <View className="flex flex-row justify-between items-center">
    <TouchableOpacity
          onPress={() => setShow(true)}
          className="shadow p-2 rounded-md mx-4 w-[40%]"
          style={{backgroundColor: colors.button}}>
          <Text className="text-center text-white text-lg font-bold">
            Select Month
          </Text>
        </TouchableOpacity>
        <View className="mx-4">
          <Text className={`text-black font-bold text-xl text-center`}>
            {mon} {year}
          </Text>
        </View>
      {show && (
        <MonthPicker
          onChange={onValueChange}
          value={date}
          minimumDate={new Date(2000, 0)}
          maximumDate={new Date(2050, 11)}
          locale="en"
        />
      )}
      <Text></Text>
    </View>
  )
}