import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Icon } from 'react-native-elements';
import axios from './../../baseUrl'

const Reg = ({userUpdate}) => {

  let email = ``;
  let password = ``;
  let ism = ``;
  let fam = ``;
  let otch = ``;
  let tel = ``;

  const handleLogin = () => {
      console.log("1",{
        first_name: ism,
        last_name: fam,
        father_name: otch,
        phone: tel,
        email: email,
        password: password
      })
    axios.post(
      `/user/register`,
      {
        first_name: ism,
        last_name: fam,
        father_name: otch,
        phone: tel,
        email: email,
        password: password
      }
    )
    .then((response) => {
      console.log(response.body);
      userUpdate(response.body);
    })
    .catch((error) => {
      console.log({ errorMessage: error.toString() });
      console.error("There was an error!", error);
    });
  }

  return (
    <TouchableWithoutFeedback >
      <View style={styles.container}>
        <View style={styles.bigCircle}></View>
        <View style={styles.smallCircle}></View>
        <View style={styles.centerizedView}>
          <View style={styles.authBox}>
            <View style={styles.logoBox}>
              <Icon
                color='#fff'
                name='comments'
                type='font-awesome'
                size={50}
              />
            </View>
            <Text style={styles.loginTitleText}>Ro'yxatdan o'tish</Text>
            <View style={styles.hr}></View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Ismingiz</Text>
              <TextInput
                style={styles.input}
                // autoCapitalize={false}
                // textContentType='Ismingiz'
                onChangeText={(text) => {ism = text}}
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Familiyangiz</Text>
              <TextInput
                style={styles.input}
                // autoCapitalize={false}
                // textContentType='Familiyangiz'
                onChangeText={(text) => {fam = text}}
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Otangizning ismi</Text>
              <TextInput
                style={styles.input}
                // autoCapitalize={false}
                // textContentType='Otangizning ismi'
                onChangeText={(text) => {otch = text}}
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Telefon nomeringiz</Text>
              <TextInput
                style={styles.input}
                // autoCapitalize={false}
                // textContentType='Otangizning ismi'
                onChangeText={(text) => {tel = text}}
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                // autoCapitalize={false}
                keyboardType='email-address'
                textContentType='emailAddress'
                onChangeText={(text) => {email = text}}
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.input}
                // autoCapitalize={false}
                secureTextEntry={true}
                textContentType='password'
                onChangeText={(text) => {password = text}}
              />
            </View>
            <Text style={styles.registerText}>
                Parolingizni esda saqlab qoling!
            </Text>
            <TouchableOpacity style={styles.loginButton}>
              <Text
                style={styles.loginButtonText}
                onPress={handleLogin}
              >
                Registration
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingBottom: '15px'
  },
  bigCircle: {
    width: Dimensions.get('window').height * 0.7,
    height: Dimensions.get('window').height * 0.7,
    backgroundColor: '#ff6b81',
    borderRadius: 1000,
    position: 'absolute',
    right: Dimensions.get('window').width * 0.25,
    top: -50,
  },
  smallCircle: {
    width: Dimensions.get('window').height * 0.4,
    height: Dimensions.get('window').height * 0.4,
    backgroundColor: '#ff7979',
    borderRadius: 1000,
    position: 'absolute',
    bottom: Dimensions.get('window').width * -0.2,
    right: Dimensions.get('window').width * -0.3,
  },
  centerizedView: {
    width: '100%',
    top: '10%',
  },
  authBox: {
    width: '80%',
    backgroundColor: '#fafafa',
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: 14,
    paddingBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logoBox: {
    width: 100,
    height: 100,
    backgroundColor: '#eb4d4b',
    borderRadius: 1000,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: -50,
    marginBottom: -50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  loginTitleText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  hr: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#444',
    marginTop: 6,
  },
  inputBox: {
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 6,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#dfe4ea',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: '#ff4757',
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 4,
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  registerText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  forgotPasswordText: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16,
  },
});

export default Reg; 