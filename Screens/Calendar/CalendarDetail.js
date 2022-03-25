import { View, Text, StyleSheet } from 'react-native'
import GlobalColors from '../../Utils/GlobalColors'

const CalendarDeatil = (props) => {
  return (
    <View style={style.container}>
      <Text style={{ color: 'white', fontSize: 10,width:100 }}>
        {props.test[0]}
      </Text>
      <Text style={{ color: 'white', fontSize: 10,width:100 }}>
        {props.test[3] + '  '+ props.test[5]}
      </Text>
      <Text style={{ color: 'white', fontSize: 10,width:50 }}>
        {props.test[6]}
      </Text>
      <Text style={{ color: 'white', fontSize: 10,width:20 }}>
        {props.test[1]}
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