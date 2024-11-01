import { StatusRedux } from '../redux/store';

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
        StatusRedux,
        InsuranceAmountType {}
