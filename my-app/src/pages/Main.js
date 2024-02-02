import { View, Text, Dimensions, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Main({ navigation }) {
    return (
        <View style={{ backgroundColor: '#fff' }}>
            <View style={styles.icons} >
                <Feather name="bar-chart" size={130} color="#3156ec" />
                <Text style={{ fontSize: 30, fontWeight: '900', color: '#3157e8' }}>Data Me.</Text>
                <Text style={{ fontSize: 13, color: '#3157e8', fontWeight: '400' }}>Know yourself better</Text>

            </View>
            <View style={{ height: height / 5 }}></View>
            <View style={styles.cir}>
                <View style={styles.circle1}>
                    <View style={styles.circle2}>
                        <View style={styles.circle3}>

                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={styles.log}>
                                    Log In
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                                <Text style={styles.sign}>
                                    Sign Up
                                </Text>
                            </TouchableOpacity>


                        </View>
                    </View>
                </View>



            </View>
            {/*    <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'}></StatusBar> */}
        </View>
    )
}

const styles = StyleSheet.create({
    icons: {

        alignItems: 'center',
        height: height / 2.5,
        justifyContent: 'center',
        backgroundColor: '#fff'



    },

    cir: {
        height: height / 5,


    },
    circle1: {
        height: 400,
        width: 400,
        backgroundColor: '#f2f3f5',
        borderRadius: 300,
        transform: [{ scale: 2 }],


    }
    ,
    circle2: {
        height: 400,
        width: 400,
        backgroundColor: '#e9eaee',
        borderRadius: 300,
        transform: [{ scale: 1 }],
        marginTop: 60

    }
    ,
    circle3: {
        height: 400,
        width: 400,
        backgroundColor: '#0f1f41',
        borderRadius: 300,
        transform: [{ scale: 1 }],
        marginTop: 50,
        alignItems: 'center'

    },
    log: {
        color: '#fff',
        marginTop: 50,

        paddingHorizontal: 20,
        padding: 3,
        borderRadius: 30,
        fontSize: 12,

        backgroundColor: '#3255ed'

    }
    ,
    sign: {
        color: '#3255ed',
        marginTop: 20,
        borderWidth: 2,
        paddingHorizontal: 20,
        padding: 3,
        borderRadius: 30,
        fontSize: 12,
        borderColor: '#3255ed'

    }
})