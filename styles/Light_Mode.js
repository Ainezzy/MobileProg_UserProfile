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
});

export default lightStyles;
