
import { StyleSheet } from 'react-native'

export const stylesDetailsProduct = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: '#f3efea',
        /*     padding: 30, */
        position: 'relative'
    },
    containerImage: {
        width: '100%',
        padding: 10,
        backgroundColor: '#fff',


    },
    image: {
        width: '100%',
        height: 500,
        resizeMode: 'contain'
    },

    details: {
        /*  flex: 1, */
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 40,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        margin: 30,
        bottom: '15%',
        padding: 10,

    },
    contenDetails: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        alignItems: 'center',
        padding: 10,
    },
    contenDetailsImage: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
    },
    contenDetailsText: {
        fontSize: 25,
        fontWeight: '700',
    },
    detailsPrice: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
    },
    detailsPrice_Price: {
        fontSize: 25,
        fontWeight: '700',
    },
    detailsPriceText_oferta: {
        fontSize: 25,
        fontWeight: '700',
        textDecorationLine: 'line-through',
        color: '#00000057',
    },
    detailsButton: {
        /*  paddingTop:20, */
    },
    viewCard: {
        backgroundColor: 'red',
        width: '60%',
        position: 'absolute',
        bottom: '5%',
        right: '20%',
        height: 50,
        borderRadius: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    viewCard_text: {
        fontSize: 20,
        fontWeight: '600'
    }
})