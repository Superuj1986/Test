import { View, Text, TextInput} from "react-native";
import React from "react";

export default function MainInput(props){
    const {
        title, 
        value,
        onChangeText,
        placeholer,
        onEndEditing,
        secureTextEntry,
    } = props;
    return(
        <>
            <Text style={{ color: "#bcbcbc", fontWeight: "bold", marginLeft: 20}}>
                {title}
            </Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                style={{
                    backgroundColor: "#f4f4f4",
                    paddingVertical: 6,
                    borderRadius: 20,
                    paddingHorizontal: 20,
                    marginBottom: 14,
                }}
                placeholer={placeholer}
                onEndEditing={onEndEditing}
                value={value}
                onChangeText={onChangeText}
            >
            </TextInput>
        </>
    )
}