import React from 'react';
import { SafeAreaView } from 'react-native';
import User_Profile_Layout from './layouts/User_Profile_Layout';

export default function App() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <User_Profile_Layout />
        </SafeAreaView>
    );
}
