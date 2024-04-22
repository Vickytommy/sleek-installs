import { View, Text, StyleSheet, SafeAreaView, TouchableHighlight, ScrollView } from 'react-native';
import React from 'react';
import { defaultStyles } from '@/constants/Styles';
import { AntDesign, Feather, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TouchableRipple } from 'react-native-paper';

const Account = () => {
  return (
    <View style={[defaultStyles.container, { width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#efefef'}]}>
      <Text style={{ fontFamily: 'mon-sb', fontSize: 16 }}>Explore Screen</Text>
    </View>
  )

  // return (
  //   <ScrollView style={[defaultStyles.container, styles.container]}>
  //     <Text style={styles.headerTitle}>Profile</Text>
  //     <View>
  //       <TouchableOpacity style={styles.profileList}>
  //         <Text style={styles.profileAvatar}>V</Text>
  //         <View style={styles.profileTextContainer}>
  //           <Text style={styles.profileText}>Victor</Text>
  //           <Text style={styles.profileSecText}>Show profile</Text>
  //         </View>
  //         <Ionicons name='chevron-forward' color={Colors.light.black} size={24} />
  //       </TouchableOpacity>
	// 		  <View style={[styles.separatorLine, { marginBottom: 20 }]} />

  //       <TouchableOpacity style={styles.profileList}>
  //         <MaterialCommunityIcons name='account-circle-outline' color={Colors.light.black} size={24} />
  //         <View style={styles.profileTextContainer}>
  //           <Text style={styles.profileText}>Personal info</Text>
  //         </View>
  //         <Ionicons name='chevron-forward' color={Colors.light.black} size={24} />
  //       </TouchableOpacity>

  //       <TouchableOpacity style={styles.profileList}>
  //         <Ionicons name='settings-outline' color={Colors.light.black} size={24} />
  //         <View style={styles.profileTextContainer}>
  //           <Text style={styles.profileText}>Account</Text>
  //         </View>
  //         <Ionicons name='chevron-forward' color={Colors.light.black} size={24} />
  //       </TouchableOpacity>
	// 		  <View style={styles.separatorLine} />

  //       <TouchableOpacity style={styles.profileList}>
  //         <Ionicons name='accessibility-outline' color={Colors.light.black} size={24} />
  //         <View style={styles.profileTextContainer}>
  //           <Text style={styles.profileText}>Accessibility</Text>
  //         </View>
  //         <Ionicons name='chevron-forward' color={Colors.light.black} size={24} />
  //       </TouchableOpacity>

  //       <TouchableOpacity style={styles.profileList}>
  //         <MaterialCommunityIcons name='credit-card-check-outline' color={Colors.light.black} size={24} />
  //         <View style={styles.profileTextContainer}>
  //           <Text style={styles.profileText}>Payments and payouts</Text>
  //           <Text style={styles.profileSecText}>Plans, cards</Text>
  //         </View>
  //         <Ionicons name='chevron-forward' color={Colors.light.black} size={24} />
  //       </TouchableOpacity>
  //       <View style={styles.separatorLine} />

  //       <TouchableOpacity style={styles.profileList}>
  //         <Ionicons name='notifications-outline' color={Colors.light.black} size={24} />
  //         <View style={styles.profileTextContainer}>
  //           <Text style={styles.profileText}>Notifications</Text>
  //         </View>
  //         <Ionicons name='chevron-forward' color={Colors.light.black} size={24} />
  //       </TouchableOpacity>
  //       <View style={styles.separatorLine} />

  //       <View style={styles.profileList}>
  //         <Ionicons name='notifications-outline' color={Colors.light.black} size={24} />
  //         <View style={styles.profileTextContainer}>
  //           <Text style={styles.profileText}>Language</Text>
  //           <Text style={styles.profileSecText}>English</Text>
  //         </View>
  //         {/* <Ionicons name='chevron-forward' color={Colors.light.black} size={24} /> */}
  //       </View>

  //       <TouchableOpacity style={styles.profileList}>
  //         <Ionicons name='help-circle-outline' color={Colors.light.black} size={24} />
  //         <View style={styles.profileTextContainer}>
  //           <Text style={styles.profileText}>Help</Text>
  //           <Text style={styles.profileSecText}>Help center, privacy policy</Text>
  //         </View>
  //         <Ionicons name='chevron-forward' color={Colors.light.black} size={24} />
  //       </TouchableOpacity>
        
  //       <TouchableOpacity style={styles.profileList}>
  //         <AntDesign name='book' color={Colors.light.black} size={24} />
  //         <View style={styles.profileTextContainer}>
  //           <Text style={styles.profileText}>Terms of Service</Text>
  //           <Text style={styles.profileSecText}>Legal</Text>
  //         </View>
  //         {/* <Ionicons name='chevron-forward' color={Colors.light.black} size={24} /> */}
  //       </TouchableOpacity>
  //       <View style={styles.separatorLine} />

  //       <Text style={[styles.profileSecText, { marginTop: 20 }]}>Sleek Installs v0.0.1</Text>
        
  //       <TouchableOpacity style={[defaultStyles.btn, { marginTop: 30, marginBottom: 80 }]}>
  //         <Text style={defaultStyles.btnText}>Log out</Text>
  //         {/* <Feather style={defaultStyles.btnIcon} color={Colors.light.white} name='log-out' size={24} /> */}
  //       </TouchableOpacity>
  //     </View>
  //   </ScrollView>
  // )
}

export default Account;


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 60
  },
  headerTitle: {
    fontFamily: 'mon-sb',
    fontSize: 28,
    marginBottom: 20
  },
  profileList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
    // borderBottomWidth: StyleSheet.hairlineWidth,
    paddingTop: 20,
    paddingBottom: 10,
    borderColor: '#ccc'
  },
  profileAvatar: {
    backgroundColor: '#222',
    width: 50,
    height: 50,
    color: Colors.light.white,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 50
  },
  profileTextContainer: {
    flexGrow: 1,
  },
  profileText: {
    fontFamily: 'mon',
    fontSize: 16
  },
  profileSecText: {
    fontFamily: 'mon',
    fontSize: 14, 
    color: '#444'
  },
  separatorLine: {
    flex: 1,
    borderBottomColor: '#ccc',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 10,
  },
})