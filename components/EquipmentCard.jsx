import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function EquipmentCard({ navigation, ...props }) {
    const handlePress = () => {
        navigation.navigate('Подробнее', { Equipment_id: props.id });
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.cardContainer}>
            <Text style={styles.title}>{props.title}</Text>
            <Image style={styles.image} source={{ uri: props.picture }} />
            {/* <Text style={styles.subtitle}>
                {props.description}:
            </Text> */}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#bab8b8',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        width: 160,
        height: 320,
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        margin: 5,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 12,
        textAlign: 'center',
        color: 'white',
        margin: 5,
    },
    image: {
        margin: 0,
        maxWidth: '100%',
        height: 'auto',
        borderRadius: 10,
        width: '100%',
        height: 200,
        borderWidth: 0,
    },
});
