import { StatusRedux } from '../redux/store';

export interface PersonalType {
    contractor: string;
    dob: string;
    registrationNumber: string;
    phoneNumber: string;
    mail: string;
    email:
        | '이메일 선택1'
        | '이메일 선택2'
        | '이메일 선택3'
        | '이메일 선택4'
        | null;
}

export interface BusinessType {
    company: '개인' | '법인' | '';
    businessNumber: string;
    businessName: string;
    sameAddress: boolean;
    address: string;
    extra: string;
    image: File | null;
    building: '예' | '아니요' | '';
    equip: '설치되어 있습니다.' | '설치되어 있지 않습니다.';
}

export interface InsuranceAmountType {
    fireInsurance: '1억' | '3억' | '5억';
    construction: number;
    facilities: number;
    inventory: number;
    housingType:
        | '주택 유형1'
        | '주택 유형2'
        | '주택 유형3'
        | '주택 유형4'
        | '단독';
    area: number;
}

export interface StartEndDate {
    startDate: string;
    endDate: string;
}

export interface InfoType
    extends PersonalType,
        BusinessType,
        StatusRedux,
        StartEndDate,
        InsuranceAmountType {}
