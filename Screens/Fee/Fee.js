import { View, Text, Button, StyleSheet, ScrollView } from 'react-native'
import { useState } from 'react'
import GlobalColors from '../../Utils/GlobalColors'
const Fee = () => {
  const [fees, setFees] = useState([
    { term: 'kỳ 1', total: '15.000.000', date: '12/12/2019' },
    { term: 'kỳ 2', total: '15.000.000', date: '12/12/20119' },
    { term: 'kỳ 3', total: '15.000.000', date: '12/12/2020' },
    { term: 'kỳ 4', total: '15.000.000', date: '12/12/2020' },
    { term: 'kỳ 5', total: '15.000.000', date: '12/12/2021' },
  ])
  return (
    <View style={styles.container}>

      <View style={styles.containerChild1}>
        <View style={styles.headerChild}>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 10 }}>HỌC PHÍ ĐANG PHẢI NỘP</Text>
        </View>
        <View style={styles.currentFee}>
          <Text style={{ textAlign: 'center', fontSize: 13, marginTop: 10 }}>Học phí kỳ 6</Text>
          <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', marginVertical: 6 }}>15.000.000</Text>
          <Text style={{ textAlign: 'center', fontSize: 13 }}>Đến hạn ngày: 12/12/2023</Text>
          <View style={styles.button}>
            <Button title='NỘP HỌC PHÍ' color={GlobalColors.blue.color} />
          </View>

        </View>
      </View>

      <View style={{ ...styles.containerChild1, height: '60%', marginTop: 15 }}>
        <View style={styles.headerChild}>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 10 }}>HỌC PHÍ ĐÃ NỘP</Text>
        </View>
        <View>
          <View style={styles.doneFee}>
            <Text>Kỳ học</Text>
            <Text>Số tiền</Text>
            <Text>Ngày nộp</Text>
          </View>
          <ScrollView style={{ height: '60%' }}>
            {fees.map((item, index) => (
              <View key={index} style={styles.doneFee}>
                <Text>{item.term}</Text>
                <Text>{item.total}</Text>
                <Text>{item.date}</Text>
              </View>
            ))}
          </ScrollView>
          <View style={{ ...styles.button, marginTop: 20 }}>
            <Button color={GlobalColors.blue.color} title='IN HÓA ĐƠN' />
          </View>
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
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: GlobalColors.orange.color,
    marginBottom: -10
  },
  containerChild1: {
    paddingTop: 15,
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
    overflow: 'hidden',
    position: 'relative'
  },

  headerChild: {
    backgroundColor: GlobalColors.blue.color,
    paddingVertical: 15,
    position: 'absolute',
    top: 0,
    width: '100%',
    left: 0,
  },
  currentFee: {
    padding: 20,
  },
  button: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: GlobalColors.blue.color,
    width: 150,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
  },
  doneFee: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30
  }
}
)
export default Fee