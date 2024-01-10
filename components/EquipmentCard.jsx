// import { View, Text, StyleSheet, Image, Button } from 'react-native';
// import React from 'react';

// export default function DeviceCard({ navigation, ...props }) {
//     const handlePress = () => {
//         navigation.navigate('Device', { id: props.id });
//     };
//     console.log(navigation);
//     console.log(props);

//     return (
//         <View style={styles.card}>
//             <Image
//                 style={styles.image}
//                 // http://192.168.1.103:9000/equipment/900aecc1-91ff-11ee-848c-00155d8989d3.png
//                 // source={{ uri: `http://localhost:8080/api/v1/${props.image}` }}
//                 source={{ uri: `http://192.168.1.103:9000/equipment/900aecc1-91ff-11ee-848c-00155d8989d3.png` }}
//                 resizeMode='contain'
//             />
//             <View style={styles.container}>
//                 {/* <Text style={styles.brandTitle}>{props.brand.title}</Text> */}
//                 <View style={styles.row}>
//                     <Text style={styles.text}>{props.title}</Text>
//                     <Text style={styles.text}>{props.price} р.</Text>
//                 </View>
//             </View>
//             <Button title='View details' onPress={handlePress} />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     card: {
//         display: 'flex',
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//         flexDirection: 'column',
//         width: 320,
//         backgroundColor: '#303030',
//         borderRadius: 12,
//         padding: 24,
//         gap: 12,
//         margin: 8,
//     },
//     image: { height: 320, alignSelf: 'stretch' },
//     container: { display: 'flex', width: '100%', margin: 8 },
//     row: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' },
//     brandTitle: { color: '#4287f5', fontSize: 16 },
//     text: { color: '#f0f0f0', fontSize: 16 },
// });



//////
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
