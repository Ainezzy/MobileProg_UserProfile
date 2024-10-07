import React, { useState } from 'react'; // Add useState here
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import lightStyles from '../styles/Light_Mode';
import darkStyles from '../styles/Dark_Mode';
import Change_pfp from './Change_pfp';

const profileImage = require('../assets/userProfile.png');

const User_Profile_Card = ({ isDarkMode }) => {
    const [modalVisible, setModalVisible] = useState(false); // Initialize useState
    const styles = isDarkMode ? darkStyles : lightStyles;

    const handleOptionSelect = (option) => {
        console.log('Selected option:', option);
        setModalVisible(false);
    };

    return (
        <View style={styles.cardContainer}>
            <View>
                <Image 
                    source={profileImage} 
                    style={styles.profileImage} 
                />
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <FontAwesome name="camera" size={20} style={styles.cameraIcon} />
                </TouchableOpacity>
            </View>

            <Text style={styles.userName}>Ainez Anquillano</Text>
            <Text style={styles.userTitle}>University Student</Text>

            <Change_pfp
                isDarkMode={isDarkMode}
                isVisible={modalVisible}
                onClose={() => setModalVisible(false)}
                onOptionSelect={handleOptionSelect}
            />
        </View>
    );
};

export default User_Profile_Card;
