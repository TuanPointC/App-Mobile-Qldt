import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Plane } from 'react-native-animated-spinkit'
import GlobalColors from '../../Utils/GlobalColors'
import { useState, useEffect } from 'react';
import CalendarDay from './CalendarDay';
import { infor } from '../../Api/Api';
import CalendarTest from './CalendarTest';
const Calendar = () => {
  const [visible, setVisible] = useState(false)
  const [subjects, setSubjects] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [currentDay, setCurrentDay] = useState(null)

  useEffect(() => {
    var data = {
      user: '19010040',
      pass: '09062001',
      action: 'lich_hoc'
    }
    infor(data)
      .then(res => {
        setSubjects(res.data)
        setIsLoading(false)
      })
      .catch(e => {
        console.log(e)
        setIsLoading(false)
      })
  }, [])

  const openCalendarDay = (e) => {
    if (e !== "all") {
      var sub = []
      subjects.forEach(s => {
        if (s[6].indexOf(`Thứ ${e}`) > 1) {
          sub.push(s)
        }
      })
      setCurrentDay(sub)
    }
    else {
      setCurrentDay(subjects)
    }
    setVisible(true)
  }
  if (isLoading || subjects === null) {
    return (
      <View style={styles.spin}>
        <Plane size={48} color={GlobalColors.orange.color} />
      </View>
    )
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerChild}>
        <Text style={styles.header}>LỊCH HỌC</Text>
        <View style={styles.containerChildSub}>
          <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={() => openCalendarDay(2)}>
            <Text style={styles.text}>THỨ 2</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={() => openCalendarDay(3)}>
            <Text style={styles.text}>THỨ 3</Text>
          </TouchableOpacity >
          <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={() => openCalendarDay(4)}>
            <Text style={styles.text}>THỨ 4</Text>
          </TouchableOpacity >
          <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={() => openCalendarDay(5)}>
            <Text style={styles.text}>THỨ 5</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={() => openCalendarDay(6)}>
            <Text style={styles.text}>THỨ 6</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={() => openCalendarDay(7)}>
            <Text style={styles.text}>THỨ 7</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={() => openCalendarDay(8)}>
            <Text style={styles.text}> CN</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} style={{ ...styles.button, flex: 1 }} onPress={() => openCalendarDay("all")}>
            <Text style={styles.text}>XUẤT LỊCH CẢ TUẦN</Text>
          </TouchableOpacity>
        </View>
      </View>
      <CalendarTest />
      <CalendarDay visible={visible} setVisible={setVisible} currentDay={currentDay} />

    </ScrollView >
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    flex: 1,
    width: '100%',
    padding: 15,
  },
  containerChild: {
    padding: 5,
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
  containerChildSub: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  button: {
    backgroundColor: GlobalColors.blue.color,
    minWidth: 80,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 10,
    margin: 7,
  },
  header: {
    color: GlobalColors.blue.color,
    marginVertical: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  ///


  spin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Calendar