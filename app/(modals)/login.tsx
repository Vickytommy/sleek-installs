import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useColorScheme } from '@/components/useColorScheme';
import React from 'react';
import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowser';
import Colors from '@/constants/Colors';
import { ColorScheme } from '@/constants/Types';
import { TextInput as TI } from 'react-native-paper';
import { TextInput } from 'react-native';
import { defaultStyles } from '@/constants/Styles';
import { Ionicons, createIconSet } from '@expo/vector-icons';
import { useOAuth } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';

enum Strategy {
	Google = 'oauth_google',
	Apple = 'oauth_apple',
	Facebook = 'oauth_facebook'
}


const Login = () => {
	useWarmUpBrowser();
	const router = useRouter();
	const colorScheme = useColorScheme();
	const styles = getStyles(colorScheme!);

	// CLERK AUTHENTICATION
	const { startOAuthFlow: googleAuth } = useOAuth({ strategy: Strategy.Google});
	const { startOAuthFlow: appleAuth } = useOAuth({ strategy: Strategy.Apple});
	const { startOAuthFlow: facebookAuth } = useOAuth({ strategy: Strategy.Facebook});

	const onSelectAuth = async (strategy: Strategy) => {
		const selectedAuth = {
			[Strategy.Google]: googleAuth,
			[Strategy.Apple]: appleAuth,
			[Strategy.Facebook]: facebookAuth
		}[strategy]

		try {
			const { createdSessionId, setActive } = await selectedAuth();
			console.log(' selected Auth - ', createdSessionId);

			if (createdSessionId) {
				setActive!({ session: createdSessionId});
				router.back();
			}
		} catch (err) {
			console.error('OAuth error: ', err)
		}
	};

	return (
		<View style={styles.container}>  
			<TextInput autoCapitalize='none' placeholder='Email' style={defaultStyles.inputField} />
			<TextInput autoCapitalize='none' placeholder='Password' style={defaultStyles.inputField} />
			<TouchableOpacity style={defaultStyles.btn}>
				<Text style={defaultStyles.btnText}>Continue</Text>
			</TouchableOpacity>

			<View style={styles.separatorView}>
				<View style={styles.separatorLine} />
				<Text style={styles.separator}>or</Text>
				<View style={styles.separatorLine} />
			</View>

			<View style={{ gap: 20}}>
				{/* <View>
					<TouchableOpacity style={styles.btnOutline}>
						<Ionicons name="call-outline" size={24} style={defaultStyles.btnIcon} />
						<Text style={styles.btnOutlineText}>Continue with Phone</Text>
					</TouchableOpacity>
				</View> */}
				
				<View>
					<TouchableOpacity style={styles.btnOutline} onPress={() => onSelectAuth(Strategy.Google)}>
						<Ionicons name="logo-google" size={24} style={defaultStyles.btnIcon} />
						<Text style={styles.btnOutlineText}>Continue with Google</Text>
					</TouchableOpacity>
				</View>
				
				<View>
					<TouchableOpacity style={styles.btnOutline} onPress={() => onSelectAuth(Strategy.Apple)}>
						<Ionicons name="logo-apple" size={24} style={defaultStyles.btnIcon} />
						<Text style={styles.btnOutlineText}>Continue with Apple</Text>
					</TouchableOpacity>
				</View>
				
				<View>
					<TouchableOpacity style={styles.btnOutline} onPress={() => onSelectAuth(Strategy.Facebook)}>
						<Ionicons name="logo-facebook" size={24} style={defaultStyles.btnIcon} />
						<Text style={styles.btnOutlineText}>Continue with Facebook</Text>
					</TouchableOpacity>
				</View>
			</View>

			<Text style={{ 
				fontFamily: 'mon-sb', 
				marginTop: 40, 
				textAlign: 'center',
			}}
			>
				Don't have an account?
				<Link href={'/(modals)/signup'}>
					<Text style={{ 
						fontFamily: 'mon-b', 
						textDecorationColor: Colors.light.primary,
						textDecorationStyle: 'solid', 
						textDecorationLine: 'underline',
						color: Colors.light.primary
					}}>Sign Up
					</Text>
				</Link>
			</Text>
		</View>
	)
}

export default Login;


const getStyles = (colorScheme: ColorScheme) => {
	return StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: Colors[colorScheme ?? 'light'].background,
			padding: 20,
			paddingTop: 25
		},
		separatorView: {
			flexDirection: 'row',
			gap: 10,
			alignItems: 'center',
			marginVertical: 30
		},
		separator: {
			fontFamily: 'mon-sb',
			color: Colors[colorScheme ?? 'light'].gray
		},
		separatorLine: {
			flex: 1,
			borderBottomColor: '#000',
			borderBottomWidth: StyleSheet.hairlineWidth,
		},
		btnOutline: {
			backgroundColor: Colors[colorScheme ?? 'light'].background,
			borderWidth:1,
			borderColor: Colors[colorScheme ?? 'light'].gray,
			height: 50,
			borderRadius: 8,
			alignItems: 'center',
			justifyContent: 'center',
			flexDirection: 'row',
			paddingHorizontal: 10,
		},
		btnOutlineText: {
			color: Colors[colorScheme ?? 'light'].text,
			fontSize: 16,
			fontFamily: 'mon-sb'
		}
	})
}

