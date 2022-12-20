import { StyleSheet } from 'react-native'


export const styShoppingCard = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    containerScroll: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f6f7f9'
    },
    containerPrice: {
        backgroundColor: 'white',
        height: 150,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
        alignItems: 'center',
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    textTotal: {
        color: '#adadad',
        fontWeight: '600',
        textTransform: 'uppercase'
    },
    textPrice: {
        fontSize: 25,
        fontWeight: '700',
        marginTop: 5
    }
})