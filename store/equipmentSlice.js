import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    equipments: [],
    equipment: {},
};

export const equipmentSlice = createSlice({
    name: 'device',
    initialState,
    reducers: {
        setEquipments: (state, { payload }) => {
            console.log('setEquipments');
            state.equipments = payload;
        },
        setEquipment: (state, { payload }) => {
            console.log('setEquipment');
            state.equipment = payload;
        },
        resetEquipment: (state) => {
            console.log('resetEquipment');
            state.equipment = {};
        },
    },
});

export const equipmentReducer = equipmentSlice.reducer;

export const { setEquipments, setEquipment, resetEquipment } = equipmentSlice.actions;
