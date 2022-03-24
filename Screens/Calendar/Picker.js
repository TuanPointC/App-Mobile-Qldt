import { View, Text, Modal, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import GlobalColors from '../../Utils/GlobalColors'
import Icon from 'react-native-vector-icons/FontAwesome5'
const Picker = (props) => {
  const [visible, setVisible] = useState(false)
  const modalHandler = (state) => {
    setVisible(state)
  }
  const choosePicker = (value) => {
    props.setCurrentTerm(value)
    setVisible(false)
  }
  return (
    <TouchableOpacity style={styles.container} onPress={() => modalHandler(!visible)}>
      <Text style={styles.title} >{props.currentTerm}</Text>
      <Icon name='caret-down' color='white' />
      <Modal visible={visible} animationType="slide" transparent={true}>
        <View style={styles.modal} onTouchEnd={() => modalHandler(!visible)}>

          <View style={styles.modalView}>
            <ScrollView  >
              {props.terms.map(term => (
                <TouchableOpacity key={term} onPress={() => choosePicker(term)} >
                  <Text style={styles.text}>{term}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

        </View>
      </Modal>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    height: 30,
    borderRadius: 10,
    backgroundColor: GlobalColors.blue.color,
    justifyContent: 'space-around'
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 10,
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
    textAlign: 'center'
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.44)'
  },

  modalView: {
    borderTopWidth: 30,
    borderTopColor: GlobalColors.blue.color,
    width: 200,
    height: 200,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },

})
export default Picker