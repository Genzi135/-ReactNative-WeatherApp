import react from "react";
import { View, Text, Pressable, StyleSheet, } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from "../utils/COLORS";
import { useNavigation } from "@react-navigation/native";

function Header({ selectedValue }) {

    const navigate = useNavigation();

    const goBack = () => {
        navigate.goBack(null);
    }

    return (
        <View style={styles.container}>
            <View style={styles.component1}>
                <Icon
                    onPress={() => goBack()}
                    name="arrow-left" size={20} color={'white'} />
                <Text style={styles.text}>{selectedValue}</Text>
            </View>
            <Pressable style={styles.component2}>
                <Text style={{ color: 'grey', fontSize: 15 }}>
                    7 days forecast
                </Text>
                <Icon name="weather-snowy-rainy" size={20} color={'white'} />
            </Pressable>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.mainBackground,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        gap: 10,
        height: 60
    },
    component1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        gap: 10,
        height: 50
    }, component2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        gap: 10,
        height: 40,
        borderRadius: 20,
        backgroundColor: colors.componentBackground
    },
    text: {
        color: colors.textColor,
        fontSize: 25,
        fontWeight: '500',
        marginLeftL: 10
    },
})