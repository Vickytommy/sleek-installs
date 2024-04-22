import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useColorScheme } from '@/components/useColorScheme';
import React from 'react';
import Colors from '@/constants/Colors';
import { ColorScheme } from '@/constants/Types';
import { TextInput } from 'react-native';
import { defaultStyles } from '@/constants/Styles';
import { Ionicons } from '@expo/vector-icons';


const Contact = () => {
	const colorScheme = useColorScheme();
	const styles = getStyles(colorScheme!);

  return (
		<View style={styles.container}>  
			<TextInput autoCapitalize='none' placeholder='First Name' style={defaultStyles.inputField} />
			<TextInput autoCapitalize='none' placeholder='Last Name' style={defaultStyles.inputField} />
			<TextInput autoCapitalize='none' placeholder='Email' style={defaultStyles.inputField} />
			<TextInput autoCapitalize='none' placeholder='Phone' style={defaultStyles.inputField} />
			<TextInput autoCapitalize='none' placeholder='Message' style={defaultStyles.inputField} />
			<TouchableOpacity style={defaultStyles.btn}>
				<Text style={defaultStyles.btnText}>Submit</Text>
			</TouchableOpacity>
		</View>
  );
}

export default Contact;



const getStyles = (colorScheme: ColorScheme) => {
	return StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: Colors[colorScheme ?? 'light'].background,
			padding: 20,
			paddingTop: 25
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
