import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React, { useCallback, useState } from 'react';
import ScreenWrapper from '../components/screenWrapper';
import BackButton from '../components/BackButton';
import MonthPickerComp from '../components/MonthPickerComp';
import { getDaysInMonth } from '../constants';
import { useNavigation } from '@react-navigation/native';
import { addDoc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { daysRef } from '../config/firebase';
import { useSelector } from 'react-redux';


export default function DayHomeScreen() {
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const {user} = useSelector(state => state.user);

  const navigation = useNavigation();
  const monthArr = getDaysInMonth(date.getMonth(), date.getFullYear()); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ... 31]

  const handleClick = async (item)=> {
    const day = item;
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    console.log(item);
    const q = query(daysRef, where('userId', '==', user.uid), where('day', '==', day), where('month', '==', String(month)), where('year', '==', String(year)));
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach(doc => {
      data.push({...doc.data(), id: doc.id});
    });
    if (data.length == 0) {
      setLoading(true);
      let doc = await addDoc(daysRef, {
        day,
        month: String(month),
        year: String(year),
        userId: user.uid,
      })
      let docSnap = await getDoc(doc);
      data.push({...docSnap.data(), id: docSnap.id});
      setLoading(false);
      if(doc && doc.id){
        navigation.navigate('DayExpenses', data[0]);
      }
  } else {
    // show error
    navigation.navigate('DayExpenses', data[0])
  }
}

  return (
    <ScreenWrapper className="flex-1">
      <View className="relative mt-5">
        <View className="absolute top-0 left-4 z-10">
          <BackButton />
        </View>

        <Text className={`text-black text-xl font-bold text-center`}>
          Day Wise Track
        </Text>
      </View>

      <View className="flex-row justify-center items-center rounded-xl mx-4 mb-4 mt-4 ">
        <Image
          source={{
            uri: 'https://res.cloudinary.com/diyxwdtjd/image/upload/v1707203267/projects/Firefly_Please_give_me_an_image_to_show_on_home_screen_this_app_is_for_tracking_work_daily_73779_1_ljm2ya.jpg',
          }}
          className="w-full h-60 rounded-xl"
        />
      </View>

      <MonthPickerComp date={date} setDate={setDate} />

      <View>
          <FlatList
            data={monthArr}
            numColumns={2}
            keyExtractor={item => item}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{
              justifyContent: 'space-between',
            }}
            className="mx-4 mt-6"
            scrollEnabled={false}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={()=> handleClick(item)}
                  className="py-[10%] px-[15%] mx-4 rounded-2xl mb-3 shadow-sm bg-emerald-300">
                  <View>
                    {/* <Image source={randomImage()} className="w-36 h-36 mb-2" /> */}
                    <Text className={`text-black font-bold text-2xl`}>
                        {item.length === 1 ? `0${item}` : item}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text></Text>
    </ScreenWrapper>
  );
}
