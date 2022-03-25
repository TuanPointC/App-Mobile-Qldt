import { View, Text, Button, StyleSheet, ScrollView } from 'react-native'
import { DataTable } from 'react-native-paper';
import { Plane } from 'react-native-animated-spinkit'
import { useState, useEffect } from 'react'
import GlobalColors from '../../Utils/GlobalColors'
import { infor } from '../../Api/Api'
const Fee = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [info, setInfo] = useState(null)


  useEffect(() => {
    var data = {
      user: '19010040',
      pass: '09062001',
      action: 'hoc_phi'
    }
    infor(data)
      .then(res => {
        setInfo(res.data)
        setIsLoading(false)
      })
      .catch(e => {
        console.log(e)
        setIsLoading(false)
      })
  }, [])

  if (isLoading || info === null) {
    return (
      <View style={styles.spin}>
        <Plane size={48} color={GlobalColors.orange.color} />
      </View>
    )
  }
  return (
    <ScrollView style={styles.container}>

      <View style={styles.containerChild1}>
        <View style={styles.headerChild}>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 10 }}>THÔNG KÊ</Text>
        </View>
        <View style={styles.currentFee}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <Text style={{ fontWeight: 'bold' }}>Tổng phải nộp: </Text>
            <Text>{info["tong_phai_nop"]}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
            <Text style={{ fontWeight: 'bold' }}>Tổng đã nộp: </Text>
            <Text>{info["tong_da_nop"]}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
            <Text style={{ fontWeight: 'bold' }}>Tổng hoàn trả: </Text>
            <Text>{info["tong_hoan_tra"]}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
            <Text style={{ fontWeight: 'bold' }}>Tổng thừa thiếu: </Text>
            <Text>{info["tong_thua_thieu"]}</Text>
          </View>

        </View>
      </View>

      <View style={{ ...styles.containerChild1, marginTop: 15 }}>
        <View style={styles.headerChild}>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 10 }}>TỔNG HỢP CHUNG</Text>
        </View>
        <ScrollView style={{ marginTop: 30 }} horizontal>
          <DataTable>
            <DataTable.Header >
              <DataTable.Title style={{ width: 40 }}>STT</DataTable.Title>
              <DataTable.Title style={{ width: 150 }}>Khoản thu</DataTable.Title>
              <DataTable.Title style={{ width: 100 }}>Số tiền phải nộp</DataTable.Title>
              <DataTable.Title style={{ width: 100 }}>Số tiền đã nộp</DataTable.Title>
              <DataTable.Title style={{ width: 100 }}>Số tiền hoàn trả</DataTable.Title>
              <DataTable.Title style={{ width: 100 }}>Số tiền thiếu/thừa</DataTable.Title>
            </DataTable.Header>
            <ScrollView style={{ maxHeight: 250 }} nestedScrollEnabled={true}>
              {info["chung"].map((item, index) => {
                
                return (                 
                  <DataTable.Row key={index}>
                    <DataTable.Cell style={{ width: 40 }} >{item[0]}</DataTable.Cell>
                    <DataTable.Cell style={{ width: 150 }} >{item[1]}</DataTable.Cell>
                    <DataTable.Cell style={{ width: 100 }} >{item[2]}</DataTable.Cell>
                    <DataTable.Cell style={{ width: 100 }} >{item[3]}</DataTable.Cell>
                    <DataTable.Cell style={{ width: 100 }} >{item[4]}</DataTable.Cell>
                    <DataTable.Cell style={{ width: 100 }} >{item[5]}</DataTable.Cell>
                  </DataTable.Row>
                )
              }
              )}
            </ScrollView>
          </DataTable>
        </ScrollView>
      </View>

      <View style={{ ...styles.containerChild1, marginVertical: 30 }}>
        <View style={styles.headerChild}>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 10 }}>CÁC KHOẢN PHẢI NỘP</Text>
        </View>
        <ScrollView style={{ marginTop: 30 }} horizontal>
          <DataTable>
            <DataTable.Header >
              <DataTable.Title style={{ width: 40 }}>STT</DataTable.Title>
              <DataTable.Title style={{ width: 50 }}>Học kỳ</DataTable.Title>
              <DataTable.Title style={{ width: 100 }}>Năm học</DataTable.Title>
              <DataTable.Title style={{ width: 150 }}>Khoản thu</DataTable.Title>
              <DataTable.Title style={{ width: 100 }}>Số tiền phải nộp</DataTable.Title>
              <DataTable.Title style={{ width: 100 }}>Số tiền miễn giảm</DataTable.Title>
            </DataTable.Header>
            <ScrollView style={{ maxHeight: 250 }} nestedScrollEnabled={true}>
              <View >
                {info["phai_nop"].map((item, index) => (
                  <DataTable.Row key={index}>
                    <DataTable.Cell style={{ width: 40 }} >{item[0]}</DataTable.Cell>
                    <DataTable.Cell style={{ width: 50 }} >{item[1]}</DataTable.Cell>
                    <DataTable.Cell style={{ width: 100 }} >{item[2]}</DataTable.Cell>
                    <DataTable.Cell style={{ width: 150 }} >{item[3]}</DataTable.Cell>
                    <DataTable.Cell style={{ width: 100 }} >{item[4]}</DataTable.Cell>
                    <DataTable.Cell style={{ width: 100 }} >{item[5]}</DataTable.Cell>
                  </DataTable.Row>
                ))}
              </View>

            </ScrollView>
          </DataTable>
        </ScrollView>
      </View>


      <View style={{ ...styles.containerChild1, marginBottom: 30 }}>
        <View style={styles.headerChild}>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 10 }}>CÁC BIÊN LAI ĐÃ THU CHI</Text>
        </View>
        <ScrollView style={{ marginTop: 30 }} horizontal>
          <DataTable>
            <DataTable.Header >
              <DataTable.Title style={{ width: 40 }}>STT</DataTable.Title>
              <DataTable.Title style={{ width: 50 }}>Học kỳ</DataTable.Title>
              <DataTable.Title style={{ width: 100 }}>Năm học</DataTable.Title>
              <DataTable.Title style={{ width: 100 }}>Số phiếu</DataTable.Title>
              <DataTable.Title style={{ width: 100 }}>Ngày tháng</DataTable.Title>
              <DataTable.Title style={{ width: 160 }}>Khoản thu/chi</DataTable.Title>
              <DataTable.Title style={{ width: 100 }}>Số tiền</DataTable.Title>
            </DataTable.Header>
            <ScrollView style={{ maxHeight: 250 }} nestedScrollEnabled={true}>
              {info["thu_chi"].map((item, index) => (
                <DataTable.Row key={index}>
                  <DataTable.Cell style={{ width: 40 }} >{item[0]}</DataTable.Cell>
                  <DataTable.Cell style={{ width: 50 }} >{item[1]}</DataTable.Cell>
                  <DataTable.Cell style={{ width: 100 }} >{item[2]}</DataTable.Cell>
                  <DataTable.Cell style={{ width: 100 }} >{item[3]}</DataTable.Cell>
                  <DataTable.Cell style={{ width: 100 }} >{item[4]}</DataTable.Cell>
                  <DataTable.Cell style={{ width: 160 }} >{item[5]}</DataTable.Cell>
                  <DataTable.Cell style={{ width: 100 }} >{item[6]}</DataTable.Cell>
                </DataTable.Row>
              ))}
            </ScrollView>
          </DataTable>
        </ScrollView>
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
  },
  spin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}
)
export default Fee