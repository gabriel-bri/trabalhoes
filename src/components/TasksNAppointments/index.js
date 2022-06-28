import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, TextInput, StyleSheet } from "react-native";

export default function TaskNAppointments() {
    const [taskDesc, setTaskDesc] = useState(null)

    const [tasksList, updateTaskList] = useState([])
    
    function updateList(task) {
        updateTaskList([...tasksList, task])
    }

    return(
        <View>
            <Text>Tarefas/Compromissos</Text>
            <View>
                <View>
                    <FlatList
                        data={tasksList}
                        renderItem={
                            ({item}) => <Text>{item.key}</Text>
                        }
                    />
                </View>
                <View style={styles.form}>
                    <Text style={styles.formText}>Descrição da tarefa</Text>

                    <TextInput placeholder="Ex.: Trabalho de POO" onChangeText={setTaskDesc} style={styles.formInput}/>

                    <TouchableOpacity onPress={() => {updateList({key: taskDesc})}} style={styles.formTouchButton}>
                        <Text style={styles.formTouchButtonText}> + </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        backgroundColor: '#ffffff',
        borderRadius: 5,
        padding: 10,
    },

    formText: {
        paddingBottom: 12,
        paddingLeft: 5,
    },

    formInput: {
        padding: 12,
        marginBottom: 12,
    },

    formTouchButton: {
        alignItems: 'center',
        backgroundColor: '#553FDE',
        width: 'auto',
        height: 'auto',
        borderRadius: 60,
        display: 'flex',
        justifyContent: 'center',
    },

    formTouchButtonText: {
        // fontSize: 50,
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})