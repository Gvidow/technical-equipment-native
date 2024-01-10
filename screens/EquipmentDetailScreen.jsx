import { ScrollView, StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { axiosInstance } from '../api';
import { setEquipment } from '../store/equipmentSlice';
import EquipmentInfo from '../components/EquipmentInfo';

export default function EquipmentDetailScreen() {
    const route = useRoute();
    const Equipment_id = route.params?.Equipment_id || 'No ID';
    const dispatch = useDispatch();
    const { equipment } = useSelector((store) => store.equipment);
    
    useEffect(() => {
        async function getEquipment() {
            const response = await axiosInstance.get(`/equipment/get/${Equipment_id}`);
            let eq = response?.data.body;
            eq.picture = 'http://192.168.1.103' + eq.picture.substring(16);
            dispatch(setEquipment(eq));
        }
        getEquipment();
    }, [dispatch]);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.page}>
                {!!equipment && <EquipmentInfo key={equipment.id} {...equipment} />}
            </View>        
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#1F3E47'
    },
    page: {
        display: 'flex',
        width: '100%',
        // justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#c0bebe',
    }
});
