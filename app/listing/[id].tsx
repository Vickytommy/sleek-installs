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
    const { id } = useLocalSearchParams<{ id: string }>();
    const listing = (listingData as any[]).find((item) => item.id === id);
		const scrollRef = useAnimatedRef<Animated.ScrollView>();
		const scrollOffset = useScrollViewOffset(scrollRef);

		const saveListing = async () => {

		}

		useLayoutEffect(() => {
			navigation.setOptions({
				headerStyle: {
				},
				headerBackground: () => (
					<Animated.View style={[headerAnimatedSytle, styles.header]} />
				),
				headerLeft: () => (
					<TouchableOpacity style={styles.roundBtn} onPress={() => navigation.goBack()}>
						<Entypo name='chevron-left' size={24} color={Colors.light.primary} />
					</TouchableOpacity>
				),
				headerRight: () => (
					<View style={styles.bar}>
						<TouchableOpacity style={styles.roundBtn} onPress={(saveListing)}>
							<Entypo name='heart-outlined' size={24} />
						</TouchableOpacity>
						<TouchableOpacity style={styles.roundBtn} onPress={saveListing}>
							<Entypo name='heart-outlined' size={24} color={Colors.light.primary} />
						</TouchableOpacity>
					</View>
				)
			})
		}, [])

		const imageAnimatedStyle = useAnimatedStyle(() => {
			return {
				transform: [
					{
						translateY: interpolate(
							scrollOffset.value,
							[-IMG_HEIGHT, 0, IMG_HEIGHT],
							[-IMG_HEIGHT / 4, 0, IMG_HEIGHT * .75]
						)
					},
					{
						scale: interpolate(
							scrollOffset.value, 
							[-IMG_HEIGHT, 0, IMG_HEIGHT], 
							[2, 1, 1]
						)
					}
				]
			}
		})

		const headerAnimatedSytle = useAnimatedStyle(() => {
			return {
				opacity: interpolate(
					scrollOffset.value, 
					[0, IMG_HEIGHT / 1.5],
					[0, 1]
				)
			}
		})

    return (
        <View style={styles.container}>
            <Animated.ScrollView
							ref={scrollRef}
							scrollEventThrottle={16}
							contentContainerStyle={{
								paddingBottom: 100,
							}}
						>
							<Animated.Image style={[styles.image, imageAnimatedStyle]} source={(require("@/assets/images/habi.jpg"))} />
							
							<View style={{ backgroundColor: 'white', height: '150%'}}>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
								<Text>The ID - {id}</Text>
							</View>
						</Animated.ScrollView>


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