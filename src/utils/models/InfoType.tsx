import { StatusRedux } from '../redux/store';

export interface PersonalType {
    contractor: string;
    dob: string;
    registrationNumber: string;
    phoneNumber: string;
    email: string;
    delivery: '직접입력' | string;
}

export interface BusinessType {
    division: '개인' | '법인' | '';
    businessNumber: string;
    businessName: string;
    sameAddress: boolean;
    address: string;
    extra: string;
    hanok: '예' | '아니요' | '';
    sprinkler: '설치되어 있지 않습니다' | '설치되어 있지 않습니다.';
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
        StatusRedux,
        InsuranceAmountType {}
