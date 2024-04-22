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


interface Props {
    onCategoryChanged: CategoryChanged,
    categories: string[],
}

const CategoryHeader = (props: Props) => {
    const { onCategoryChanged, categories } = props;
	const scrollRef = useRef<ScrollView>(null);
	const colorScheme = useColorScheme();
	const styles = getStyles(colorScheme!);
	const itemsRef = useRef<Array<TouchableOpacity | null>>([]);
	const [activeIndex, setActiveIndex] = useState(0);

	const selectCategory = (index: number) => {
		const selected = itemsRef.current[index];
		setActiveIndex(index);

		selected?.measureInWindow((x) => {
			// console.log('the coord - ', x)
			scrollRef.current?.scrollTo({ x: x - 16, y: 0, animated: true })
		});
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
		onCategoryChanged(categories[index]);
	}


	return (
		<View style={styles.container}>
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
                        >{item}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
	);
}

export default CategoryHeader;


const getStyles = (colorScheme: ColorScheme) => {
	return StyleSheet.create({
		container: {
			backgroundColor: Colors[colorScheme ?? 'light'].background,
			elevation: 1,
			shadowColor: Colors[colorScheme ?? 'light'].text,
			shadowOpacity: .12,
			shadowRadius: 8,
			shadowOffset: {
				width: 2,
				height: 2
			},
            paddingTop: 16
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