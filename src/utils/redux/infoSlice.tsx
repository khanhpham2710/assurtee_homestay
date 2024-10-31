import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { postImage } from '../axios/axios';
import { AxiosError } from 'axios';

const postImageData = createAsyncThunk(
    'user/postImage',
    async (image: Blob, thunkAPI) => {
        try {
            const response = await postImage(image);
            return response;
        } catch (error) {
            if (error instanceof AxiosError) {
                return thunkAPI.rejectWithValue(error.response?.data);
            } else if (error instanceof Error) {
                return thunkAPI.rejectWithValue({ message: error.message });
            } else {
                return thunkAPI.rejectWithValue({
                    message: 'An unknown error occurred.',
                });
            }
        }
    }
);

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

interface statusRedux {
    error: unknown;
    status: string;
}
export interface InfoType
    extends PersonalType,
        BusinessType,
        statusRedux,
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
    error: null,
    status: 'start',
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
    extraReducers: (builder) => {
        builder.addCase(postImageData.fulfilled, (state, action) => {});
        builder.addCase(postImageData.rejected, (state, action) => {
            state.error = action?.payload;
        });
    },
});

export const { updateInfo, resetInfo } = infoSlice.actions;
export default infoSlice.reducer;
