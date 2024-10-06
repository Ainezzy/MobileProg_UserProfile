import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import lightStyles from '../styles/Light_Mode';
import darkStyles from '../styles/Dark_Mode';

const profileImage = require('../assets/userProfile.png');

const User_Profile_Card = ({ isDarkMode }) => {
    const styles = isDarkMode ? darkStyles : lightStyles;

    return (
        <View style={styles.cardContainer}>
            <Image 
                source={profileImage} 
                style={styles.profileImage} 
            />
            <Text style={styles.userName}>Ainez Anquillano</Text>
            <Text style={styles.userTitle}>Web Designer</Text>
        </View>
    );
};

export default User_Profile_Card;
