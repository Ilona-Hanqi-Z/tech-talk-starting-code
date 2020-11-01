/* This file contains the drawer contents 
   that will appear on the left 
   when the user swipes to the right. */

   import React from 'react';
   import {View, StyleSheet } from 'react-native';
   import {Avatar, Title, Caption, Paragraph, Drawer,} from 'react-native-paper';
   import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
   import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
   
   export function DrawerContent(props){
       return(
           <View style={{flex:1}}>
               <DrawerContentScrollView {...props}>
                   <View style={styles.drawerContent}>
   
                       {/* user info section */}
                       <View style={styles.userInfoSection}>
                           <View style={{flexDirection:'row', marginTop:15}}>
                                <Avatar.Image
                                    source={require('../assets/icon.png')}
                                    size={50}
                                />
                               <View style={{marginLeft:15, flexDirection:'column'}}>
                                   <Title style={styles.title}>Username</Title>
                                   <Caption style={styles.caption}>Email</Caption>
                               </View>
                           </View>
                           <View style={styles.row}>
                               <View style={styles.section}>
                                   <Paragraph style={[styles.paragraph, styles.caption]}>300</Paragraph>
                                   <Caption style={styles.caption}>Following</Caption>
                               </View>
                               <View style={styles.section}>
                                   <Paragraph style={[styles.paragraph, styles.caption]}>142</Paragraph>
                                   <Caption style={styles.caption}>Follower</Caption>
                               </View>
                           </View>
                       </View>
   
                       {/* TODO: navigate items section */}
                       
   
                       {/* TODO: setting and feedback section */}
                       
                   
                   </View>
               </DrawerContentScrollView>
               
               {/* TODO: sign out section */}
               
           </View>
       );
   };
   
   const styles = StyleSheet.create({
       drawerContent: {
         flex:1
   
       },
       userInfoSection: {
         paddingLeft: 20,
       },
       title: {
         fontSize: 16,
         marginTop: 3,
         fontWeight: 'bold',
       },
       caption: {
         fontSize: 14,
         lineHeight: 14,
       },
       row: {
         marginTop: 20,
         flexDirection: 'row',
         alignItems: 'center',
       },
       section: {
         flexDirection: 'row',
         alignItems: 'center',
         marginRight: 15,
       },
       paragraph: {
         fontWeight: 'bold',
         marginRight: 3,
       },
       drawerSection: {
         marginTop: 15,
       },
       bottomDrawerSection: {
           marginBottom: 15,
           borderTopColor: '#f4f4f4',
           borderTopWidth: 1
       },
       preference: {
         flexDirection: 'row',
         justifyContent: 'space-between',
         paddingVertical: 12,
         paddingHorizontal: 16,
       },
   });