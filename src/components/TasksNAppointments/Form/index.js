import React, { useState } from "react";
import { Stack, TextInput, Text, Flex } from "@react-native-material/core";

import TaskList from "../TaskList";
import styles from "./styles"

import { Button } from "@react-native-material/core";

export default function Form() {
    const [taskDesc, setTaskDesc] = useState(null)
    const [taskDate, setTaskDate] = useState(null)
    const [tasksList, updateTaskList] = useState([])
    
    function updateList(task) {
        if(taskDate != null && taskDesc != null) {
            updateTaskList([...tasksList, task])
            setTaskDesc(null)
            setTaskDate(null)
        }
        
    }

    return (
        <Stack>
            <Stack style={styles.form}>
                <TextInput variant="standard" placeholder="descrição atividade/compromisso" onChangeText={setTaskDesc}/>
                            
                <TextInput variant="standard" placeholder="deadline" onChangeText={setTaskDate}/>
                    
                <Button ononPress={ () => updateList({ key: taskDesc+" \n "+taskDate }) } title={<Text variant="button">cadastrar</Text>}/>        
            </Stack>
            <Stack>
                <TaskList tasksList={tasksList}/>
            </Stack>
        </Stack>
    )
}