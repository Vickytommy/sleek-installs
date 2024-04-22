import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import { useRouter } from 'expo-router';
import React, { forwardRef, useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  snap: number;
  children: React.ReactNode;
}

type Ref = BottomSheetModal;

const SleekButtomSheet = forwardRef<Ref, Props>((props, ref) => {
    const snapPoints = useMemo(() => ['35%', '90%'], [])
    const renderBackdrop = useCallback(
      (props: any) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />,
      []
    )

    const router = useRouter();

    const handleCloseSheet = () => {
      router.push('/(tabs)/projects');
    }
  
  return (
    <BottomSheetModal 
      ref={ref} 
      // onDismiss={() => {router.push('/(tabs)/projects')}}
      snapPoints={snapPoints}
      index={props.snap}
      // detached={true}
      // bottomInset={76}
      backdropComponent={renderBackdrop}
      backgroundStyle={{
        flex: 1,
        backgroundColor: Colors.light.white,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
      }}
      // contentHeight={500}
      containerStyle={{
        // height: 500,
      }}
    >
      { props.children }
    </BottomSheetModal>
    
  );
})

export default SleekButtomSheet;



const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#efefef',
    // paddingHorizontal: 16
  },
  bottomSheetContainer: {
    marginHorizontal: 16
  },
  contentContainer: {
    // backgroundColor: 'black',
    flex: 1,
    // height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  }
})