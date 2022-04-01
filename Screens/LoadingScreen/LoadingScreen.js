import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native'
import { CircleFade } from 'react-native-animated-spinkit'
import GlobalColors from '../../Utils/GlobalColors'
const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.text1}>Tra cứu thông tin</Text>
        <Image
          source={require("../../assets/Phenikaa.png")}
          style={styles.image}
        />
        <View style={styles.text2Container}>
          <Text style={styles.text2}>Quản lý đào tạo đại học Phenikaa</Text>
        </View>
      </View>

      <View>
        <CircleFade />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  subContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '50%'
  },
  text1: {
    color: GlobalColors.blue.color,
    fontSize: 18,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
  }
  ,
  text2Container: {
    width: '50%',
  },
  text2: {
    color: GlobalColors.blue,
    fontSize: 18,
    textAlign: 'center'
  }
})
export default LoadingScreen