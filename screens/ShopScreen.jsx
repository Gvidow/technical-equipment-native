import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { axiosInstance } from '../api';
import { setDevices } from '../store/deviceSlice';
import DeviceCard from '../components/DeviceCard';
import { ScrollView, StyleSheet } from 'react-native';


export default function ShopScreen({ navigation }) {
    const dispatch = useDispatch();
    const { devices } = useSelector((store) => store.device);
    console.log('eeeeeeeeeeeeeeeeeeeeee');
    useEffect(() => {
        async function getAllDevices() {
            console.log('fdf');
            await axiosInstance.get('/equipment/list').then((response) => {console.log('fdfdsfdsfdsfds');dispatch(setDevices(response?.data.body.equipments))}, error=>{console.log(error)}).catch(error =>{console.log(error)});
        }
        getAllDevices();
    }, [dispatch]);

    return (
        <ScrollView>
            <View style={styles.page}>
                {!!devices &&
                    devices.map((device) => <DeviceCard key={device.id} {...device} navigation={navigation} />)}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2a2a2a',
    },
});
