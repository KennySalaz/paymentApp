
import { StyleSheet } from 'react-native'

export const stylesCardProduct = StyleSheet.create({
    container: {
        display: 'flex',
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'row',
        padding: 15,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    containerImage: {
        width: '20%'
    },
    containerImage_image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        borderRadius: 10,
    },
    containerTexts: {
        width: '80%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 5,

    },
    containerTexts_1: {
        fontSize: 15,
        fontWeight: '600'
    },
    containerAddItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flex: 1,
        alignItems: 'center'
    },
    containerAddItem_res: {
        backgroundColor: '#f3f3f3',
        width: 30,
        height: 30,
        borderRadius: '50%',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 4.46,
        elevation: 4,
    },
    containerAddItem_add: {
        backgroundColor: '#f3f3f3',
        width: 30,
        height: 30,
        borderRadius: '50%',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 4.46,

        elevation: 4,
    }
})