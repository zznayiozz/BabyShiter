import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    creenWelcome: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        flexDirection: 'column',
    },
    Header: {
        flex: 1,
        justifyContent: 'center',
    },
    logo:{
        marginLeft: 20,
    },
    FontSize: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    BoxSlider: {
        flex: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slider: {
        flexDirection: 'row', 
        alignItems: 'center',
    },
    sliderItem: {
       width: 200,
       height: 150,
       borderWidth: 1,
       justifyContent: 'center',
       alignItems: 'center',
       marginTop: 30,
       marginBottom: 30,
       marginLeft: 15,
       marginRight: 15,
    },
    button: {
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 30,
        paddingRight: 30,
        borderWidth: 1,
        backgroundColor: 'black',
    },
    buttonText:{
        color: 'white'
    },
    Footer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    FooterText:{
        fontSize: 12,
    }
   

});