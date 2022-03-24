
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import GlobalColors from '../../Utils/GlobalColors'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScoreDetail from './ScoreDetail';
const Stack = createNativeStackNavigator()
const Home = ({ navigation }) => {
  const navigate = () => {
    navigation.navigate("Điểm_chi_tiết")
  }
  return (
    <View style={styles.container}>
      <View style={styles.block1}>
        <Text style={{ color: GlobalColors.blue.color, textAlign: 'center', marginVertical: 10, fontSize: 18 }}>Điểm học tập</Text>
        <View style={styles.detail}>
          <Text style={styles.text}>TBC tích lũy thang điểm 4: 3.4</Text>
          <Text style={styles.text}>TBC tích lũy thang điểm 10: 8.1</Text>
          <Text style={styles.text}>Xếp hạng học lực: Giỏi</Text>
          <Text style={styles.text}>Xếp loại học tập thang 4: Giỏi</Text>
          <Text style={styles.text}>Xếp loại học tập thang 10: Giỏi</Text>
          <Text style={styles.text}>Số tín chỉ đã tích lũy: 80</Text>
          <Text style={styles.text}>Số môn chờ điểm: 4</Text>
          <Text style={styles.text}>Số môn thi lại: 0</Text>
          <Text style={styles.text}>Số môn học lại: 0</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={navigate}>
        <Text style={styles.textButton}>Xem điểm chi tiết</Text>
      </TouchableOpacity>
    </View>
  )
}
const Score = () => {
  return (
    <Stack.Navigator
      defaultScreenOptions={Home}

      screenOptions={() => ({
        headerTitleAlign: 'center',
        headerTintColor: GlobalColors.orange.color,
      })}
    >
      <Stack.Screen name='Điểm' component={Home} />
      <Stack.Screen name='Điểm_chi_tiết' component={ScoreDetail} />
    </Stack.Navigator>

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
  block1: {
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
  detail: {
    backgroundColor: GlobalColors.blue.color,
    padding: 10
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginVertical: 10
  },
  button: {
    backgroundColor: GlobalColors.orange.color,
    borderRadius: 10,
    padding: 15,
    width: '100%',
    marginTop: 20
  },
  textButton: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white'
  }
})

export default Score