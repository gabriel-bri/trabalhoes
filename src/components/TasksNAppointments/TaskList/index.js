import { ListItem, Stack } from "@react-native-material/core";
import React from "react";
import { FlatList } from 'react-native';

export default function TaskList(props) {

    return (
        <Stack>
            <FlatList
                data={props.tasksList}
                renderItem={({item}) => <ListItem title={item.key}/>} 
            />
        </Stack>
    )
}