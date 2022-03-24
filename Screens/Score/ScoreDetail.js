import { View, Text, StyleSheet } from 'react-native'
import GlobalColors from '../../Utils/GlobalColors'

const ScoreDetail = () => {
  return (
    <View style={style.container}>
      <View style={style.block}>
        <Text style={{ color: 'white', textAlign: 'center', marginTop: 10 }}>Điểm chi tiết</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    flex: 1,
    width: '100%',
    padding: 15,
    alignItems: 'center'
  },
  block: {
    backgroundColor: GlobalColors.blue.color,
    borderRadius: 10,
    width: "100%",
    height: '100%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
})

export default ScoreDetail