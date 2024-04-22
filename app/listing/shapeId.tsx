import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import Animated, { SlideInDown, interpolate, useAnimatedRef, useAnimatedStyle, useScrollViewOffset } from 'react-native-reanimated';
import { defaultStyles } from '@/constants/Styles';
import Colors from '@/constants/Colors';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';

import listingData from '@/assets/data/pool-listings.json';

const IMG_HEIGHT = 400;
const { width } = Dimensions.get('window');

const Page = () => {
	const navigation = useNavigation();
    const { shapeId } = useLocalSearchParams<{ shapeId: string }>();

	console.log('this is it ', shapeId)

    return (
        <View style={styles.container}>

            <Animated.View style={defaultStyles.footer} entering={SlideInDown.delay(200)}>
                <TouchableOpacity style={defaultStyles.btn}>
                    <Text style={defaultStyles.btnText}>Select Product</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
}

export default Page;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    image: {
        height: IMG_HEIGHT,
        width,
    },
		bar: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			gap: 10
		},
		roundBtn: {
			width: 40,
			height: 40,
			borderRadius: 50,
			backgroundColor: 'white',
			alignItems: 'center',
			justifyContent: 'center',
			color: Colors.light.primary,
			borderWidth: StyleSheet.hairlineWidth
		},
		header: {
			paddingVertical: 24,
			height: 100,
			borderBottomColor: Colors.light.gray,
			borderWidth: StyleSheet.hairlineWidth,
			backgroundColor: Colors.light.white,
			// elevation: 4,
			// shadowColor: Colors.light.text,
			// shadowOpacity: .12,
			// shadowRadius: 8,
			// shadowOffset: {
			// 	width: 2,
			// 	height: 2
			// }
		}
})