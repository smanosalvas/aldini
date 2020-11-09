import React, { useState } from 'react'
import { Platform, StyleSheet, TextInput, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../../res/colors';

const FoodSearch = (props)=>  {
    const [query, setQuery] = useState("");

    const handleText = (text)=> {
        setQuery(text);
        if(props.onChange){
            props.onChange(query)
        }
    }

    return(<View>
        <TextInput
            onChangeText={handleText}
            value={query}
            placeholder="Buscar platillo"
            placeholderTextColor="#fff"
            style={[
                styles.textInput,
                Platform.OS == 'ios' ? 
                styles.textInputIOS : 
                styles.textInputAndroid
            ]}
            />
    </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        height: 46,
        backgroundColor: colors.blackPearl,
        paddingLeft: 16,
        color: colors.white
    },
    textInputAndroid: {
        borderBottomWidth: 2,
        borderBottomColor: colors.zircon
    },
    textInputIOS: {
        margin: 8,
        borderRadius: 8
    }
});

export default FoodSearch