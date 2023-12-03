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
            <View style={styles.box}>
                <Text style={styles.title}>
                    {data.forecast.daily.weather_description}
                </Text>
                <Icon name={data.forecast.daily.icon} size={150} color={colors.textColor} />
                <Text style={styles.locationText}>
                    {data.city} - {data.country}
                </Text>
            </View>
            <View style={styles.box}>
                <View style={styles.row}>
                    <View style={styles.card}>
                        <Text style={styles.text}>
                            {data.forecast.daily.temperature_min} - {data.forecast.daily.temperature_max}
                        </Text>
                        <Icon name='temperature-celsius' size={30} color={colors.textColor} />
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.text}>
                            {data.forecast.daily.wind_speed} km/h
                        </Text>
                        <Icon name='weather-windy' size={30} color={colors.textColor} />
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.text}>
                            {data.forecast.daily.rain_probability} %
                        </Text>
                        <Icon name='weather-pouring' size={30} color={colors.textColor} />
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.text}>
                            {data.forecast.daily.uv_index}
                        </Text>
                        <Text style={{ color: colors.textColor, fontSize: 22, fontWeight: 'bold' }}>UV</Text>
                    </View>
                </View>
            </View>
            <View style={styles.scrollView}>
                <View style={styles.row}>
                    <Icon name="clock-outline" size={25} color={colors.textColor} />
                    <Text style={styles.text}>Hourly</Text>
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}>
                    <FlatList
                        horizontal
                        data={data.forecast.hourly}
                        renderItem={({ item }) => (
                            <View style={styles.hourlyCard}>
                                <Text style={styles.textCard}>
                                    {item.time}
                                </Text>
                                <View style={styles.row}>
                                    <Text style={styles.textCard}>
                                        {item.temperature}
                                    </Text>
                                    <Icon name="temperature-celsius" size={18} color={colors.textColor} />
                                </View>
                                <Icon name={item.icon} size={40} color={colors.textColor} />
                                <Text style={styles.textCard}>
                                    {item.cloudiness}
                                </Text>
                                <Text style={styles.textCard}>Humidity: {item.humidity}%</Text>
                                <Text style={styles.textCard}>Rain: {item.rain_probability}%</Text>
                            </View>
                        )}
                    />
                </ScrollView>
            </View>
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
        padding: 10,
        gap: 20,

    },
    card: {
        width: 80,
        height: 80,
        backgroundColor: colors.componentBackground,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    row: {
        flexDirection: 'row',
        gap: 10
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    title: {
        color: colors.textColor,
        fontSize: 30,
    },
    locationText: {
        color: colors.textColor,
        fontSize: 18
    },
    text: {
        color: colors.textColor,
        fontSize: 18
    },
    scrollView: {
        gap: 10,
        width: '100%',
        height: 230,
        borderRadius: 15
    },
    hourlyCard: {
        backgroundColor: colors.componentBackground,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 110,
        height: '100%',
        borderRadius: 10,
        marginRight: 10,
        gap: 5
    },
    textCard: {
        color: colors.textColor,
        fontSize: 14
    },
})