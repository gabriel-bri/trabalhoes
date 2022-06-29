import React from "react";
import { Text, Stack } from "@react-native-material/core";
import Form from "./Form"

export default function TaskNAppointments() {
    return(
        <Stack>
            <Text variant='h2'>tarefas/compromissos</Text>
            <Form/>
        </Stack>
    )
}