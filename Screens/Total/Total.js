
import { View, Text, TextInput, StyleSheet,ScrollView } from 'react-native'
import GlobalColors from '../../Utils/GlobalColors'
const Total = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>CHỌN CHỨC NĂNG</Text>
      <View style={styles.containerChild}>
        <View style={styles.block}></View>
        <View style={styles.block}></View>
        <View style={styles.block}></View>
        <View style={styles.block}></View>
        <View style={styles.block}></View>
        <View style={styles.block}></View>
        <View style={styles.block}></View>
        <View style={styles.block}></View>
        <View style={styles.block}></View>
        <View style={styles.block}></View>
        <View style={styles.block}></View>
        <View style={styles.block}></View>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='TÌM KIẾM...'/>
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
    color: GlobalColors.orange.color,
    fontSize: 20,
    marginVertical: 20,
    textAlign:'center'
  },
  containerChild: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width:'100%'
  },
  block: {
    width: 80,
    height: 80,
    backgroundColor: GlobalColors.blue.color,
    margin: 10,
    borderRadius: 20
  },
  inputContainer: {
    marginTop:20,
    height:'50%',
    marginBottom:20,
    alignItems:'center',
  },
  input: {
    fontSize: 20,
    backgroundColor: 'white',
    color: GlobalColors.blue.color,
    padding:10,
    width:300,
    textAlign:'center',
    borderRadius:40

  }
})

export default Total