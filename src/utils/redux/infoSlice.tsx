import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { postImage } from '../axios/axios';
import { AxiosError, AxiosResponse } from 'axios';
import { InfoType } from '../models/InfoType';
import { ImageData, PostImageFailed } from '../models/ImageData';
import { onYearLater } from '../validation/startAndEndDate';
import { Middleware } from '@reduxjs/toolkit';

const persistedState = sessionStorage.getItem('info');
export const saveToSessionStorageMiddleware: Middleware =
    (storeAPI) => (next) => (action) => {
        const result = next(action);

        const state = storeAPI.getState();

        const infoState = state.info;

        // const expirationDate = new Date(new Date().getTime() + 5 * 60 * 1000);
        // Cookies.set('info', JSON.stringify(infoState), { expires: expirationDate, secure: true, sameSite: 'Strict' });

        sessionStorage.setItem('info', JSON.stringify(infoState));

        return result;
    };

export const postImageData = createAsyncThunk<
    ImageData,
    Blob,
    { rejectValue: PostImageFailed }
>('user/postImage', async (image: Blob, thunkAPI) => {
    try {
        const response: AxiosResponse<ImageData> = await postImage(image);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            const errorData = error.response?.data as PostImageFailed;
            return thunkAPI.rejectWithValue({
                code: errorData.code,
                message: errorData.message || 'Axios error occurred',
                path: errorData.path,
                traceId: errorData.traceId,
                timestamp: errorData.timestamp
                    ? new Date(errorData.timestamp)
                    : new Date(),
            });
        } else {
            return thunkAPI.rejectWithValue({
                message:
                    error instanceof Error
                        ? error.message
                        : 'An unknown error occurred',
                timestamp: new Date(),
            });
        }
    }
});

const initialState: InfoType = persistedState
    ? JSON.parse(persistedState)
    : {
          contractor: '',
          dob: '',
          registrationNumber: '',
          phoneNumber: '',
          mail: '',
          email: null,
          company: '',
          businessNumber: '',
          businessName: '',
          sameAddress: true,
          address: '',
          image: null,
          extra: '',
          building: '아니요',
          equip: '설치되어 있지 않습니다.',
          fireInsurance: '1억',
          construction: 3,
          facilities: 4,
          inventory: 2,
          housingType: '단독',
          area: 79,
          error: null,
          status: 'idle',
          startDate: new Date().toISOString(),
          endDate: onYearLater(new Date()).toISOString(),
          success: true,
      };

const infoSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {
        updateInfo(state, action: PayloadAction<Partial<InfoType>>) {
            Object.assign(state, action.payload);
        },
        resetInfo() {
            // Clear the cookie when resetting the state
            sessionStorage.removeItem('info');
            return initialState;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(postImageData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(
                postImageData.fulfilled,
                (state, action: PayloadAction<ImageData>) => {
                    const payload =
                        action.payload.images?.[0]?.bizLicense?.result;

                    if (payload) {
                        state.address = payload.bisAddress?.[0]?.text || '';
                        state.registrationNumber =
                            payload.registerNumber?.[0]?.text || '';
                        state.businessName =
                            payload.companyName?.[0]?.text ||
                            payload.corpName?.[0]?.text ||
                            '';
                    }
                    state.status = 'succeeded';
                }
            )
            .addCase(
                postImageData.rejected,
                (state, action: PayloadAction<PostImageFailed | undefined>) => {
                    state.error = action.payload || {
                        message: 'Post image failed',
                        timestamp: new Date(),
                    };
                    state.status = 'failed';
                }
            );
    },
});

export const { updateInfo, resetInfo } = infoSlice.actions;
export default infoSlice.reducer;
