import React from "react";
import { View, FlatList, Text } from 'react-native';

export default function TaskList(probs) {
    return (
        <View>
            <FlatList
                data={probs.tasksList}
                renderItem={
                    ({task}) => {
                        <View>
                            <Text>{task.desc}</Text>
                            <Text>{task.date}</Text>
                        </View>
                    }
                }
            />
        </View>
    )
}