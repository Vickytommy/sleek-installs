import React, { useLayoutEffect } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs, useNavigation } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
// import { useClientOnlyValue } from '@/components/useClientOnlyValue';

import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute, useRoute } from '@react-navigation/native';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>['name'];
//   color: string;
// }) {
//   return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
// }

export default function TabLayout() {
  const route = useRoute();
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].primary,
        tabBarLabelStyle: {
          fontFamily: 'mon-sb',
          fontSize: 12
        },
        tabBarStyle: {
          paddingTop: 5,
          paddingBottom: 5,
          height: 60
        }
      }}>
        <Tabs.Screen
          name="home" 
          options={{
            headerShown: false,
            title: 'Home',
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => {
              const routeName = getFocusedRouteNameFromRoute(route)
              const iconName = routeName === 'home' ? 'home-sharp' : 'home-outline'
              return <Ionicons name={iconName} size={28} color={color} />
            }
          }}
        />
        <Tabs.Screen 
          name="projects" 
          options={{
            title: 'Projects',
            tabBarLabel: 'Projects',
            tabBarIcon: ({ color, size }) => {
              const routeName = getFocusedRouteNameFromRoute(route)
              const iconName = routeName === 'projects' ? 'briefcase' : 'briefcase-outline'
              return <Ionicons name={iconName} size={28} color={color} />
            }
          }}
        />
        <Tabs.Screen 
          name="add" 
          options={{
            headerShown: false,
            
            title: 'Add',
            tabBarLabel: '',
            tabBarLabelStyle: {
              height: 0
            },
            tabBarIcon: ({ color, size }) => {
              const routeName = getFocusedRouteNameFromRoute(route)
              const iconName = routeName === 'add' ? 'pluscircle' : 'pluscircleo'
              return <AntDesign name={iconName} size={36} color={color} />
            }
          }}
        />
        <Tabs.Screen 
          name="explore" 
          options={{
            title: 'Explore',
            tabBarLabel: 'Explore',
            tabBarIcon: ({ color, size }) => {
              const routeName = getFocusedRouteNameFromRoute(route)
              const iconName = routeName === 'explore' ? 'search' : 'search-outline'
              return <Ionicons name={iconName} size={28} color={color} />
            }
          }}
        />
        <Tabs.Screen 
          name="account" 
          options={{
            title: 'Profiles',
            tabBarLabel: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              const routeName = getFocusedRouteNameFromRoute(route)
              const iconName = routeName === 'account' ? 'person-circle' : 'person-circle-outline'
              return <Ionicons name={iconName} size={28} color={color} />
            }
          }}
        />
    </Tabs>
  );
}

{/* <Tabs.Screen
  name="index"
  options={{
    title: 'Tab One',
    tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
    headerRight: () => (
      <Link href="/modal" asChild>
        <Pressable>
          {({ pressed }) => (
            <FontAwesome
              name="info-circle"
              size={25}
              color={Colors[colorScheme ?? 'light'].text}
              style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
            />
          )}
        </Pressable>
      </Link>
    ),
  }}
/> */}