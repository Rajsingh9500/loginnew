import { View, Text, Dimensions, StyleSheet, StatusBar, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Signup({ navigation }) {
    return (
        <View style={{ backgroundColor: '#fff', }}>
            <ScrollView style={{ height: height }}>
                <View style={styles.icons} >
                    <View style={styles.back}>
                        <View style={{ alignItems: 'center', marginTop: 250, }} >
                            <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                                <AntDesign style={{ marginRight: 70 }} name="arrowleft" size={40} color="#fff" />
                            </TouchableOpacity>
                            <Text style={{
                                fontSize: 24,
                                fontWeight: '500', color: '#fff', marginTop: 20
                            }}>Sign Up</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'flex-end', }}>
                        <TouchableOpacity style={{ backgroundColor: '#f4f2f4', height: 50, width: 50, justifyContent: 'center', alignItems: 'center', marginRight: 40, marginTop: -100, borderRadius: 10 }} >
                            <Feather name="info" size={30} color="black" />
                        </TouchableOpacity>
                    </View>


                </View>
                <View style={{ height: height / 5 }}></View>
                <View style={styles.cir}>
                    {/*  <View style={styles.circle1}>
                    <View style={styles.circle2}>
                       
                    </View>
                </View> */}
                    <View style={styles.circle3}>
                        <Text style={styles.txt}>Email or Phone Number</Text>
                        <TextInput style={styles.input} placeholderTextColor={'#3e4b68'} placeholder='Email....'></TextInput>

                        <Text style={styles.txt1}>Password</Text>
                        <TextInput style={styles.input} placeholderTextColor={'#3e4b68'} placeholder='Password....'></TextInput>
                        <Text style={styles.txt2}> Confirm Password</Text>
                        <TextInput style={styles.input} placeholderTextColor={'#3e4b68'} placeholder='cnf Password....'></TextInput>
                        <Text style={styles.txt2}>Name or pusedo</Text>
                        <TextInput style={styles.input} placeholderTextColor={'#3e4b68'} placeholder='Type....'></TextInput>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.log}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>

                    </View>



                </View>
            </ScrollView>
            {/*     <StatusBar barStyle={'dark-content'} backgroundColor={'#3255ed'}></StatusBar> */}
        </View>
    )
}

const styles = StyleSheet.create({
    icons: {

        height: height / 3.1,

        backgroundColor: '#fff'




    },
    back: {
        height: 400,
        width: 400,
        borderRadius: 200,
        backgroundColor: '#3255ed',
        transform: [{ translateX: -120, }],
        marginTop: -200
    },

    cir: {
        height: height / 2,



    },

    circle3: {
        height: 500,
        width: 400,
        backgroundColor: '#0f1f41',
        borderRadius: 200,
        transform: [{ scale: 2 }],
        marginTop: 50,
        alignItems: 'center',
        overflow: 'hidden'

    },
    log: {
        color: '#fff',
        marginTop: 15,

        paddingHorizontal: 20,
        padding: 3,
        borderRadius: 30,
        fontSize: 10,

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
    ,
    txt: {
        marginTop: 35,
        color: '#fff',


        fontSize: 8,
        marginBottom: 4,
        marginRight: 43
    },
    txt1: {
        marginTop: 10,
        color: '#fff',


        fontSize: 8,
        marginBottom: 4,
        marginRight: 110
    },
    txt2: {
        marginTop: 10,
        color: '#fff',


        fontSize: 8,
        marginBottom: 4,
        marginRight: 78
    },
    input: {
        fontSize: 8,
        backgroundColor: '#1f2e4d',
        borderRadius: 5,

        height: 30,

        width: width / 2.5,
        padding: 5,
        marginLeft: 5,


    }
}) 