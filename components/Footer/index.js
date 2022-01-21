import React from 'react'
// import plusImg from '../../assets/img/Icon_awesome-plus.png'
// import portfelImg from './../../assets/img/fi-rr-user.png'
// import message from './../../assets/img/fi-rr-envelope.png'
// import home from './../../assets/img/fi-rr-home.png'
// import subtitles from './../../assets/img/fi-rr-subtitles.png'
import { 
    FooterView,
    FooterCreater,
    FooterAdd,
    FooterRouter,
    FooterCenter
 } from './styles'
import {
    ImageBackground,
    StyleSheet,
    Text
} from 'react-native'
import { Link } from "react-router-native";

const Main = () => {
    return (
        <FooterView>
            <FooterCreater>
                <FooterAdd
                    onPress={()=>{console.log("add order")}}
                >
                    <ImageBackground 
                        // source={plusImg}
                        style={styles.image}
                        resizeMode="center"
                    >
                        <Text style={styles.text}>add</Text>
                    </ImageBackground>
                </FooterAdd>
            </FooterCreater>
            <FooterRouter>
                <Link
                    to="/"
                    underlayColor="#f0f4f7"
                >
                    <ImageBackground 
                        source={home}
                        style={styles.image}
                        resizeMode="contain"
                    >
                        <Text style={styles.text}>add</Text>
                    </ImageBackground>
                </Link>
                <Link
                    to="/mymaster"
                    underlayColor="#f0f4f7"
                >
                    <ImageBackground 
                        // source={subtitles}
                        style={styles.image}
                        resizeMode="contain"
                    >
                        <Text style={styles.text}>add</Text>
                    </ImageBackground>
                </Link>
                <FooterCenter></FooterCenter>
                <Link
                    to="/message"
                    underlayColor="#f0f4f7"
                >
                    <ImageBackground 
                        // source={message}
                        style={styles.image}
                        resizeMode="contain"
                    >
                        <Text style={styles.text}>add</Text>
                    </ImageBackground>
                </Link>
                <Link
                    to="/profil"
                    underlayColor="#f0f4f7"
                >
                    <ImageBackground 
                        // source={portfelImg}
                        style={styles.image}
                        resizeMode="contain"
                    >
                        <Text style={styles.text}>add</Text>
                    </ImageBackground>
                </Link>
            </FooterRouter>
        </FooterView>
    )
}

const styles = StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: "center"
    },
    text: {
        color: "transparent"
    }
  });

export default Main;