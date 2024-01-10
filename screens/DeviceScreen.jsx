import { View, Text } from 'react-native';
import React from 'react';

export default function DeviceScreen({ route }) {
    const { id } = route.params;
    return (
        <View>
            <Text>fdsfdgsdgsggdsdsg</Text>
            <Text>{id}</Text>
        </View>
    );
}
