import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import ChatScreen from './../ChatScreen'
import Header from './../Header'
import Footer from './../Footer'
import { NativeRouter, Route, Routes } from 'react-router-native'
import Home from '../Home'
import MyMaster from '../MyMaster'
import Profil from "./../Profil"

const Main = () => {

    return (
        <NativeRouter>
            <View style={styles.container}>
                <Header/>
                <ScrollView>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route path="/mymaster" element={<MyMaster/>}/>
                        <Route path="/profil" element={<Profil/>}/>
                        <Route path="/message" element={<ChatScreen/>}/>
                    </Routes>
                </ScrollView>
                <Footer/>
            </View>
        </NativeRouter>
    )
}

const styles = StyleSheet.create ({
    container:{
        flex: 20,
        backgroundColor: 'red'
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
    }
})

export default Main;