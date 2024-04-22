import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

import { useColorScheme } from '@/components/useColorScheme';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

const tokenCache = {
  async getToken(key: string) {
    try {
      const token = SecureStore.getItemAsync(key);
      console.log('the key, token - ', key, token)
      return token;
    } catch (err) {
      return;
    }
  },
  
  async saveToken(key: string, value: string) {
    try {
      console.log('the key, value - ', key, value)
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  }
}

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  // initialRouteName: '(tabs)',
  // initialRouteName: '(onboarding)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'mon': require('../assets/fonts/Montserrat/static/Montserrat-Regular.ttf'),
    'mon-sb': require('../assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf'),
    'mon-b': require('../assets/fonts/Montserrat/static/Montserrat-Bold.ttf'),
    'qs': require('../assets/fonts/Quicksand/static/Quicksand-Regular.ttf'),
    'qs-b': require('../assets/fonts/Quicksand/static/Quicksand-Bold.ttf'),
    'ral': require('../assets/fonts/Raleway/static/Raleway-Regular.ttf'),
    'ral-b': require('../assets/fonts/Raleway/static/Raleway-Bold.ttf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY!} tokenCache={tokenCache}>
      <RootLayoutNav />
    </ClerkProvider>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const { isLoaded, isSignedIn } = useAuth();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      // router.push('/(modals)/login');
    }
  }, [isLoaded, isSignedIn])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="onboarding" options={{ headerShown: false }} />
            <Stack.Screen name="listing/[id]" options={{ headerTitle: '', headerTransparent: true }} />
            <Stack.Screen name="listing/shapeId" options={{ headerTitle: 'Shapes' }} />
            <Stack.Screen name="(modals)/login" options={{
                title: 'Log in',
                headerTitleStyle: {
                  fontFamily: 'mon-sb'
                },
                presentation: 'modal',
              }}
            />
            <Stack.Screen name="(modals)/signup" options={{
                title: 'Sign Up',
                headerTitleStyle: {
                  fontFamily: 'mon-sb'
                },
                presentation: 'modal',
              }}
            />
            <Stack.Screen name="(modals)/contact" options={{
                title: 'Contact Us',
                headerTitleStyle: {
                  fontFamily: 'mon-sb'
                },
                presentation: 'modal',
              }}
            />
          </Stack>
        </ThemeProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
