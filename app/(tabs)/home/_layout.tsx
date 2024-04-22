import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import{ DrawerActions, NavigationContainer } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import Colors from '@/constants/Colors';
import Fiberglass from '@/components/home/Fiberglass/Fiberglass';
import Vinyl from '@/components/home/Vinyl/Vinyl';
import { Entypo, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ILiners from '@/components/home/ILiners';
import OLiners from '@/components/home/OLiners';
import Cover from '@/components/home/Cover';

const Drawer = createDrawerNavigator();

const Home = () => {
	const navigation = useNavigation();
	const { top, bottom } = useSafeAreaInsets();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false
		})
	}, []);
	

  return (
    <View style={{ flex: 1 }}>
        <Drawer.Navigator screenOptions={{
			headerTransparent: true,
			// drawerHideStatusBarOnOpen: true,
			drawerActiveBackgroundColor: Colors.light.primary,
			drawerLabelStyle: {
				fontFamily: 'mon-sb',
				marginLeft: -10
			},
			// drawerContentStyle: {
			// 	paddingTop: top
			// },
			drawerContentStyle: {
				backgroundColor: Colors.light.background,
			},
			drawerItemStyle: {
				// borderWidth: 4,
				// borderColor: 'green',
				// padding: 0,
				// margin: 0,
				borderTopRightRadius: 20,
				borderBottomRightRadius: 20
			},
			headerTitle: '',
			drawerActiveTintColor: Colors.light.white,
			headerLeft: () => (
				<TouchableOpacity style={{ marginLeft: 16 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
					<SimpleLineIcons name='menu' size={24} color={Colors.light.black} />
				</TouchableOpacity>
			)
		}}>
            <Drawer.Screen 
				name="Fiberglass" 
				component={Fiberglass} 
				options={{ 
					drawerLabel: 'Fiberglass',
					drawerIcon: ({ size, color }) => (
						<MaterialCommunityIcons name='pool' size={size} color={color} />
					),
				}} 
			/>
            <Drawer.Screen 
				name="Vinyl" 
				component={Vinyl}
				options={{ 
					drawerLabel: 'Vinyl',
					drawerIcon: ({ size, color }) => (
						<Entypo name='vinyl' size={size} color={color} />
					),
				}} 
			/>
            <Drawer.Screen name="In-ground" component={ILiners} 
				options={{ 
					// headerTitle: 'Inground Pools Liners' ,
					drawerLabel: 'Inground Liners',
					drawerIcon: ({ size, color }) => (
						<Ionicons name='balloon-outline' size={size} color={color} />
					),
				}} 
			/>
            <Drawer.Screen name="Above ground" component={OLiners} 
				options={{ 
					// headerTitle: 'Aboveground Pools Liners',
					drawerLabel: 'Aboveground Liners',
					drawerIcon: ({ size, color }) => (
						<Ionicons name='beaker' size={size} color={color} />
					),
				}} 
			/>
            <Drawer.Screen name="Saftey Covers" component={Cover} 
				options={{ 
					// headerTitle: 'Aboveground Pools Liners',
					drawerLabel: 'Safetey Covers',
					drawerIcon: ({ size, color }) => (
						<Ionicons name='bowling-ball' size={size} color={color} />
					),
				}} 
			/>
            {/* <Drawer.Screen name="[id]" component={IngroundCover} options={{ headerTitle: 'FiberGlass Pools' }} /> */}
        </Drawer.Navigator>
    </View>
  )
}

export default Home;


const styles = StyleSheet.create({
	roundBtn: {
		width: 40,
		height: 40,
		borderRadius: 50,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		color: Colors.light.primary,
	}
})