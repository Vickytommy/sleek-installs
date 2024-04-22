import { View, Text, StyleSheet } from 'react-native';
import React, { useMemo, useState } from 'react';
import { useColorScheme } from '@/components/useColorScheme';
import { ColorScheme } from '@/constants/Types';
import Colors from '@/constants/Colors';
import { Stack } from 'expo-router';
import ExploreHeader from '@/components/ExploreHeader';
import PoolListings from '@/components/PoolListings';
import listingsData from '@/assets/data/pool-listings.json';





const pool =
[
  {
      id: "13283",
      name: "Hexagon Pool Package",
      description: "Central and quiet installation with 5mm steel roods",
      image: require("@/assets/images/vinyl/rectangle.jpg")
  },
  {
      id: "40264",
      name: "Vinyl Double Pool",
      description: "Central and quiet installation with 5mm steel roods",
      image: require("@/assets/images/vinyl/rectangle.jpg")
  },
  {
      id: "88303",
      name: "Alabama Couture",
      description: "Central and quiet installation with 5mm steel roods",
      image: require("@/assets/images/vinyl/rectangle.jpg")
  }
]












const Explore = () => {
	const colorScheme = useColorScheme();
	const styles = getStyles(colorScheme!);
  const [category, setCategory] = useState('Side pool');
  const items = useMemo(() => listingsData as any, [])

  const onDataChanged = (category: string) => {
    console.log('changed cate - ', category)
    setCategory(category);
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{
        header: () => <ExploreHeader onCategoryChanged={onDataChanged}/>
      }} />
      <PoolListings listings={items} category={category}/>
    </View>
  )
}

export default Explore;



const getStyles = (colorScheme: ColorScheme) => {
	return StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: Colors[colorScheme ?? 'light'].gray900,
			// padding: 20,
			// paddingTop: 25
		}
  })
}