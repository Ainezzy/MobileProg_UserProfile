import React from "react";
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import lightStyles from '../styles/Light_Mode';
import darkStyles from "../styles/Dark_Mode";

const Change_pfp = ({ isDarkMode, isVisible, onClose, onOptionSelect }) => {
    const styles = isDarkMode ? darkStyles : lightStyles;

    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Change Profile Photo</Text>

                    <TouchableOpacity style={styles.modalOption} onPress={() => onOptionSelect('gallery')}>
                        <Text style={styles.optionText}>Upload from Gallery</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.modalOption} onPress={() => onOptionSelect('camera')}>
                        <Text style={styles.optionText}>Take a Photo</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.modalClose} onPress={onClose}>
                        <Text style={styles.optionText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default Change_pfp;
