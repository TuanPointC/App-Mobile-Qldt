import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import GlobalColors from '../../Utils/GlobalColors'
import { UserContext } from '../../Context';
import { useContext } from 'react';
import { infor } from '../../Api/Api';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
const Information = () => {
  const userContext = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(true)
  const [info, setInfo] = useState(null)
  const LogoutHanlder = async () => {
    userContext.setUser(null)
    await AsyncStorage.removeItem("user")
  }
  const getUserStored = async () => {
    var user = JSON.parse(await AsyncStorage.getItem("user"))
    return user
  }
  useEffect(() => {
    getUserStored()
      .then((user) => {
        var data = {
          user: userContext.user.email,
          pass: userContext.user.password,
          action: 'info'
        }
        infor(data)
          .then(res => {
            setInfo(res.data)
            setIsLoading(false)
          })
          .catch(e => {
            console.log(e)
          })
      })
      .catch((err)=>{
        console.log(err)
      })


  }, [])


  if (isLoading || info === null) {
    return (
      // 
      <LoadingScreen />
    )
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerChild1}>
          <View style={styles.topInformation}>
            <Image source={require("../../assets/Phenikaa.png")} style={styles.image} />
            <View>
              <Text style={styles.TopInformationName}>{info.info["Họ và tên"]}</Text>
              <Text style={{ ...styles.textNormal, textAlign: 'center' }}>MSSV: {info.info["Mã sinh viên"]}</Text>
            </View>
          </View>

          <View style={{ marginLeft: 20 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.textNormal}>Ngành học: {info.majors["Ngành chính"]}</Text>
            </View>
            <Text style={{ ...styles.textNormal }}>Lớp: {info.majors["Lớp"]}</Text>
            <Text style={styles.textNormal}>Hệ đào tạo: {info.majors["Hệ đào tạo"]}</Text>
          </View>
        </View>

        <View style={{ ...styles.containerChild1, marginTop: 20 }}>
          <Text style={styles.header}>THÔNG TIN KHÁC</Text>
          <View style={{ marginVertical: 1 }}>
            <Text style={styles.textNormal}>Ngày sinh: {info.info["Ngày sinh"]}</Text>
          </View>
          <View style={{ marginVertical: 1 }}>
            <Text style={styles.textNormal}>Email: {info.info["Email"]}</Text>
          </View>
          <View style={{ marginVertical: 1 }}>
            <Text style={styles.textNormal}>Dân tộc: {info.info["Dân tộc"]}</Text>
          </View>
          <View style={{ marginVertical: 1 }}>
            <Text style={styles.textNormal}>Quê quán: {info.info["Nơi thường trú"]}</Text>
          </View>
          <View style={{ marginVertical: 1 }}>
            <Text style={styles.textNormal}>Số CMND: {info.info["Số CMND"]}</Text>
          </View>
          <View style={{ marginVertical: 1 }}>
            <Text style={styles.textNormal}>ĐT cá nhân: {info.info["ĐT cá nhân"]}</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} >
              <Text style={{ color: 'white', padding: 7 }}> ĐỔI MẬT KHẨU</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={LogoutHanlder}>
              <Text style={{ color: 'white', padding: 7 }}>ĐĂNG XUẤT</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    flex: 1,
    width: '100%',
    padding: 15,
    alignItems: 'center'

  },
  containerChild1: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  topInformation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 50
  },
  TopInformationName: {
    fontSize: 18,
    color: GlobalColors.blue,
    color: '#263C71',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  textNormal: {
    color: GlobalColors.blue,
    marginVertical: 8,
    fontWeight: "bold",
    fontSize: 13
  },


  ////
  container2: {

  },
  header: {
    fontSize: 17,
    textAlign: 'center',
    fontWeight: 'bold',
    ...GlobalColors.blue,
    color: '#263C71',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },
  button: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: GlobalColors.blue.color,
  },
  spin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})


export default Information