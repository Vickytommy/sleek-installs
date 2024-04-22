import { defaultStyles } from '@/constants/Styles';
import { Stack, useNavigation, useRouter } from 'expo-router';
import { Link } from 'expo-router';
import React, { useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView,TouchableOpacity, ImageBackground } from 'react-native';

import Colors from '@/constants/Colors';
import { Fontisto, Ionicons, MaterialIcons, Octicons } from '@expo/vector-icons';

// import onBoardingOne from '@/assets/images/splash5.jpg';
// import logo from '@/assets/images/logo.png';

// const on_boarding_one = Image.resolveAssetSource(onBoardingOne).uri;
// const s_logo = Image.resolveAssetSource(logo).uri;

// import onBoardingTwo from '../assets/images/asab.jpg';


export default function Index() {
    const router = useRouter();

    const handleForward = () => {
        router.push('/onboarding/one');
    }

  return (
		<ImageBackground 
			style={styles.background} 
			resizeMode='cover'
			source={require("@/assets/images/splash5.jpg")} 
		>
			 <View style={styles.logoContainer}>
					<Image resizeMode="center" style={styles.logo} source={require("@/assets/images/logo.png")} />
					<Text style={styles.tagText}>Use Their Tag Line Here</Text>
				</View>
				<View style={styles.btnContainer} >
                    
					<TouchableOpacity onPress={handleForward} style={[defaultStyles.btn, styles.btn]}>
						<Text style={defaultStyles.btnText}>Get Started</Text>
						<Octicons style={styles.btnIcon} name='chevron-right' color={Colors.light.white} size={24} />
					</TouchableOpacity>
				</View>
		</ImageBackground>
  );
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
				padding: 16
    },
    logoContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 150 / 1.2,
        height: 115 / 1.2,
        marginBottom: 5
        // borderWidth: 2,
        // borderColor: "red",
        
    },
    btnContainer: {
        position: "absolute",
        bottom: 40
    },
		btn: {
			// flexWrap: 'nowrap'
		},
		btnIcon: {
			marginLeft: 16,
			marginTop: 4
		},
    tagText: {
        fontSize: 16,
        color: Colors.light.white
    }
})