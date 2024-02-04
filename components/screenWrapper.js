import {View, Text, StatusBar, Platform, ScrollView} from 'react-native';
import React from 'react';
// import { ScrollView } from 'react-native-virtualized-view'; -> This causes problemn in the Input component

export default function ScreenWrapper({children}) {
  // let statusBarHeight = StatusBar.currentHeight? StatusBar.currentHeight: (Platform.OS === 'ios'? 30: 0);
  let statusBarHeight = Platform.OS === 'ios' ? 30 : 0;
  return (
    <ScrollView
      style={{paddingTop: statusBarHeight}}
      showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
}
