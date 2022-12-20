import { StyleSheet } from 'react-native'


export const styRegister = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f3efea',
    },
    container__img: {
        height: '15%',
        backgroundColor: 'red',
        marginBottom: 15,
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    containerText: {
        padding: 20
    },
    containerText_title: {
        fontSize: 60,
        fontWeight: '600'
    },
    containerText_subTitle: {
        fontSize: 20,
        fontWeight: '600'
    },
    container__input: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 20

    },
    container__input_chuldren: {
        paddingBottom: 10

    },
    container__confirmation: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },

    container__confirmation_text: {
        fontSize: 15,
        fontWeight: '600'
    },

    container__confirmation_check: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },

    container__button: {
        paddingLeft: 10,
        paddingRight: 10,

    },
    container__text: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },

    container__text_child: {
        color: '#0b86f8',
        fontWeight: '800'
    },

    container_img_icon: {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'

    },

    img_icon: {
        width: 65,
        height: 70

    },


})

