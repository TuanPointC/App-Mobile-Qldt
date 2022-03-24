import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native'
import GlobalColors from '../../Utils/GlobalColors'
import { UserContext } from '../../App';
import { useContext } from 'react';
const Information = () => {
  const userContext = useContext(UserContext)
  const LogoutHanlder = () => {
    userContext.setUser(null)
  }
  return (
    <View style={styles.container}>

      <View style={styles.containerChild1}>
        <View style={styles.topInformation}>
          <Image source={require("../../assets/logoPhenikaa.jpg")} style={styles.image} />
          <View>
            <Text style={styles.TopInformationName}>NGUYỄN VĂN TUẤN</Text>
            <Text style={{ ...styles.textNormal, textAlign: 'center' }}>MSSV: 19010040</Text>
          </View>
        </View>

        <View style={{ marginLeft: 20 }}>
          <Text style={styles.textNormal}>Ngày sinh: 09/06/2001</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.textNormal}>Ngành học: CNTT</Text>
            <Text style={{ ...styles.textNormal, marginLeft: 30 }}>Ngành: K13</Text>
          </View>
          <Text style={styles.textNormal}>Quê quán: Tân Tiến, Gia Lộc, Hải Dương</Text>
        </View>
      </View>

      <View style={{ ...styles.containerChild1, marginTop: 20 }}>
        <Text style={styles.header}>THÔNG TIN KHÁC</Text>
        <View style={{ height: 50, backgroundColor: 'gray', borderRadius: 30, marginVertical: 8 }}></View>
        <View style={{ height: 50, backgroundColor: 'gray', borderRadius: 30, marginVertical: 8 }}></View>
        <View style={{ height: 50, backgroundColor: 'gray', borderRadius: 30, marginVertical: 8 }}></View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: 'white', padding: 7 }}> ĐỔI MẬT KHẨU</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={LogoutHanlder}>
            <Text style={{ color: 'white', padding: 7 }}>ĐĂNG XUẤT</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
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
  }
})


export default Information