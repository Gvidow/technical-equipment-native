import { ScrollView, StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../api';
import { setEquipments } from '../store/equipmentSlice';
import EquipmentCard from '../components/EquipmentCard';
import { useFocusEffect } from '@react-navigation/native';


export default function EquipmentsScreen({ navigation }) {
    const dispatch = useDispatch();
    const [searchEquipment, setSearchEquipment] = useState('');
    const { equipments } = useSelector((store) => store.equipment);
  
    const handleSearchEquipments = async () => {
      try {
        const response = await axiosInstance.get(
          `/equipment/list?equipment=${searchEquipment}`
        );
        feed = response?.data.body.equipments;
        feed.map(element => {
            element.picture = 'http://192.168.1.103' + element.picture.substring(16);
        });
        dispatch(setEquipments(feed));
      } catch (error) {
        console.error('Error during search:', error);
      }
    };
  
    useFocusEffect(
      React.useCallback(() => {
        async function getEquipments() {
          try {
            const response = await axiosInstance.get('/equipment/list');
            feed = response?.data.body.equipments;
            feed.map(element => {
                element.picture = 'http://192.168.1.103' + element.picture.substring(16);
            });
            dispatch(setEquipments(feed));
          } catch (error) {
            console.error('Error fetching equipments:', error);
          }
        }
        console.log('useeff');
        getEquipments();
      }, [dispatch]))
  
    return (
      <ScrollView style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Название оборудования"
            placeholderTextColor="grey"
            onChangeText={setSearchEquipment}
            value={searchEquipment}
          />
          <TouchableOpacity style={styles.button} onPress={handleSearchEquipments}>
            <Text style={styles.buttonText}> Найти</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.page}>
          {!!equipments &&
            equipments.map((equipment) => (
              <EquipmentCard key={equipment.id} {...equipment} navigation={navigation} />
            ))}
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
container: {
    backgroundColor: '#c0bebe',
},
container_price: {
    display: 'flex',
    flexDirection: 'row',
},
page: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#c0bebe',
},
inputContainer: {
    flexDirection: 'row',
    marginTop: 15,
    width: '100%', // Изменено на 100%
    paddingHorizontal: 10, // Добавлен отступ
},
input: {
    height: 40,
    backgroundColor: '#bab8b8',
    color: 'white',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: 'rgb(33, 33, 33)',
    marginBottom: 16,
    paddingLeft: 8,
    paddingRight: 8,
    borderEndStartRadius: 8,
    borderStartStartRadius: 8,
    flex: 1,
},
button: {
    marginLeft: 10,
    marginBottom: 16,
    backgroundColor: 'rgb(33, 33, 33)', // Черный фон
    paddingVertical: 0, // Отступы внутри кнопки
    paddingHorizontal: 30,
    borderRadius: 10, // Закругленные края
    justifyContent: 'center', // Выравниваем текст по центру
},
buttonText: {
    textAlign: 'center',
    color: 'white', // Белый текст
    fontWeight: 'bold',
},
});
