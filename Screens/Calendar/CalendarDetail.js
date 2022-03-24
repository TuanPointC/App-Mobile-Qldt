import { View, Text, StyleSheet } from 'react-native'
import GlobalColors from '../../Utils/GlobalColors'

const CalendarDeatil = () => {
  return (
    <View style={style.container}>
      <Text style={{ color: 'white', fontSize: 10 }}>
        Lập trình ứng dụng di động
      </Text>
      <Text style={{ color: 'white', fontSize: 10 }}>
        12/12/2022
      </Text>
      <Text style={{ color: 'white', fontSize: 10 }}>
        A4202
      </Text>
      <Text style={{ color: 'white', fontSize: 10 }}>
        1
      </Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    padding: 7,
    borderRadius: 10,
    backgroundColor: GlobalColors.blue.color,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 5
  }
})

export default CalendarDeatil