import { StyleSheet } from 'react-native';

const lightStyles = StyleSheet.create({
    cardContainer: {
    marginTop: 20,
    padding: 20,
    alignItems: 'center',
    },

    iconLabel: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    optionText: {
        fontSize: 16,
        marginLeft: 10,
        color: '#000000',
    },

    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 15,
    },

    scrollContainer: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        paddingHorizontal: 20,
    },

    settingsContainer: {
        backgroundColor: '#fff',
        padding: 30,
        marginTop: 20,
        borderRadius: 30,
    },

    settingsOption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        paddingVertical: 10,
    },

    settingsTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000000',
    },

    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },

    userTitle: {
        fontSize: 16,
        color: '#7e7e7e',
    },

    cameraIcon: {
        position: 'absolute',
        bottom: 5,
        right: 0,
        backgroundColor: '#fff',
        borderRadius: 50,
        padding: 6,
        color: '#1A1A1A', // Camera icon color for light mode
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Translucent background
    },
    modalContent: {
        width: 300,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
    },
    modalOption: {
        paddingVertical: 10,
        width: '100%',
        alignItems: 'center',
    },
    modalClose: {
        paddingVertical: 10,
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
    },
    optionText: {
        color: '#000',
        fontSize: 16,
    },

});

export default lightStyles;
