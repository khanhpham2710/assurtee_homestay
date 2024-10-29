import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PersonalType {
    contractor: string;
    dob: string;
    registrationNumber: string;
    phoneNumber: string;
}

export interface BusinessType {
    division: '개인' | '법인' | '';
    businessNumber: string;
    businessName: string;
    sameAddress: boolean;
    address: string;
    extra: string;
    hanok: '예' | '아니요' | '';
}

export interface InsuranceAmountType {
    fireInsurance: '1억' | '3억' | '5억';
    construction: number;
    facilities: number;
    inventory: number;
    housingType: string | '단독';
    area: number;
}

export interface InfoType
    extends PersonalType,
        BusinessType,
        InsuranceAmountType {}

const initialState: InfoType = {
    contractor: '',
    dob: '',
    registrationNumber: '',
    phoneNumber: '',
    division: '',
    businessNumber: '',
    businessName: '',
    sameAddress: true,
    address: '',
    extra: '',
    hanok: '아니요',
    fireInsurance: '1억',
    construction: 3,
    facilities: 4,
    inventory: 2,
    housingType: '단독',
    area: 79,
};

const infoSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {
        updateInfo(state, action: PayloadAction<Partial<InfoType>>) {
            return { ...state, ...action.payload };
        },
        resetInfo() {
            return initialState;
        },
    },
});

export const { updateInfo, resetInfo } = infoSlice.actions;
export default infoSlice.reducer;
