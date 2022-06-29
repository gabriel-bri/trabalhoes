import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import TaskList from "../TaskList";
import styles from "./styles"

export default function Form() {
    const [taskDesc, setTaskDesc] = useState(null)
    const [taskDate, setTaskDate] = useState(null)
    const [tasksList, updateTaskList] = useState([])
    
    function updateList(task) {
        updateTaskList([...tasksList, task])
    }

    return (
        <View>
            <View style={styles.form}>
                <Text style={styles.formText}>descrição da tarefa</Text>
                <TextInput placeholder="ex.: trabalho de poo" onChangeText={setTaskDesc} style={styles.formInput}/>
                        
                <Text style={styles.formText}>deadline</Text>
                <TextInput placeholder="15/05/22" onChangeText={setTaskDate} style={styles.formInput}/>
                        
                <TouchableOpacity  
                    onPress={ () => updateList({
                                desc: taskDesc,
                                date: new Date(taskDate),
                            })
                        } 
                    style={styles.formTouchButton}>

                    <Text style={styles.formTouchButtonText}>cadastrar</Text>
                </TouchableOpacity>
            </View>

            <TaskList tasksList={tasksList}/>
        </View>
    )
}