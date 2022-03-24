import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { RadioButton } from 'react-native-paper';
import { useState, useContext } from 'react';
import GlobalColors from '../../Utils/GlobalColors';
import { UserContext } from '../../App';

const Login = () => {
  const userContext = useContext(UserContext)
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [user, setUser] = useState({ email: '', password: '' })
  const InputEmail = (e) => {
    setUser({ ...user, email: e })
  }
  const InputPassword = (e) => {
    setUser({ ...user, password: e })
  }

  const LoginHandler = () => {
    userContext.setUser(user)
  }
  return (
    <View style={style.container}>
      <Text style={{ color: GlobalColors.blue.color, fontSize: 18 }}>Đăng nhập vào tài khoản của bạn.</Text>
      <View style={style.subContainer}>
        <Text style={style.warningText}>Bạn nhập sai email hoặc mật khẩu, Vui lòng thử lại!</Text>
        <View style={style.inputContainer}>
          <TextInput style={style.input} onChangeText={InputEmail} placeholder='Email/Tài khoản...' />
          <TextInput style={style.input} secureTextEntry onChangeText={InputPassword} placeholder='Mật khẩu...' />
        </View>
        <View style={style.button}>
          <Button title='ĐĂNG NHẬP' onPress={LoginHandler} color={GlobalColors.blue.color} />
        </View>
        <View style={style.remember}>
          <RadioButton
            color={GlobalColors.blue.color}
            value="first"
            status={isEnabled ? 'checked' : 'unchecked'}
            onPress={toggleSwitch}
          />
          <Text style={{ fontSize: 10 }}>Nhớ tài khoản của tôi</Text>
        </View>
      </View>

      <View style={style.forget}>
        <Text style={{ color: GlobalColors.blue.color }}>
          Bạn quên mật khẩu?
        </Text>
        <Text style={{ color: GlobalColors.blue.color }}>
          || Hỗ trợ
        </Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%'
  },
  subContainer: {
    alignItems: 'center'
  },
  inputContainer: {
    width: 300,
    maxWidth: '90%',
    alignItems: 'center'
  },
  input: {
    borderColor: GlobalColors.blue.color,
    borderWidth: 2,
    borderRadius: 30,
    padding: 10,
    marginVertical: 10,
    textAlign: 'center',
    width: '100%',
    color: GlobalColors.blue.color
  },
  warningText: {
    color: 'red',
    textAlign: 'center',
    width: 300,
    marginBottom: 10
  },
  remember: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    borderRadius: 30,
    overflow: 'hidden',
    padding: 7,
    backgroundColor: GlobalColors.blue.color,
    marginVertical: 20,
    width: 200
  },
  forget: {
    flexDirection: 'row',
  }

})

export default Login