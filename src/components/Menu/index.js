import React from "react";
import { Stack, Button } from "@react-native-material/core"
import Title from "../Title";

export default function Menu() {
    return(
        <Stack fill center spacing={10}>
            <Title/>
            <Button title={"cadastrar atividade/compromisso"}/>
        </Stack>
    )
}