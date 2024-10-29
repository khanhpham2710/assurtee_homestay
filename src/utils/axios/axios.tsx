import axios, { AxiosInstance, AxiosResponse } from 'axios';

const BASE_AXIOS: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        'X-OCR-SECRET': import.meta.env.VITE_API_OCR_KEY,
    },
    withCredentials: true,
});

export const postImage = async (
    blobImage: Blob
): Promise<AxiosResponse<unknown>> => {
    const formData = new FormData();
    formData.append(
        'message',
        JSON.stringify({
            images: [{ formData: 'png', name: 'demo' }],
            requestID: 'guide-demo',
            version: 'v2',
            timestamp: Date.now().toString(),
        })
    );

    formData.append('file', blobImage);

    try {
        const response = await BASE_AXIOS.post('', formData);
        return response;
    } catch (error) {
        console.log('error: ', error);
        throw error;
    }
};

export const base64ToBlob = (base64Data: string, contentType: string): Blob => {
    const byteCharacters: string = atob(base64Data.split(',')[1]);
    const byteArrays: Uint8Array[] = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
        const slice: string = byteCharacters.slice(offset, offset + 512);
        const byteNumbers: number[] = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        const byteArray: Uint8Array = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: contentType });
};
