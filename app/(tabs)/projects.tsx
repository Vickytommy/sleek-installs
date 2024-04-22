import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { defaultStyles } from '@/constants/Styles';
import SleekButtomSheet from '@/components/SleekBottomSheet';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useRouter } from 'expo-router';

const Projects = () => {
  const router = useRouter();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  return (
    <View style={[defaultStyles.container, styles.container]}>
      {/* <Text style={styles.text}>No Projects Yet!</Text> */}
      <Text style={styles.text}>Projects Screen</Text>
      {/* <SleekButtomSheet ref={bottomSheetModalRef} /> */}
    </View>
  )
}

export default Projects;


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef'
  },
  text: {
    fontFamily: 'mon-sb',
    fontSize: 16
  }
})