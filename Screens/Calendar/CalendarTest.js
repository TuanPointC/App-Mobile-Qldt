import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Plane } from 'react-native-animated-spinkit'
import GlobalColors from '../../Utils/GlobalColors'
import { useState, useEffect } from 'react';
import CalendarDetail from './CalendarDetail';
import Picker from './Picker';
import { infor } from '../../Api/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CalendarTest = () => {
    const [currentTerm, setCurrentTerm] = useState("Trống");
    const [terms, setTerms] = useState([]);
    const [tests, setTests] = useState([])
    const [currentTest, setCurrentTest] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const getUserStored = async () => {
        var user = JSON.parse(await AsyncStorage.getItem("user"))
        return user
    }
    const getTerm = (data) => {
        const term = []
        data.forEach(element => {
            if (element.length === 10) {
                term.push(element[0])
            }
        });
        setTerms(term)
        setCurrentTerm(term[term.length - 1])
        getCurrentTest(term[term.length - 1], data)

    }

    const getCurrentTest = (term, data) => {
        var start = 0
        var current = []
        if (data === null) {
            data = tests
        }

        for (var i = 0; i < data.length; i++) {
            if (data[i].length === 10 && data[i][0] === term) {
                start = i
            }
            else {
                continue
            }
        }

        for (var i = start; i < data.length; i++) {
            if (i === start) {
                var cloneTest = [...data[i]]
                cloneTest.shift()
                current.push(cloneTest)
            }
            else {
                if (data[i].length === 10) {
                    break
                }
                current.push(data[i])
            }
        }
        setCurrentTest(current)
    }
    useEffect(() => {
        getUserStored()
            .then(user => {
                var data = {
                    user: user.email,
                    pass: user.password,
                    action: 'diem_thi'
                }
                infor(data)
                    .then(res => {
                        setTests(res.data)
                        getTerm(res.data)
                        setIsLoading(false)
                    })
                    .catch(e => {
                        console.log(e)
                    })
            })

    }, [])
    if (isLoading) {
        return (
            <View style={{ position: 'relative', height: 500 }}>
                <View style={styles.spin}>
                    <Plane size={48} color={GlobalColors.orange.color} />
                </View>
            </View>
        )
    }



    const changeCurrentTerm = (value) => {
        setCurrentTerm(value)
        getCurrentTest(value, null)
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
    spin: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [
            { translateX: -24 },
            { translateY: -24 },
        ]
    }
})
export default CalendarTest