import { Octicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, Dimensions } from 'react-native';

// import onBoardingOne from '@/assets/images/splash7.jpg';
import { useRouter } from 'expo-router';
import { defaultStyles } from '@/constants/Styles';
import Colors from '@/constants/Colors';

// const on_boarding_one = Image.resolveAssetSource(onBoardingOne).uri;

const { width, height } = Dimensions.get('window');

const One = () => {
    const router = useRouter();

    const handleForward = () => {
        router.push('/onboarding/two');
    }
  return (
    <ImageBackground 
        style={styles.background} 
        resizeMode='cover'
        source={require("@/assets/images/oleg.jpg")} 
    >
            
        <View style={styles.logoContainer}>
			{/* <Image resizeMode="center" style={styles.logo} source={require("@/assets/images/logo.png")} /> */}
        </View>
        <View style={styles.btnContainer} >
            <Text style={styles.tagText}>Dive Into Excellence</Text>

            <TouchableOpacity onPress={handleForward} style={[defaultStyles.btn, styles.btn]}>
                <Text style={defaultStyles.btnText}>Continue</Text>
                <Octicons style={styles.btnIcon} name='chevron-right' color={Colors.light.white} size={24} />
            </TouchableOpacity>
        </View>
    </ImageBackground>
  );
}

export default One;


const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
		// padding: 16
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
        bottom: 0,
        height: '35%',
        width: '100%',
        backgroundColor: Colors.light.white,
        borderTopRightRadius: 75,
        borderTopLeftRadius: 75,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 50,
        paddingTop: 80
    },
		btn: {
            marginHorizontal: 'auto'
			// flexWrap: 'nowrap'
		},
		btnIcon: {
			marginLeft: 16,
			marginTop: 4
		},
    tagText: {
        fontSize: 20,
        color: '#444',
        fontFamily: 'mon-b'
    }
})