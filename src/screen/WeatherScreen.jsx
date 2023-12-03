import react, { useState } from "react";
import { View, ScrollView, Text, Pressable, StyleSheet, FlatList } from 'react-native';
import colors from "../utils/COLORS";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DUMMY_DATA from '../../data/WeatherData';

function WeatherScreen({ route }) {

    const location = route.params.selectedValue;

    console.log(DUMMY_DATA.location);

    const data = DUMMY_DATA.location.find((item) => item.city === location)

    console.log(data);

    return (
        <View style={styles.container}>
            <View>
                <Text>
                    {data.forecast.daily.weather_description}
                </Text>
                <Icon name={data.forecast.daily.icon} size={80} color={colors.textColor} />
                <Text>
                    {data.city} - {data.country}
                </Text>


            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}>
                <FlatList
                    horizontal
                    data={data}
                    renderItem={({ item }) => (
                        <View>

                        </View>
                    )}
                />
            </ScrollView>
        </View>
    )
}

export default WeatherScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.mainBackground,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})