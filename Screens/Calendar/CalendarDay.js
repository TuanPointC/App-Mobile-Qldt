import { View, Text, Modal, Button, StyleSheet, ScrollView } from 'react-native'
import { Plane } from 'react-native-animated-spinkit'
import { DataTable } from 'react-native-paper';
import { useState } from 'react';
import GlobalColors from '../../Utils/GlobalColors';

const CalendarDay = (props) => {
    const [isLoading, setIsLoading] = useState(true)

    return (
        props.currentDay === null ?
            <View >

            </View>
            :
            <Modal visible={props.visible} animationType="slide">
                <ScrollView>
                    <ScrollView style={{ marginTop: 30 }} horizontal>
                        <DataTable>
                            <DataTable.Header >
                                <DataTable.Title style={{ width: 150 }}>Tên học phần</DataTable.Title>
                                <DataTable.Title style={{ width: 100 }}>Ca học</DataTable.Title>
                                <DataTable.Title style={{ width: 120 }}>Lịch học</DataTable.Title>
                                <DataTable.Title style={{ width: 100 }}>Mã học phần</DataTable.Title>
                                <DataTable.Title style={{ width: 60 }}>Số tín chỉ</DataTable.Title>
                                <DataTable.Title style={{ width: 60 }}>Hệ số</DataTable.Title>
                                <DataTable.Title style={{ width: 150 }}>Tên lớp tín chỉ</DataTable.Title>
                                <DataTable.Title style={{ width: 150 }}>Giáo viên</DataTable.Title>
                                <DataTable.Title style={{ width: 100 }} >Phòng học</DataTable.Title>
                            </DataTable.Header>

                            {props.currentDay.map((item, index) => (
                                <DataTable.Row key={index} style={{ height: 100, flexDirection: 'row' }}>
                                    <View style={{ width: 150, justifyContent: 'center' }} >
                                        <Text style={{ flexShrink: 1, fontWeight: 'bold' }}>{item[1]}</Text>
                                    </View>
                                    <DataTable.Cell style={{ width: 100 }} >{item[5] === '&nbsp;' ? 'Trống' : item[5]}</DataTable.Cell>
                                    <View style={{ width: 120, justifyContent: 'center' }} >
                                        <Text style={{ flexShrink: 1 }}>{item[6] === '&nbsp;' ? 'trống' : item[6]}</Text>
                                    </View>
                                    <DataTable.Cell style={{ width: 100 }} >{item[0]}</DataTable.Cell>

                                    <DataTable.Cell style={{ width: 60 }} >{item[2]}</DataTable.Cell>

                                    <DataTable.Cell style={{ width: 60 }} >{item[3]}</DataTable.Cell>
                                    <View style={{ width: 150, justifyContent: 'center' }} >
                                        <Text style={{ flexShrink: 1 }}>{item[4]}</Text>
                                    </View>
                                    <View style={{ width: 150, justifyContent: 'center' }} >
                                        <Text style={{ flexShrink: 1 }}>{item[7] === '&nbsp;' ? 'Trống' : item[7]}</Text>
                                    </View>
                                    <DataTable.Cell style={{ width: 100 }} >{item[8]}</DataTable.Cell>
                                </DataTable.Row>
                            ))}
                        </DataTable>
                    </ScrollView>
                    <Button onPress={() => props.setVisible(false)} title="Back" color={GlobalColors.blue.color} />
                </ScrollView>
            </Modal>

    )
}
const styles = StyleSheet.create({
    spin: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CalendarDay