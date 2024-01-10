import { View, Text, StyleSheet, Image, Button } from 'react-native';
import React from 'react';

export default function DeviceCard({ navigation, ...props }) {
    const handlePress = () => {
        navigation.navigate('Device', { id: props.id });
    };
    console.log(navigation);
    console.log(props);

    return (
        <View style={styles.card}>
            <Image
                style={styles.image}
                // http://192.168.1.103:9000/equipment/900aecc1-91ff-11ee-848c-00155d8989d3.png
                // source={{ uri: `http://localhost:8080/api/v1/${props.image}` }}
                source={{ uri: `http://192.168.1.103:9000/equipment/900aecc1-91ff-11ee-848c-00155d8989d3.png` }}
                resizeMode='contain'
            />
            <View style={styles.container}>
                {/* <Text style={styles.brandTitle}>{props.brand.title}</Text> */}
                <View style={styles.row}>
                    <Text style={styles.text}>{props.title}</Text>
                    <Text style={styles.text}>{props.price} р.</Text>
                </View>
            </View>
            <Button title='View details' onPress={handlePress} />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        width: 320,
        backgroundColor: '#303030',
        borderRadius: 12,
        padding: 24,
        gap: 12,
        margin: 8,
    },
    image: { height: 320, alignSelf: 'stretch' },
    container: { display: 'flex', width: '100%', margin: 8 },
    row: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' },
    brandTitle: { color: '#4287f5', fontSize: 16 },
    text: { color: '#f0f0f0', fontSize: 16 },
});
