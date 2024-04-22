import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TouchableNativeFeedback } from 'react-native';
import { useColorScheme } from '@/components/useColorScheme';
import { ColorScheme } from '@/constants/Types';
import React, { useRef, useState } from 'react';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { CategoryChanged } from '@/constants/Types';

const categories = [
	{
		name: 'FiberGlass',
	},
	{
		name: 'Vinyl Liner',
	},
	{
		name: 'Pool covers',
	},
	{
		name: 'Vinyl Liner',
	},
	{
		name: 'Inground',
	},
	{
		name: 'Night life',
	},
]

const ExploreHeader = ({ onCategoryChanged }: CategoryChanged) => {
	const scrollRef = useRef<ScrollView>(null);
	const colorScheme = useColorScheme();
	const styles = getStyles(colorScheme!);
	const itemsRef = useRef<Array<TouchableOpacity | null>>([]);
	const [activeIndex, setActiveIndex] = useState(0);

	const selectCategory = (index: number) => {
		const selected = itemsRef.current[index];
		setActiveIndex(index);

		selected?.measure((x) => {
			// console.log('the coord - ', x)
			scrollRef.current?.scrollTo({ x: x - 16, y: 0, animated: true })
		});
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
		onCategoryChanged(categories[index].name);
	}


	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<View style={styles.searchContainer}>
					<Link href={'/(modals)/login'} asChild>
						<TouchableOpacity style={styles.searchBtn}>
							<Ionicons name='search' size={24} />
							<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
								<Text style={{ fontFamily: 'mon-sb' }}>Pools . Installations</Text>
								{/* <Text style={{ fontFamily: 'mon' }}>Anywhere . Any week</Text> */}
							</View>
						</TouchableOpacity>
					</Link>

					<TouchableOpacity style={styles.filterBtn}>
						<Ionicons name='options-outline' size={24} />
					</TouchableOpacity>
				</View>

				<ScrollView 
					ref={scrollRef}
					horizontal 
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={{
						alignItems: 'center',
						gap: 30,
						paddingHorizontal: 16
					}}
				>
					{categories.map((item, index) => (
						<TouchableOpacity 
							key={index} 
							style={activeIndex === index ? styles.categoryBtnActive : styles.categoryBtn}
							ref={(el) => itemsRef.current[index] = el}
							onPress={(() => selectCategory(index))}
						>
							<Text 
								style={activeIndex === index ? styles.categoryTextActive : styles.categoryText}
							>{item.name}</Text>
						</TouchableOpacity>
					))}
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

export default ExploreHeader;


const getStyles = (colorScheme: ColorScheme) => {
	return StyleSheet.create({
		safeArea: {
			backgroundColor: Colors[colorScheme ?? 'light'].background,
			elevation: 4,
			shadowColor: Colors[colorScheme ?? 'light'].text,
			shadowOpacity: .12,
			shadowRadius: 8,
			shadowOffset: {
				width: 2,
				height: 2
			}
		},
		container: {
			backgroundColor: Colors[colorScheme ?? 'light'].background,
			// height: 100
			// padding: 20,
			// paddingTop: 25
		},
		searchContainer: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			paddingHorizontal: 24,
			paddingBottom: 10,
			gap: 10
		},
		filterBtn: {
			padding: 10,
			borderWidth: 1,
			borderColor: Colors[colorScheme ?? 'light'].gray,
			borderRadius: 24
		},
		searchBtn: {
			flexDirection: 'row',
			alignItems: 'center',
			gap: 10,
			borderColor: '#c2c2c2',
			borderWidth: StyleSheet.hairlineWidth,
			flex: 1,
			padding: 14,
			borderRadius: 30,
			backgroundColor: Colors[colorScheme ?? 'light'].background,

			elevation: 2,
			shadowColor: Colors[colorScheme ?? 'light'].text,
			shadowOpacity: .12,
			shadowRadius: 8,
			shadowOffset: {
				width: 1,
				height: 1
			}
		},
		categoryBtn: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			paddingVertical: 16
		},
		categoryBtnActive: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			paddingVertical: 16,
			borderBottomWidth: 3,
			borderBottomColor: Colors[colorScheme ?? 'light'].primary
		},
		categoryText: {
			fontFamily: 'mon-sb',
			color: Colors[colorScheme ?? 'light'].gray
		},
		categoryTextActive: {
			fontFamily: 'mon-sb',
			color: Colors[colorScheme ?? 'light'].primary,
		}
  })
}