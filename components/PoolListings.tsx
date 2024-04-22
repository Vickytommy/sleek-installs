import { View, Text, FlatList, ListRenderItem, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Image, ActivityIndicator } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { CategoryListings } from '@/constants/Types';
import { defaultStyles } from '@/constants/Styles';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInRight, FadeOutLeft } from 'react-native-reanimated';
import Colors from '@/constants/Colors';




const pool =
[
  {
      id: "13283",
      name: "Hexagon Pool Package",
      description: "Central and quiet installation with 5mm steel roods",
      image: require("@/assets/images/astoria_r.jpg")
  },
  {
      id: "40264",
      name: "Vinyl Double Pool",
      description: "Central and quiet installation with 5mm steel roods",
      image: require("@/assets/images/pool5.jpg")
  },
  {
      id: "87303",
      name: "Alabama Couture",
      description: "Central and quiet installation with 5mm steel roods",
      image: require("@/assets/images/vinyl/coping3.jpg")
  },
  {
      id: "81303",
      name: "Alabama Couture",
      description: "Central and quiet installation with 5mm steel roods",
      image: require("@/assets/images/vinyl/full_l1.jpg")
  },
  {
      id: "88303",
      name: "Alabama Couture",
      description: "Central and quiet installation with 5mm steel roods",
      image: require("@/assets/images/vinyl/hero2.jpg")
  },
  {
      id: "89303",
      name: "Alabama Couture",
      description: "Central and quiet installation with 5mm steel roods",
      image: require("@/assets/images/fiber.jpg")
  },
  {
      id: "86303",
      name: "Alabama Couture",
      description: "Central and quiet installation with 5mm steel roods",
      image: require("@/assets/images/vinyl/walls5.jpg")
  },
  {
      id: "81803",
      name: "Alabama Couture",
      description: "Central and quiet installation with 5mm steel roods",
      image: require("@/assets/images/spa/spa.jpeg")
  },
  {
      id: "11303",
      name: "Alabama Couture",
      description: "Central and quiet installation with 5mm steel roods",
      image: require("@/assets/images/spa/spa2.jpg")
  },
  {
      id: "09123",
      name: "Alabama Couture",
      description: "Central and quiet installation with 5mm steel roods",
      image: require("@/assets/images/fiberglass/led4.jpg")
  }
]






const PoolListings = ({ listings: items, category }: CategoryListings) => {
	const [loading, setLoading] = useState(false);
	const listRef = useRef<FlatList>(null);

  useEffect(() => {
		setLoading(true);
		console.log('listings data ', items.length)
		setTimeout(() => {
			setLoading(false);
		}, 300)
	}, [category]);

	const renderRow: ListRenderItem<any> = ({ item }) => (
		<View>
			<Link
				href={`/listing/${item.id}`}
				asChild
			>
				<TouchableWithoutFeedback>
					<Animated.View style={styles.listing} entering={FadeInRight} exiting={FadeOutLeft}>
						<Image style={styles.image} source={item.image} />
						<TouchableOpacity style={styles.rightIconBtn}>
							<Ionicons name='heart-outline' size={24} color={'black'} />
						</TouchableOpacity>

						<View style={{ flexDirection: 'row' }}>
							{/* <Text>{item.name}</Text> */}
							<View style={{
								paddingHorizontal: 16,
								paddingTop: 16
							}}>
								{/* <Ionicons name='star' size={16} /> */}

								<Text style={{
									fontFamily: 'mon-sb',
									fontSize: 16,
									color: '#444',
									paddingBottom: 4
								}}>{item.name}</Text>
								<Text style={{
									fontFamily: 'ral',
									fontSize: 14,
								}}>{item.description}</Text>
							</View>
						</View>
					</Animated.View>
				</TouchableWithoutFeedback>
			</Link>
		</View>
	)

  return (
    <View style={defaultStyles.container}>
			{loading ?
				<View style={[StyleSheet.absoluteFill, styles.loading]}>
					<ActivityIndicator size={60} color={Colors.light.primary} />
				</View>
				:
				<FlatList
					renderItem={renderRow} 
					ref={listRef}
					data={loading ? []: pool}
				/>
			}
    </View>
  )
}

export default PoolListings;


const styles = StyleSheet.create({
	loading: {
		...StyleSheet.absoluteFillObject,
		zIndex: 10,
		backgroundColor: Colors.light.white,
		justifyContent: 'center',
		alignItems: 'center'
	},
	listing: {
		paddingBottom: 50
	},
	image: {
		width: '100%',
		height: 400,
		// borderRadius: 10
	},
	rightIconBtn: {
		position: 'absolute',
		right: 30,
		top: 30
	}
})