import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Picker, Pressable, ImageBackground } from 'react-native';
import colors from "../utils/COLORS";
import { useNavigation } from "@react-navigation/native";

function HomeScreen() {
    const [selectedValue, setSelectedValue] = useState('HaNoi');

    const navigation = useNavigation();

    const navigationToWeather = () => {
        navigation.navigate('Weather', { selectedValue })
    }

    return (
        <ImageBackground
            source={require('../../assets/sky-background.jpg')}
            style={styles.backgroundImg}>
            <View style={styles.mainContainer}>
                <Text style={styles.title}>HELLO</Text>
                <Text style={styles.text}>Select your place</Text>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    style={styles.textInput}
                >
                    <Picker.Item label='Ha Noi' value='HaNoi' />
                    <Picker.Item label='Ho Chi Minh' value='HoChiMinh' />
                </Picker>
                <Pressable
                    onPress={() => navigationToWeather()}
                    style={styles.button}>
                    <Text style={styles.text}>Select</Text>
                </Pressable>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create(
    {
        backgroundImg: {
            flex: 1,
            resizeMode: 'cover',
            justifyContentL: 'center',
        },
        mainContainer: {
            padding: 20,
            backgroundColor: colors.mainBackground,
            flex: 1, justifyContent: 'center',
            alignItems: 'center',
            gap: 10,

        },
        title: {
            fontSize: 40,
            color: colors.textColor,
            fontWeight: "600",
            marginBottom: 60
        },
        text: {
            color: colors.textColor,
            fontSize: 18
        },
        textInput: {
            backgroundColor: colors.componentBackground,
            height: 50,
            width: '70%',
            paddingLeft: 20,
            paddingRight: 5,
            borderRadius: 25,
            fontSize: 18,
            color: colors.textColor,
            fontWeight: '500'

        },
        button: {
            backgroundColor: colors.subButtonColor,
            marginTop: 40,
            width: '50%',
            height: 40,
            borderRadius: 18,
            justifyContent: 'center',
            alignItems: 'center',


        }

    })

export default HomeScreen;