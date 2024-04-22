import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { defaultStyles } from '@/constants/Styles';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
// import BottomSheet from '@/components/CustomBottomSheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { useFocusEffect, useNavigation, useRouter } from 'expo-router';
import Colors from '@/constants/Colors';
import SleekButtomSheet from '@/components/SleekBottomSheet';
import { getFocusedRouteNameFromRoute, useIsFocused, useRoute } from '@react-navigation/native';

const Add = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const route = useRoute();
  const routeName = route.name;
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const [sheetDissmissed, setSheetDismissed] = useState(false);

  const handleConnectToBuilder = () => {
    router.push('/(tabs)/account');
  }
  useLayoutEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('Route is ADD', routeName)
      handleOpenSheet();
      // router.push('/(tabs)/home')
    });

    return unsubscribe;
  }, [navigation])

  const handleOpenSheet = () => {
    bottomSheetModalRef.current?.present();
  }

  const handleCloseSheet = () => {
    bottomSheetModalRef.current?.dismiss();
    handleConnectToBuilder();
  }

  return (
    <View style={[defaultStyles.container, styles.container]}>
      <Text style={styles.text}>New Project Screen</Text>
    </View>
  )

  // return (
  //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //     <SleekButtomSheet snap={0} ref={bottomSheetModalRef}>
  //       <View style={styles.contentContainer}>
  //       <TouchableOpacity style={[defaultStyles.btn, { marginBottom: 10 }]} onPress={handleCloseSheet}>
  //           <Text style={defaultStyles.btnText}>New Project</Text>
  //       </TouchableOpacity>
  //       <TouchableOpacity style={defaultStyles.btn} onPress={handleCloseSheet}>
  //           <Text style={defaultStyles.btnText}>Speak to a Builder</Text>
  //       </TouchableOpacity>
  //     </View>
  //     </SleekButtomSheet>
  //     <View>
  //       <TouchableOpacity style={defaultStyles.btn} onPress={handleOpenSheet}>
  //         <Text style={defaultStyles.btnText}>New Project</Text>
  //       </TouchableOpacity>
  //     </View>
  //   </View>
  // )
}

export default Add;



const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
    paddingHorizontal: 16
  },
  text: {
    fontFamily: 'mon-sb',
    fontSize: 16
  },
  bottomSheetContainer: {
    marginHorizontal: 16
  },
  contentContainer: {
    // backgroundColor: 'black',
    // flex: 1,
    height: 320,
    justifyContent: 'center',
    alignItems: 'center',
  }
})