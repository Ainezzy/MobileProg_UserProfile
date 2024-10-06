import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import User_Profile_Card from '../components/User_Profile_Card';
import lightStyles from '../styles/Light_Mode'; 
import darkStyles from '../styles/Dark_Mode';  

const User_Profile_Layout = () => {
    const [isDarkMode, setIsDarkMode] = useState(false); 

    const toggleDarkMode = () => {
        setIsDarkMode(previousState => !previousState);
    };

    const styles = isDarkMode ? darkStyles : lightStyles;

    return (
        <ScrollView style={styles.scrollContainer}>
            <User_Profile_Card isDarkMode={isDarkMode} />
            
            {/* Settings Container */}
            <View style={styles.settingsContainer}>
                <Text style={styles.settingsTitle}>Settings</Text>

                {/* Dark Mode Toggle */}
                <View style={styles.settingsOption}>
                    <View style={styles.iconLabel}>
                        {isDarkMode ? (
                            <>
                                <MaterialCommunityIcons name="white-balance-sunny" size={24} color="white" />
                                <Text style={styles.optionText}>Light Mode</Text>
                            </>
                        ) : (
                            <>
                                <MaterialIcons name="dark-mode" size={24} color="black" />
                                <Text style={styles.optionText}>Dark Mode</Text>
                            </>
                        )}
                    </View>
                    <TouchableOpacity onPress={toggleDarkMode}>
                        {isDarkMode ? (
                            <MaterialCommunityIcons name="toggle-switch" size={50} color="#fff" />
                        ) : (
                            <MaterialCommunityIcons name="toggle-switch-off" size={50} color="#bebebe" />
                        )}
                    </TouchableOpacity>
                </View>

                {/* Notifications */}
                <TouchableOpacity style={styles.settingsOption}>
                    <View style={styles.iconLabel}>
                        <MaterialCommunityIcons name="bell" size={24} color={isDarkMode ? 'white' : 'black'} />
                        <Text style={styles.optionText}>Notifications</Text>
                    </View>
                    <AntDesign name="right" size={20} color={isDarkMode ? '#bebebe' : 'black'} />
                </TouchableOpacity>

                {/* Privacy */}
                <TouchableOpacity style={styles.settingsOption}>
                    <View style={styles.iconLabel}>
                        <MaterialIcons name="lock" size={24} color={isDarkMode ? 'white' : 'black'} />
                        <Text style={styles.optionText}>Privacy</Text>
                    </View>
                    <AntDesign name="right" size={20} color={isDarkMode ? '#bebebe' : 'black'} />
                </TouchableOpacity>

                {/* Security */}
                <TouchableOpacity style={styles.settingsOption}>
                    <View style={styles.iconLabel}>
                        <MaterialIcons name="security" size={24} color={isDarkMode ? 'white' : 'black'} />
                        <Text style={styles.optionText}>Security</Text>
                    </View>
                    <AntDesign name="right" size={20} color={isDarkMode ? '#bebebe' : 'black'} />
                </TouchableOpacity>

                {/* Account */}
                <TouchableOpacity style={styles.settingsOption}>
                    <View style={styles.iconLabel}>
                        <MaterialIcons name="account-circle" size={24} color={isDarkMode ? 'white' : 'black'} />
                        <Text style={styles.optionText}>Account</Text>
                    </View>
                    <AntDesign name="right" size={20} color={isDarkMode ? '#bebebe' : 'black'} />
                </TouchableOpacity>

                {/* Help */}
                <TouchableOpacity style={styles.settingsOption}>
                    <View style={styles.iconLabel}>
                        <MaterialIcons name="help" size={24} color={isDarkMode ? 'white' : 'black'} />
                        <Text style={styles.optionText}>Help</Text>
                    </View>
                    <AntDesign name="right" size={20} color={isDarkMode ? '#bebebe' : 'black'} />
                </TouchableOpacity>

                {/* About */}
                <TouchableOpacity style={styles.settingsOption}>
                    <View style={styles.iconLabel}>
                        <MaterialIcons name="info" size={24} color={isDarkMode ? 'white' : 'black'} />
                        <Text style={styles.optionText}>About</Text>
                    </View>
                    <AntDesign name="right" size={20} color={isDarkMode ? '#bebebe' : 'black'} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default User_Profile_Layout;
