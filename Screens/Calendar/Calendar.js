import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import GlobalColors from '../../Utils/GlobalColors'
import { useState } from 'react';
import CalendarDetail from './CalendarDetail';
import Picker from './Picker';
const Calendar = () => {
  const [open, setOpen] = useState(false);
  const [currentTerm, setCurrentTerm] = useState("Kỳ 1");
  const [terms, setTerms] = useState(["kỳ 1", "Kỳ 2", "kỳ 3", "Kỳ 4", "Kỳ 5", "Kỳ 6"]);
  return (
    <View style={styles.container}>
      <View style={styles.containerChild}>
        <Text style={styles.header}>LỊCH HỌC</Text>
        <View style={styles.containerChildSub}>
          <TouchableOpacity activeOpacity={0.5} style={styles.button}>
            <Text style={styles.text}>THỨ 2</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} style={styles.button}>
            <Text style={styles.text}>THỨ 3</Text>
          </TouchableOpacity >
          <TouchableOpacity activeOpacity={0.5} style={styles.button}>
            <Text style={styles.text}>THỨ 4</Text>
          </TouchableOpacity >
          <TouchableOpacity activeOpacity={0.5} style={styles.button}>
            <Text style={styles.text}>THỨ 5</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} style={styles.button}>
            <Text style={styles.text}>THỨ 6</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} style={styles.button}>
            <Text style={styles.text}>THỨ 7</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} style={styles.button}>
            <Text style={styles.text}> CN</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} style={{ ...styles.button, flex: 1 }}>
            <Text style={styles.text}>XUẤT LỊCH CẢ TUẦN</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ ...styles.containerChild, marginTop: 20 }}>
        <View style={styles.titleBlock2}>
          <Text style={{ ...styles.header, ...styles.headerBlock2 }}>LỊCH THI</Text>

          <View style={styles.dropdown}>
            <Picker terms={terms} currentTerm={currentTerm} setCurrentTerm={setCurrentTerm}/>
          </View>

        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Text style={styles.textHeaderBlock2}>Môn</Text>
          <Text style={styles.textHeaderBlock2}>Ngày thi</Text>
          <Text style={styles.textHeaderBlock2}>Phòng</Text>
          <Text style={styles.textHeaderBlock2}>Lần</Text>
        </View>
        <ScrollView style={{ height: '50%', marginTop: 15 }}>
          <CalendarDetail />
          <CalendarDetail />
          <CalendarDetail />
          <CalendarDetail />
          <CalendarDetail />
          <CalendarDetail />
          <CalendarDetail />
          <CalendarDetail />
        </ScrollView>
      </View>

    </View >
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

  titleBlock2: {
    width: '100%',
    position: 'relative'
  },
  textHeaderBlock2: {
    color: GlobalColors.blue.color,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  dropdown: {
    position: 'absolute',
    top: 5,
    right: 0,
  },
  dropdownItem: {
    backgroundColor: GlobalColors.blue.color,
    color: 'white',
  }
})

export default Calendar