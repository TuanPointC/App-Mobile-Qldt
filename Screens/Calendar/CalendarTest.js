import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Plane } from 'react-native-animated-spinkit'
import GlobalColors from '../../Utils/GlobalColors'
import { useState, useEffect } from 'react';
import CalendarDetail from './CalendarDetail';
import Picker from './Picker';
import { infor } from '../../Api/Api';

const CalendarTest = () => {
    const [currentTerm, setCurrentTerm] = useState("Trống");
    const [terms, setTerms] = useState([]);
    const [tests, setTests] = useState([])
    const [currentTest, setCurrentTest] = useState([])
    useEffect(() => {
        var data = {
            user: '19010040',
            pass: '09062001',
            action: 'diem_thi'
        }
        infor(data)
            .then(res => {
                setTests(res.data)
                getTerm(res.data)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])
    const getTerm = (data) => {
        const term = []
        data.forEach(element => {
            if (element.length === 10) {
                term.push(element[0])
            }
        });
        setTerms(term)
        setCurrentTerm(term[term.length-1])
        getCurrentTest(term[term.length-1])
        console.log(currentTest.length)
    }
    const getCurrentTest = (term) => {
        var start = 0
        var current = []
        for (var i = 0; i < tests.length; i++) {
            if (tests[i].length === 10 && tests[i][0] === term) {
                start = i
            }
            else {
                continue
            }
        }

        for (var i = start; i < tests.length; i++) {
            if (i === start) {
                var cloneTest = [...tests[i]]
                cloneTest.shift()
                current.push(cloneTest)
            }
            else {
                if (tests[i].length === 10) {
                    break
                }
                current.push(tests[i])
            }
        }
        setCurrentTest(current)
    }

    const changeCurrentTerm = (value) => {
        setCurrentTerm(value)
        getCurrentTest(value)
    }
    return (
        <View style={{ ...styles.containerChild, marginTop: 20 }}>
            <View style={styles.titleBlock2}>
                <Text style={{ ...styles.header, ...styles.headerBlock2 }}>LỊCH THI</Text>

                <View style={styles.dropdown}>
                    <Picker terms={terms} currentTerm={currentTerm} changeCurrentTerm={changeCurrentTerm} />
                </View>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Text style={{ ...styles.textHeaderBlock2, width: 100 }}>Môn</Text>
                <Text style={{ ...styles.textHeaderBlock2, width: 100 }}>Ngày thi</Text>
                <Text style={{ ...styles.textHeaderBlock2, width: 50 }}>Phòng</Text>
                <Text style={{ ...styles.textHeaderBlock2, width: 40 }}>Lần</Text>
            </View>
            <ScrollView style={{ height: '50%', marginTop: 15 }} nestedScrollEnabled={true}>
                {currentTest.map((item, index) => (
                    <CalendarDetail key={index} test={item} />
                ))}

            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
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
    header: {
        color: GlobalColors.blue.color,
        marginVertical: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    },
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
    },
})
export default CalendarTest